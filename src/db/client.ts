import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

let client: ReturnType<typeof postgres> | null = null;
let db: ReturnType<typeof drizzle> | null = null;

export function getDb() {
  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured");
  }

  if (!client) {
    client = postgres(connectionString, {
      max: 10,
      idle_timeout: 20,
      connect_timeout: 10,
    });
    db = drizzle(client, { schema });
  }

  return db;
}

export function getDbStatus() {
  return {
    configured: !!connectionString,
    connected: !!client,
  };
}

export async function closeDb() {
  if (client) {
    await client.end();
    client = null;
    db = null;
  }
}
