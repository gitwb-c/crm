import { Pool } from "pg";

export const pool = new Pool({
  host: process.env.DB_VIABILIDADE_HOST,
  port: Number(process.env.DB_VIABILIDADE_PORT),
  database: process.env.DB_VIABILIDADE_NAME,
  user: process.env.DB_VIABILIDADE_USER,
  password: process.env.DB_VIABILIDADE_PASSWORD,
});
