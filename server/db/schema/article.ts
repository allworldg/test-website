import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const articles = sqliteTable('articles', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description'),
  content: text('content'),
  domain: text('domain'),
  publishAt: integer('publishAt', {
    mode: 'timestamp',
  }).notNull(),
});
