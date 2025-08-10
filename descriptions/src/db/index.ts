import mariadb from "mariadb";
import {createDescriptionTable} from "./queries.js";

const pool = mariadb.createPool({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "admin",
  database: "descdb",
  connectionLimit: 5,
});

async function connectDB(): Promise<void> {
  try {
    const conn = await pool.getConnection();
    console.log("connected to maria db succesfully");
    await pool.query(createDescriptionTable());
  } catch (error) {
    console.log(error);
    throw new Error("error connecting to database");
  }
}

export { connectDB, pool };
