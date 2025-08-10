import type { Request, Response } from "express";
declare const addDescription: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const fetchAllDescriptions: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const fetchSingleDescription: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const updateDescription: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteDescription: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { addDescription, fetchAllDescriptions, fetchSingleDescription, updateDescription, deleteDescription, };
//# sourceMappingURL=description.controller.d.ts.map