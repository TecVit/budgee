// lib/postgres/db.ts
import { Client } from 'pg';

// export function getPgClient() {
//   return new Client({
//     host: process.env.SUPABASE_HOST,
//     user: process.env.SUPABASE_USER,
//     password: process.env.SUPABASE_PASSWORD,
//     database: process.env.SUPABASE_DATABASE,
//     port: Number(process.env.SUPABASE_PORT!) || 6543,
//     ssl: { rejectUnauthorized: false }
//   });
// }

export function getPgClient() {
  return new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
}