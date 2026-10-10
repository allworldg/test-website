import { db } from '../../db';
import { articles } from '../../db/article';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (
    !body ||
    body.name.length === 0 ||
    typeof body.publishAt !== 'number' ||
    !Number.isInteger(body.publishAt) 
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'name and a valid publishAt timestamp are required',
    });
  }

  const [article] = await db.insert(articles).values({
    name: body.name,
    description: body.description,
    content: body.content,
    publishAt: new Date(body.publishAt),
  }).returning();

  return article;
});
