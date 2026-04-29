import * as cdk from 'aws-cdk-lib';
import * as amplify from 'aws-cdk-lib/aws-amplify';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export interface ComputeStackProps extends cdk.StackProps {
  readonly leadsTable: dynamodb.ITable;
  readonly redisEndpointAddress: string;
  readonly redisEndpointPort: string;
}

export class ComputeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ComputeStackProps) {
    super(scope, id, props);

    const amplifyDeploymentRole = iam.Role.fromRoleName(
      this,
      'AmplifyDeploymentRole',
      'AmplifyDeploymentRole',
      {
        mutable: true,
      },
    );

    props.leadsTable.grantReadWriteData(amplifyDeploymentRole);

    amplifyDeploymentRole.addToPrincipalPolicy(
      new iam.PolicyStatement({
        actions: [
          'elasticache:DescribeCacheClusters',
          'elasticache:DescribeReplicationGroups',
          'elasticache:DescribeServerlessCaches',
        ],
        resources: ['*'],
      }),
    );

    const environmentVariables: amplify.CfnApp.EnvironmentVariableProperty[] = [
      {
        name: 'DYNAMODB_LEADS_TABLE_NAME',
        value: props.leadsTable.tableName,
      },
      {
        name: 'REDIS_HOST',
        value: props.redisEndpointAddress,
      },
      {
        name: 'REDIS_PORT',
        value: props.redisEndpointPort,
      },
      {
        name: 'REDIS_TLS',
        value: 'true',
      },
    ];

    const amplifyApp = new amplify.CfnApp(this, 'ValdiviaAmplifyApp', {
      name: 'valdiviaiapartners-sap-ai',
      description: 'ValdiviIA Partners SAP AI Next.js 14 application',
      repository: 'https://github.com/emmanuelnavaromero02-commits/aldiviaiapartners',
      accessToken: cdk.SecretValue.secretsManager(
        '/github/emmanuelnavaromero02-commits/aldiviaiapartners/token',
      ).unsafeUnwrap(),
      iamServiceRole: amplifyDeploymentRole.roleArn,
      computeRoleArn: amplifyDeploymentRole.roleArn,
      platform: 'WEB_COMPUTE',
      enableBranchAutoDeletion: true,
      environmentVariables,
      buildSpec: [
        'version: 1',
        'frontend:',
        '  phases:',
        '    preBuild:',
        '      commands:',
        '        - npm ci',
        '    build:',
        '      commands:',
        '        - npm run build',
        '  artifacts:',
        '    baseDirectory: .next',
        '    files:',
        '      - "**/*"',
        '  cache:',
        '    paths:',
        '      - .next/cache/**/*',
        '      - node_modules/**/*',
      ].join('\n'),
      tags: [
        {
          key: 'Application',
          value: 'valdiviaiapartners-sap-ai',
        },
        {
          key: 'ManagedBy',
          value: 'aws-cdk',
        },
      ],
    });

    const mainBranch = new amplify.CfnBranch(this, 'MainBranch', {
      appId: amplifyApp.attrAppId,
      branchName: 'main',
      description: 'Production branch for valdiviaiapartners-sap.ai',
      enableAutoBuild: true,
      enablePullRequestPreview: true,
      framework: 'Next.js - SSR',
      stage: 'PRODUCTION',
      computeRoleArn: amplifyDeploymentRole.roleArn,
      environmentVariables,
    });
    mainBranch.addDependency(amplifyApp);

    const domain = new amplify.CfnDomain(this, 'ValdiviaDomain', {
      appId: amplifyApp.attrAppId,
      domainName: 'valdiviaiapartners-sap.ai',
      enableAutoSubDomain: false,
      subDomainSettings: [
        {
          branchName: 'main',
          prefix: '',
        },
        {
          branchName: 'main',
          prefix: 'www',
        },
      ],
    });
    domain.addDependency(mainBranch);

    new cdk.CfnOutput(this, 'AmplifyAppId', {
      value: amplifyApp.attrAppId,
    });

    new cdk.CfnOutput(this, 'AmplifyDefaultDomain', {
      value: amplifyApp.attrDefaultDomain,
    });
  }
}
