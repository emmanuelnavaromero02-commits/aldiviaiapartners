import { createClient, type RedisClientType } from 'redis';

declare global {
  // eslint-disable-next-line no-var
  var valdiviaRedisClientPromise: Promise<RedisClientType> | undefined;
}

export function getRedisClient(): Promise<RedisClientType> {
  if (!globalThis.valdiviaRedisClientPromise) {
    const redisHost = process.env.REDIS_HOST;
    const redisPort = process.env.REDIS_PORT ?? '6379';

    if (!redisHost) {
      throw new Error('REDIS_HOST is required');
    }

    const client = createClient({
      url: `rediss://${redisHost}:${redisPort}`,
      socket: {
        tls: true,
      },
    });

    client.on('error', (error) => {
      console.error('Redis client error', error);
    });

    globalThis.valdiviaRedisClientPromise = client.connect() as Promise<RedisClientType>;
  }

  return globalThis.valdiviaRedisClientPromise;
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
