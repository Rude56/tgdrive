export async function checkRateLimit(env, key, maxRequests, windowSeconds) {
  if (!env.KV) return { allowed: true };
  const current = await env.KV.get(key);
  const count = current ? parseInt(current) : 0;
  if (count >= maxRequests) return { allowed: false, remaining: 0 };
  await env.KV.put(key, String(count + 1), { expirationTtl: windowSeconds });
  return { allowed: true, remaining: maxRequests - count - 1 };
}
