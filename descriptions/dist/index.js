import express, {} from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./db/index.js";
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
app.listen(port, async () => {
    await connectDB();
    console.log("server listening on port:" + port);
});
//# sourceMappingURL=index.js.map