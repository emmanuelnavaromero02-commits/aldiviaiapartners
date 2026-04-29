#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ComputeStack } from '../lib/compute-stack';
import { DataStack } from '../lib/data-stack';

const app = new cdk.App();

const env = {
  region: 'eu-south-1',
};

const dataStack = new DataStack(app, 'ValdiviaDataStack', {
  env,
  crossRegionReferences: false,
});

new ComputeStack(app, 'ValdiviaComputeStack', {
  env,
  crossRegionReferences: false,
  leadsTable: dataStack.leadsTable,
  redisEndpointAddress: dataStack.redisEndpointAddress,
  redisEndpointPort: dataStack.redisEndpointPort,
});
