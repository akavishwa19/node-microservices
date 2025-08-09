const createNotesTable = () => {
    return `CREATE TABLE IF NOT EXISTS notes(
        id UUID PRIMARY KEY DEFAULT UUID(),
        title VARCHAR(40),
        is_finsihed BOOLEAN DEFAULT FALSE,
        bookmarked BOOLEAN DEFAULT FALSE
    );`;
};
// function createDescriptionTable() {
//   const query = `CREATE TABLE IF NOT EXISTS descriptions(
//     id UUID PRIMARY KEY DEFAULT UUID(),
//     description TEXT,
//     note_id UUID,
//     FOREIGN KEY (note_id) REFERENCES notes(id) ON DELETE CASCADE )`;
//   return query;
// }
export { createNotesTable };
//# sourceMappingURL=queries.js.map