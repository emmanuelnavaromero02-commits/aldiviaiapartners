import Redis from 'ioredis';

declare global {
  // eslint-disable-next-line no-var
  var _redis: Redis | undefined;
}

function createRedisClient(): Redis {
  const host = process.env.REDIS_HOST;
  const port = parseInt(process.env.REDIS_PORT ?? '6379', 10);

  if (!host) throw new Error('REDIS_HOST environment variable is not set');

  const client = new Redis({ host, port, lazyConnect: true, maxRetriesPerRequest: 3 });

  client.on('error', (err) => {
    console.error('[Redis] Connection error:', err);
  });

  return client;
}

function getRedisClient(): Redis {
  const redis = globalThis._redis ?? createRedisClient();
  if (process.env.NODE_ENV !== 'production') globalThis._redis = redis;
  return redis;
}

const redis = new Proxy({} as Redis, {
  get(_target, prop, receiver) {
    const value = Reflect.get(getRedisClient(), prop, receiver);
    return typeof value === 'function' ? value.bind(getRedisClient()) : value;
  },
});

export default redis;
