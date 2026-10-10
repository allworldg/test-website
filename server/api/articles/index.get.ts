import { db } from '../../db';
import { articles } from '../../db/article';

export default defineEventHandler(() => db.select().from(articles));
