import { NextRequest, NextResponse } from 'next/server';
import { putLead } from '@/src/lib/aws/dynamodb';
import { assertLeadRateLimit } from '@/src/lib/aws/redis';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface LeadRequestBody {
  readonly email?: unknown;
  readonly nombre?: unknown;
  readonly anonymousId?: unknown;
  readonly source?: unknown;
  readonly metadata?: unknown;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clientIdentifier(request: NextRequest, email: string): string {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const realIp = request.headers.get('x-real-ip')?.trim();
  return `${email}:${forwardedFor ?? realIp ?? 'unknown'}`;
}

export async function POST(request: NextRequest) {
  let body: LeadRequestBody;

  try {
    body = (await request.json()) as LeadRequestBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (typeof body.email !== 'string' || typeof body.nombre !== 'string') {
    return NextResponse.json({ error: 'email and nombre are required' }, { status: 400 });
  }

  const email = body.email.trim().toLowerCase();
  const nombre = body.nombre.trim();

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'email is invalid' }, { status: 400 });
  }

  if (nombre.length < 2) {
    return NextResponse.json({ error: 'nombre must be at least 2 characters' }, { status: 400 });
  }

  const rateLimit = await assertLeadRateLimit(clientIdentifier(request, email));

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        error: 'Too many lead submissions',
        limit: rateLimit.limit,
        windowSeconds: rateLimit.windowSeconds,
      },
      { status: 429 },
    );
  }

  const lead = await putLead({
    email,
    nombre,
    anonymousId: typeof body.anonymousId === 'string' ? body.anonymousId : undefined,
    source: typeof body.source === 'string' ? body.source : undefined,
    metadata:
      body.metadata && typeof body.metadata === 'object' && !Array.isArray(body.metadata)
        ? (body.metadata as Record<string, unknown>)
        : undefined,
  });

  return NextResponse.json(
    {
      ok: true,
      leadId: lead.leadId,
      createdAt: lead.createdAt,
    },
    { status: 201 },
  );
}
