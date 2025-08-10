function createDescriptionTable() {
  const query = `CREATE TABLE IF NOT EXISTS descriptions(
    id UUID PRIMARY KEY DEFAULT UUID(),
    description TEXT,
    note_id UUID UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP )`;
  return query;
}

export { createDescriptionTable };
