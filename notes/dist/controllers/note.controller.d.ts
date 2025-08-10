import type { Request, Response } from "express";
declare const addNote: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const fetchAllNotes: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const fetchSingleNote: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const updateNote: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteNote: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { addNote, fetchAllNotes, fetchSingleNote, updateNote, deleteNote };
//# sourceMappingURL=note.controller.d.ts.map