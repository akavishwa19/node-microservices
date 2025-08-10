import express, { type Request, type Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./db/index.js";

const app = express();
app.use(cors());
app.use(express.json())

app.get("/health", async (req: Request, res: Response) => {
  try {
    return res.status(200).send("health API works fine");
  } catch (error) {
    console.log(error);
    throw new Error("some error occured");
  }
});

import noteRouter from "./routes/note.route.js";
app.use("/api/v1/notes", noteRouter);

const port = Number(process.env.PORT);

app.listen(port, async () => {
  await connectDB();
  console.log("server listening on port:" + port);
});
