import express from "express";
const router = express.Router();
import { addDescription, fetchAllDescriptions, fetchSingleDescription, updateDescription, deleteDescription } from "../controllers/description.controller.js";
router.post("/", addDescription);
router.get("/all", fetchAllDescriptions);
router.get("/:id", fetchSingleDescription);
router.put("/:id", updateDescription);
router.delete("/:id", deleteDescription);
export default router;
//# sourceMappingURL=description.route.js.map