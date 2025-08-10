import express from "express";
const router = express.Router();
import { addNote, fetchAllNotes, fetchSingleNote, updateNote, deleteNote, } from "../controllers/note.controller.js";
router.post("/", addNote);
router.get("/all", fetchAllNotes);
router.get("/:id", fetchSingleNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
export default router;
//# sourceMappingURL=note.route.js.map