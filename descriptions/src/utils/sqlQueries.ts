const addDescriptionQuery = (queryObject: any): string => {
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

  return `INSERT INTO descriptions (${columns}) VALUES(
            ${values}
    )`;
};

const fetchAllDescriptionsQuery = (): string => {
  return `SELECT * FROM descriptions;`;
};

const fetchSingleDescriptionQuery = (id: string): string => {
  return `SELECT * FROM descriptions WHERE id='${id}';`;
};

const updateDescriptionQuery = (id: string, updateFields: any): string => {
  const setClause = Object.entries(updateFields)
    .map(([key, value]) => {
      if (typeof value === "string") {
        return `${key}='${value}'`;
      } else {
        return `${key}=${value}`;
      }
    })
    .join(",");

  return `UPDATE descriptions SET ${setClause} WHERE id='${id}'`;
};

const deleteDescriptionQuery = (id: string): string => {
  return `DELETE FROM descriptions WHERE id='${id}'`;
};

const deleteDescriptionsViaNoteQuery = (id: string): string => {
  return `DELETE FROM descriptions WHERE note_id='${id}';`;
};

export {
  addDescriptionQuery,
  fetchAllDescriptionsQuery,
  fetchSingleDescriptionQuery,
  updateDescriptionQuery,
  deleteDescriptionQuery,
  deleteDescriptionsViaNoteQuery,
};
