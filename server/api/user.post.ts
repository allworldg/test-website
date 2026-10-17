import { eq } from 'drizzle-orm';
import { db } from '../db';
import { users } from '../db/schema/user';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (
    !body ||
    typeof body.username !== 'string' || body.username.length === 0 ||
    typeof body.password !== 'string' || body.password.length === 0
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'username and password are required',
    });
  }

  const [user] = await db.select().from(users)
    .where(eq(users.username, body.username))
    .limit(1);

  if (!user || user.password !== body.password) {
    throw createError({
      statusCode: 401,
      statusMessage: 'username or password is wrong',
    });
  }

  return { success: true };
});
