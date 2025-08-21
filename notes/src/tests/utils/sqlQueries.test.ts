import {
      addNoteQuery,
  fetchAllNotesQuery,
  fetchSingleNoteQuery,
  updateNoteQuery,
  deleteNoteQuery,
}
from "../../utils/sql.Queries.ts";

describe("add queries for notes",()=>{
  it("should build the query for single option",()=>{
    const queryObject={
      title:"test title"
    }
    const sqlQuery=addNoteQuery(queryObject);
    expect(sqlQuery).toBe("INSERT INTO notes (title) VALUES('test title');")
  })

  it("should build the query for multiple options",()=>{
    const queryObject={
      title:"test title",
      is_finished:true
    }
    const sqlQuery=addNoteQuery(queryObject);
    expect(sqlQuery).toBe("INSERT INTO notes (title,is_finished) VALUES('test title',true);")
  })

})

describe("fetch query for notes",()=>{
  it("should build fetch query to return all rows",()=>{
    const sqlQuery=fetchAllNotesQuery();
    expect(sqlQuery).toBe("SELECT * FROM notes;")
  })
})

describe("fetch single note by id",()=>{
  it("should build query for fetching single note by id",()=>{
    const id="5a055d72-8b4b-41aa-8250-2e6246581c03"
    const sqlQuery=fetchSingleNoteQuery(id);
    expect(sqlQuery).toBe("SELECT * FROM notes WHERE id='5a055d72-8b4b-41aa-8250-2e6246581c03';")
  })
})

describe("update queries for notes",()=>{
  it("should build the query for single option",()=>{
    const id="5a055d72-8b4b-41aa-8250-2e6246581c03"
    const queryObject={
      title:"test title"
    }
    const sqlQuery=updateNoteQuery(id,queryObject);
    expect(sqlQuery).toBe("UPDATE notes SET title='test title' WHERE id='5a055d72-8b4b-41aa-8250-2e6246581c03';")
  })

  it("should build the query for multiple options",()=>{
    const id="5a055d72-8b4b-41aa-8250-2e6246581c03"
    const queryObject={
      title:"test title",
      is_finished:true
    }
    const sqlQuery=updateNoteQuery(id,queryObject);
    expect(sqlQuery).toBe("UPDATE notes SET title='test title',is_finished=true WHERE id='5a055d72-8b4b-41aa-8250-2e6246581c03';")
  })

})

describe("delete single note by id",()=>{
  it("should build query for deleting single note by id",()=>{
    const id="5a055d72-8b4b-41aa-8250-2e6246581c03"
    const sqlQuery=deleteNoteQuery(id);
    expect(sqlQuery).toBe("DELETE FROM notes WHERE id='5a055d72-8b4b-41aa-8250-2e6246581c03';")
  })
})