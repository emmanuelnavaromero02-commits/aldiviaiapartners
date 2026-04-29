import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

const region = process.env.AWS_REGION ?? 'eu-south-1';
const dynamodbClient = new DynamoDBClient({ region });

export const dynamodb = DynamoDBDocumentClient.from(dynamodbClient, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});

export interface PutLeadInput {
  readonly email: string;
  readonly nombre: string;
  readonly anonymousId?: string;
  readonly source?: string;
  readonly metadata?: Record<string, unknown>;
}

export interface PutLeadResult {
  readonly leadId: string;
  readonly createdAt: string;
}

export async function putLead(input: PutLeadInput): Promise<PutLeadResult> {
  const tableName = process.env.DYNAMODB_LEADS_TABLE_NAME;

  if (!tableName) {
    throw new Error('DYNAMODB_LEADS_TABLE_NAME is required');
  }

  const leadId = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const normalizedEmail = input.email.trim().toLowerCase();

  await dynamodb.send(
    new PutCommand({
      TableName: tableName,
      Item: {
        PK: `LEAD#${leadId}`,
        SK: 'PROFILE',
        leadId,
        email: normalizedEmail,
        nombre: input.nombre.trim(),
        anonymousId: input.anonymousId,
        source: input.source ?? 'api/lead',
        metadata: input.metadata,
        createdAt,
        updatedAt: createdAt,
      },
      ConditionExpression: 'attribute_not_exists(PK)',
    }),
  );

  return {
    leadId,
    createdAt,
  };
}
