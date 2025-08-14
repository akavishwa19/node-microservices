import express from "express";
import cors from "cors";
import "dotenv/config";
import { createProxyMiddleware } from "http-proxy-middleware";
const app = express();
app.use(cors());
app.get("/health", async (req, res) => {
    try {
        return res.status(200).send("health API works fine");
    }
    catch (error) {
        console.log(error);
        throw new Error("some error occured");
    }
});
const noteService = "http://localhost:8001";
const descriptionService = "http://localhost:8002";
app.use("/api/v1/notes", createProxyMiddleware({
    target: noteService,
    changeOrigin: true
}));
app.use("/api/v1/descriptions", createProxyMiddleware({
    target: descriptionService,
    changeOrigin: true
}));
const port = Number(process.env.PORT);
app.listen(port, () => {
    console.log("server listening on port:" + port);
});
//# sourceMappingURL=index.js.map