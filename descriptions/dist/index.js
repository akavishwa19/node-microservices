import amqp from 'amqplib';
import express, {} from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./db/index.js";
import rabbitMqConnection from "./services/queueConnection.js";
import subscribeToQueueAndDeleteDescriptions from "./services/subDescriptionDeletion.js";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/health", async (req, res) => {
    try {
        return res.status(200).send("health API works fine");
    }
    catch (error) {
        console.log(error);
        throw new Error("some error occured");
    }
});
import descriptionRouter from "./routes/description.route.js";
app.use("/api/v1/descriptions", descriptionRouter);
const port = Number(process.env.PORT);
let channel;
app.listen(port, async () => {
    await connectDB();
    channel = await rabbitMqConnection("amqp://localhost");
    subscribeToQueueAndDeleteDescriptions();
    console.log("server listening on port:" + port);
});
export { channel };
//# sourceMappingURL=index.js.map