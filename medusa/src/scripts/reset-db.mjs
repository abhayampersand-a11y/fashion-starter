import pg from "pg"

const { Client } = pg

async function resetDatabase() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "admin",
    database: "postgres",
  })

  await client.connect()
  await client.query(
    "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname=$1 AND pid<>pg_backend_pid()",
    ["medusa"]
  )
  await client.query("DROP DATABASE IF EXISTS medusa")
  await client.query("CREATE DATABASE medusa")
  console.log("medusa database reset")
  await client.end()
}

resetDatabase().catch((e) => console.error(e.message))
