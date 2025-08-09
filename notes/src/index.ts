import express, { type Request, type Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  try {
    return res.status(200).send("health API works fine");
  } catch (error) {
    console.log(error);
    throw new Error("some error occured");
  }
});

const port = Number(process.env.PORT);

app.listen(port, () => {
  console.log("server listening on port:" + port);
});
