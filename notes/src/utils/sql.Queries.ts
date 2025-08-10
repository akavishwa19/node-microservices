const addNoteQuery = (queryObject: any): string => {
  const columns = Object.keys(queryObject).join(",");

  const values = Object.values(queryObject)
    .map((value) => {
      if (typeof value === "string") {
        return `'${value}'`;
      } else {
        return value;
      }
    })
    .join(",");


  return `INSERT INTO notes (${columns}) VALUES(
            ${values}
    )`;
};

const fetchAllNotesQuery = (): string => {
  return `SELECT * FROM notes;`;
};

const fetchSingleNoteQuery = (id: string): string => {
  return `SELECT * FROM notes WHERE id='${id}';`;
};

const updateNoteQuery = (id: string, updateFields: any): string => {
  const setClause = Object.entries(updateFields)
    .map(([key, value]) => {
      if (typeof value === "string") {
        return `${key}='${value}'`;
      } else {
        return `${key}=${value}`;
      }
    })
    .join(",");

  return `UPDATE notes SET ${setClause} WHERE id='${id}'`;
};

const deleteNoteQuery = (id: string): string => {
  return `DELETE FROM notes WHERE id='${id}'`;
};

export {
  addNoteQuery,
  fetchAllNotesQuery,
  fetchSingleNoteQuery,
  updateNoteQuery,
  deleteNoteQuery,
};
