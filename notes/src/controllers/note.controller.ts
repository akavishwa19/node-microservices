import type { Request, Response } from "express";
import {
  addNoteQuery,
  fetchAllNotesQuery,
  fetchSingleNoteQuery,
  updateNoteQuery,
  deleteNoteQuery,
} from "../utils/sql.Queries.js";
import type { DefaultError } from "../types/error.type.js";
import { pool } from "../db/index.js";

const addNote = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({
        status: 400,
        message: "Please send some data to be added",
      });
    }

    const note = await pool.query(addNoteQuery(data));
    console.log(note);
    return res.status(200).json({
      status: 200,
      message: "Note added succesfully",
      data: null,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      error: error?.message,
    });
  }
};

const fetchAllNotes = async (req: Request, res: Response) => {
  try {
    const data = await pool.query(fetchAllNotesQuery());
    return res.status(200).json({
      status: 200,
      message: "All Notes fetched succesfully",
      data: data,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      error: error?.message,
    });
  }
};

const fetchSingleNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        status: 400,
        message: "Please provide the note id",
      });
    }
    const data = await pool.query(fetchSingleNoteQuery(id));
    return res.status(200).json({
      status: 200,
      message: "All Notes fetched succesfully",
      data: data,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      error: error?.message,
    });
  }
};

const updateNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data || !id) {
      return res.status(400).json({
        status: 400,
        message: "Please send id with appropriate data to update the note",
      });
    }

    const updatedNote = await pool.query(updateNoteQuery(id, data));
    return res.status(200).json({
      status: 200,
      message: "Note updated succesfully",
      data: null,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      error: error?.message,
    });
  }
};

const deleteNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        status: 400,
        message: "Please provide the note id",
      });
    }

    await pool.query(deleteNoteQuery(id));
    return res.status(200).json({
      status: 200,
      message: "Note deleted succesfully",
      data: null,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      error: error?.message,
    });
  }
};

export { addNote, fetchAllNotes, fetchSingleNote, updateNote, deleteNote };
