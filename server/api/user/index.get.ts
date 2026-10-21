import { eq } from 'drizzle-orm';
import { db } from '../../db';
import { users } from '../../db/schema/user';

export default defineEventHandler(async (event) => {
  const username = getCookie(event, 'access_token');

  if (!username) {
    throw createError({
      statusCode: 401,
      statusMessage: 'access token is required',
    });
  }

  const [user] = await db.select({ username: users.username }).from(users)
    .where(eq(users.username, username))
    .limit(1);

  if (!user) {
    deleteCookie(event, 'access_token', { path: '/' });
    throw createError({
      statusCode: 401,
      statusMessage: 'user not found',
    });
  }

  return user;
});
