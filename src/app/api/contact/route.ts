import { NextRequest, NextResponse } from 'next/server';
import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { randomUUID } from 'crypto';
import dynamo from '@/lib/dynamo';

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const ipMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): { allowed: boolean; retryAfter: number } {
  const now = Date.now();
  const entry = ipMap.get(ip);
  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }
  entry.count++;
  return { allowed: true, retryAfter: 0 };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, industry, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Campos requeridos incompletos.' }, { status: 400 });
    }
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
    const { allowed, retryAfter } = checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: 'Demasiados intentos. Por favor espera.', retryAfter },
        { status: 429 }
      );
    }
    const tableName = process.env.DYNAMODB_LEADS_TABLE_NAME;
    if (!tableName) throw new Error('DYNAMODB_LEADS_TABLE_NAME not set');
    await dynamo.send(new PutCommand({
      TableName: tableName,
      Item: { id: randomUUID(), name, email, company: company ?? '', industry: industry ?? '', message, createdAt: new Date().toISOString(), ip },
    }));
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error('[/api/contact] Error:', err);
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}
