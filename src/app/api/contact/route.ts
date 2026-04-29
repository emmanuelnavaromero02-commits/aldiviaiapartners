import { NextRequest, NextResponse } from 'next/server';
import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { randomUUID } from 'crypto';
import redis from '@/lib/redis';
import dynamo from '@/lib/dynamo';

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 60; // seconds

export async function POST(req: NextRequest) {
  try {
    // 1. Parse body
    const body = await req.json();
    const { name, email, company, industry, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Campos requeridos incompletos.' }, { status: 400 });
    }

    // 2. Rate limiting via Redis
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
    const rateLimitKey = `rate_limit:contact:${ip}`;

    const current = await redis.incr(rateLimitKey);
    if (current === 1) await redis.expire(rateLimitKey, RATE_LIMIT_WINDOW);

    if (current > RATE_LIMIT_MAX) {
      const ttl = await redis.ttl(rateLimitKey);
      return NextResponse.json(
        { error: 'Demasiados intentos. Por favor espera antes de volver a enviar.', retryAfter: ttl },
        { status: 429 }
      );
    }

    // 3. Save lead to DynamoDB
    const tableName = process.env.DYNAMODB_LEADS_TABLE_NAME;
    if (!tableName) throw new Error('DYNAMODB_LEADS_TABLE_NAME environment variable is not set');

    const lead = {
      id: randomUUID(),
      name,
      email,
      company: company ?? '',
      industry: industry ?? '',
      message,
      createdAt: new Date().toISOString(),
      ip,
    };

    await dynamo.send(new PutCommand({ TableName: tableName, Item: lead }));

    return NextResponse.json({ success: true }, { status: 201 });

  } catch (err) {
    console.error('[/api/contact] Error:', err);
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}
