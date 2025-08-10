import { addDescriptionQuery, fetchAllDescriptionsQuery, fetchSingleDescriptionQuery, updateDescriptionQuery, deleteDescriptionQuery, } from "../utils/sqlQueries.js";
import { pool } from "../db/index.js";
import validateNoteId from "../services/validateNoteId.js";
const addDescription = async (req, res) => {
    try {
        const data = req.body;
        if (!data) {
            return res.status(400).json({
                status: 400,
                message: "Please send some data to be added",
            });
        }
        const { note_id } = data;
        const isNoteValid = await validateNoteId(note_id);
        if (!isNoteValid) {
            return res.status(400).json({
                status: 400,
                message: "The note with given note_id doesnt exist",
            });
        }
        const note = await pool.query(addDescriptionQuery(data));
        console.log(note);
        return res.status(200).json({
            status: 200,
            message: "Description added succesfully",
            data: null,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            error: error?.message,
        });
    }
};
const fetchAllDescriptions = async (req, res) => {
    try {
        const data = await pool.query(fetchAllDescriptionsQuery());
        return res.status(200).json({
            status: 200,
            message: "All Descriptions fetched succesfully",
            data: data,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            error: error?.message,
        });
    }
};
const fetchSingleDescription = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                status: 400,
                message: "Please provide the note id",
            });
        }
        const existingNote = await pool.query(fetchSingleDescriptionQuery(id));
        if (existingNote.length == 0) {
            return res.status(400).json({
                status: 400,
                message: "Description with given id not found",
            });
        }
        const data = await pool.query(fetchSingleDescriptionQuery(id));
        return res.status(200).json({
            status: 200,
            message: "Description fetched succesfully",
            data: data,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            error: error?.message,
        });
    }
};
const updateDescription = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        if (!data || !id) {
            return res.status(400).json({
                status: 400,
                message: "Please send id with appropriate data to update the note",
            });
        }
        const existingNote = await pool.query(fetchSingleDescriptionQuery(id));
        if (existingNote.length == 0) {
            return res.status(400).json({
                status: 400,
                message: "Description with given id not found",
            });
        }
        const updatedNote = await pool.query(updateDescriptionQuery(id, data));
        return res.status(200).json({
            status: 200,
            message: "Description updated succesfully",
            data: null,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            error: error?.message,
        });
    }
};
const deleteDescription = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                status: 400,
                message: "Please provide the note id",
            });
        }
        const existingNote = await pool.query(fetchSingleDescriptionQuery(id));
        if (existingNote.length == 0) {
            return res.status(400).json({
                status: 400,
                message: "Description with given id not found",
            });
        }
        await pool.query(deleteDescriptionQuery(id));
        return res.status(200).json({
            status: 200,
            message: "Description deleted succesfully",
            data: null,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            error: error?.message,
        });
    }
};
export { addDescription, fetchAllDescriptions, fetchSingleDescription, updateDescription, deleteDescription, };
//# sourceMappingURL=description.controller.js.map