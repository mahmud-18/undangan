import { sql } from '@vercel/postgres'

export async function createTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS wishes (
      id SERIAL PRIMARY KEY,
      nama TEXT NOT NULL,
      ucapan TEXT NOT NULL,
      konfirmasi TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `
}

export { sql }