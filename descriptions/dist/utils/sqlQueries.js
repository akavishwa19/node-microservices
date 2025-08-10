const addDescriptionQuery = (queryObject) => {
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
    return `INSERT INTO descriptions (${columns}) VALUES(
            ${values}
    )`;
};
const fetchAllDescriptionsQuery = () => {
    return `SELECT * FROM descriptions;`;
};
const fetchSingleDescriptionQuery = (id) => {
    return `SELECT * FROM descriptions WHERE id='${id}';`;
};
const updateDescriptionQuery = (id, updateFields) => {
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
    return `UPDATE descriptions SET ${setClause} WHERE id='${id}'`;
};
const deleteDescriptionQuery = (id) => {
    return `DELETE FROM descriptions WHERE id='${id}'`;
};
const deleteDescriptionsViaNoteQuery = (id) => {
    return `DELETE FROM descriptions WHERE note_id='${id}';`;
};
export { addDescriptionQuery, fetchAllDescriptionsQuery, fetchSingleDescriptionQuery, updateDescriptionQuery, deleteDescriptionQuery, deleteDescriptionsViaNoteQuery, };
//# sourceMappingURL=sqlQueries.js.map