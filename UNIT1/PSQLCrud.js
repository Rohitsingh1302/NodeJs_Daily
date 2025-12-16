// crud.js  (Simplest PostgreSQL CRUD using Node.js)
const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "123456",
  port: 5432,
  database: "lpu"
});
async function main() {
  await client.connect();

  // CREATE TABLE (run once)
  await client.query(`
    CREATE TABLE IF NOT EXISTS student (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
    );
  `);
  // CREATE
  const createRes = await client.query(
    "INSERT INTO student (name) VALUES ($1) RETURNING *",
    ["Alice"]
  );
  console.log("Created:", createRes.rows[0]);
  // READ
  const readRes = await client.query("SELECT * FROM student");
  console.log("All students:", readRes.rows);

  // UPDATE
  const updateRes = await client.query(
    "UPDATE student SET name = $1 WHERE id = $2 RETURNING *",
    ["Bob", 1]
  );
  console.log("Updated:", updateRes.rows[0]);

  // DELETE
  const deleteRes = await client.query(
    "DELETE FROM student WHERE id = $1 RETURNING *",
    [1]
  );
  console.log("Deleted:", deleteRes.rows[0]);

  await client.end();
}

