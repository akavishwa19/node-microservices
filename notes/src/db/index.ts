import mariadb from "mariadb";
import {createNotesTable} from "./queries.js";

const pool = mariadb.createPool({
  host: "mariadb",
  port: 3306,
  user: "myuser",
  password: "mypass",
  database: "testdb",
  connectionLimit: 5,
});

async function connectDB(): Promise<void> {
  try {
    const conn = await pool.getConnection();
    console.log("connected to maria db succesfully");
    await pool.query(createNotesTable());
    // const data = await pool.query("SHOW DATABASES");
    // console.log(data);
  } catch (error) {
    console.log(error);
    throw new Error("error connecting to database");
  }
}

export { connectDB, pool };
