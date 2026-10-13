import { count } from 'drizzle-orm';
import { db } from '../../db';
import { articles } from '../../db/schema/article';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  if (
    (query.limit !== undefined && typeof query.limit !== 'string') ||
    (query.page !== undefined && typeof query.page !== 'string')
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'limit and page must be positive integers',
    });
  }

  const limit = query.limit === undefined ? 10 : Number(query.limit);
  const page = query.page === undefined ? 1 : Number(query.page);

  if (
    !Number.isInteger(limit) || limit <= 0 ||
    !Number.isInteger(page) || page <= 0
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'limit and page must be positive integers',
    });
  }

  const [articleRows, totalRows] = await Promise.all([
    db.select().from(articles).limit(limit).offset((page - 1) * limit),
    db.select({ total: count() }).from(articles),
  ]);

  return {
    articles: articleRows,
    limit,
    page,
    total: totalRows[0]?.total??0,
  };
});
