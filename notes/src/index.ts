import express, { type Request, type Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./db/index.js";
import rabbitMqConnection from "./services/queueConnection.js";
import amqp from "amqplib";

const app = express();
app.use(cors());
app.use(express.json());

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

let channel: amqp.Channel;

app.listen(port, async () => {
  await connectDB();
  channel = await rabbitMqConnection("amqp://localhost");
  console.log("server listening on port:" + port);
});

export {channel};
