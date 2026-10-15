import { count } from 'drizzle-orm';
import { db } from '../../db';
import { articles } from '../../db/schema/article';

export default defineEventHandler(async () => {
  const [result] = await db.select({ count: count() }).from(articles);

  return { count: result?.count ?? 0 };
});
