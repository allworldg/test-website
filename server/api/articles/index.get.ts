import { db } from '../../db';
import { articles } from '../../db/article';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const limit = query.limit === undefined ? 10 : Number(query.limit);
  const page = query.page === undefined ? 1 : Number(query.page);

  if (
    (query.limit !== undefined && (typeof query.limit !== 'string' || !Number.isInteger(limit) || limit <= 0)) ||
    (query.page !== undefined && (typeof query.page !== 'string' || !Number.isInteger(page) || page <= 0))
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'limit and page must be positive integers',
    });
  }

  return db.select().from(articles).limit(limit).offset((page - 1) * limit);
});
