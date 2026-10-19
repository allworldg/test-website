import { eq } from 'drizzle-orm';
import { db } from '../../db';
import { users } from '../../db/schema/user';

export default defineEventHandler(async (event) => {
  const username = getCookie(event, 'access_token');

  if (!username) {
    return null;
  }

  const [user] = await db.select({ username: users.username }).from(users)
    .where(eq(users.username, username))
    .limit(1);

  if (!user) {
    deleteCookie(event, 'access_token', { path: '/' });
    return null;
  }

  return user.username;
});
