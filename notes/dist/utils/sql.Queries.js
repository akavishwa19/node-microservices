const addNoteQuery = (queryObject) => {
    const columns = Object.keys(queryObject).join(",");
    const values = Object.values(queryObject)
        .map((value) => {
        if (typeof value === "string") {
            return `'${value}'`;
        }
        else {
            return value;
        }
    })
        .join(",");
    return `INSERT INTO notes (${columns}) VALUES(
            ${values}
    )`;
};
const fetchAllNotesQuery = () => {
    return `SELECT * FROM notes;`;
};
const fetchSingleNoteQuery = (id) => {
    return `SELECT * FROM notes WHERE id='${id}';`;
};
const updateNoteQuery = (id, updateFields) => {
    const setClause = Object.entries(updateFields)
        .map(([key, value]) => {
        if (typeof value === "string") {
            return `${key}='${value}'`;
        }
        else {
            return `${key}=${value}`;
        }
    })
        .join(",");
    return `UPDATE notes SET ${setClause} WHERE id='${id}'`;
};
const deleteNoteQuery = (id) => {
    return `DELETE FROM notes WHERE id='${id}'`;
};
export { addNoteQuery, fetchAllNotesQuery, fetchSingleNoteQuery, updateNoteQuery, deleteNoteQuery, };
//# sourceMappingURL=sql.Queries.js.map