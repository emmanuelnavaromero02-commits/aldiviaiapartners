import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

declare global {
  // eslint-disable-next-line no-var
  var _dynamo: DynamoDBDocumentClient | undefined;
}

function createDynamoClient(): DynamoDBDocumentClient {
  const client = new DynamoDBClient({ region: process.env.AWS_REGION ?? 'us-east-1' });
  return DynamoDBDocumentClient.from(client);
}

const dynamo: DynamoDBDocumentClient = globalThis._dynamo ?? createDynamoClient();
if (process.env.NODE_ENV !== 'production') globalThis._dynamo = dynamo;

export default dynamo;
