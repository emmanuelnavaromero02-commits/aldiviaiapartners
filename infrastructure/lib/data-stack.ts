import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elasticache from 'aws-cdk-lib/aws-elasticache';
import { Construct } from 'constructs';

export class DataStack extends cdk.Stack {
  public readonly leadsTable: dynamodb.Table;
  public readonly redisEndpointAddress: string;
  public readonly redisEndpointPort: string;
  public readonly redisSecurityGroup: ec2.SecurityGroup;
  public readonly vpc: ec2.Vpc;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.vpc = new ec2.Vpc(this, 'ValdiviaVpc', {
      ipAddresses: ec2.IpAddresses.cidr('10.80.0.0/16'),
      availabilityZones: ['eu-south-1a', 'eu-south-1b'],
      natGateways: 1,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'private',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
      ],
    });

    this.leadsTable = new dynamodb.Table(this, 'ValdiviaLeadsTable', {
      tableName: 'valdivia-leads',
      partitionKey: {
        name: 'PK',
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: 'SK',
        type: dynamodb.AttributeType.STRING,
      },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      pointInTimeRecovery: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    this.leadsTable.addGlobalSecondaryIndex({
      indexName: 'EmailIndex',
      partitionKey: {
        name: 'email',
        type: dynamodb.AttributeType.STRING,
      },
      projectionType: dynamodb.ProjectionType.ALL,
    });

    this.leadsTable.addGlobalSecondaryIndex({
      indexName: 'AnonymousIdIndex',
      partitionKey: {
        name: 'anonymousId',
        type: dynamodb.AttributeType.STRING,
      },
      projectionType: dynamodb.ProjectionType.ALL,
    });

    this.redisSecurityGroup = new ec2.SecurityGroup(this, 'ValdiviaRedisSecurityGroup', {
      vpc: this.vpc,
      allowAllOutbound: true,
      description: 'Security group for the private Valdivia Redis replication group',
    });

    const privateSubnets = this.vpc.selectSubnets({
      subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
    });

    const redisSubnetGroup = new elasticache.CfnSubnetGroup(this, 'ValdiviaRedisSubnetGroup', {
      description: 'Private subnets for Valdivia Redis',
      subnetIds: privateSubnets.subnetIds,
      cacheSubnetGroupName: 'valdivia-redis-private-subnets',
    });

    const redis = new elasticache.CfnReplicationGroup(this, 'ValdiviaRedis', {
      replicationGroupId: 'valdivia-redis',
      replicationGroupDescription: 'TLS-enabled Redis for Valdivia anonymous identity sessions',
      engine: 'redis',
      engineVersion: '7.1',
      cacheNodeType: 'cache.t4g.micro',
      cacheSubnetGroupName: redisSubnetGroup.cacheSubnetGroupName,
      securityGroupIds: [this.redisSecurityGroup.securityGroupId],
      transitEncryptionEnabled: true,
      atRestEncryptionEnabled: true,
      automaticFailoverEnabled: false,
      numCacheClusters: 1,
      port: 6379,
    });
    redis.addDependency(redisSubnetGroup);

    this.redisEndpointAddress = redis.attrPrimaryEndPointAddress;
    this.redisEndpointPort = redis.attrPrimaryEndPointPort;

    new cdk.CfnOutput(this, 'LeadsTableName', {
      value: this.leadsTable.tableName,
    });

    new cdk.CfnOutput(this, 'RedisEndpointAddress', {
      value: this.redisEndpointAddress,
    });
  }
}
