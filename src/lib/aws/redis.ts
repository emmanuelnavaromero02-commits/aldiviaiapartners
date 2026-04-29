import Redis from 'ioredis';

declare global {
  // eslint-disable-next-line no-var
  var valdiviaRedisClient: Redis | undefined;
}

export async function getRedisClient(): Promise<Redis> {
  if (!globalThis.valdiviaRedisClient) {
    const redisHost = process.env.REDIS_HOST;
    const redisPort = parseInt(process.env.REDIS_PORT ?? '6379', 10);

    if (!redisHost) {
      throw new Error('REDIS_HOST is required');
    }

    const client = new Redis({
      host: redisHost,
      port: redisPort,
      lazyConnect: true,
      maxRetriesPerRequest: 3,
    });

    client.on('error', (error) => {
      console.error('Redis client error', error);
    });

    globalThis.valdiviaRedisClient = client;
  }

  if (globalThis.valdiviaRedisClient.status === 'wait') {
    await globalThis.valdiviaRedisClient.connect();
  }

  return globalThis.valdiviaRedisClient;
}

export interface RateLimitResult {
  readonly allowed: boolean;
  readonly count: number;
  readonly limit: number;
  readonly windowSeconds: number;
}

export async function assertLeadRateLimit(
  identifier: string,
  limit = 5,
  windowSeconds = 60,
): Promise<RateLimitResult> {
  const client = await getRedisClient();
  const safeIdentifier = identifier.trim().toLowerCase();
  const key = `lead-rate:${safeIdentifier}`;
  const count = await client.incr(key);

  if (count === 1) {
    await client.expire(key, windowSeconds);
  }

  return {
    allowed: count <= limit,
    count,
    limit,
    windowSeconds,
  };
}
