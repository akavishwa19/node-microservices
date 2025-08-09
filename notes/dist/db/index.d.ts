import mariadb from "mariadb";
declare const pool: mariadb.Pool;
declare function connectDB(): Promise<void>;
export { connectDB, pool };
//# sourceMappingURL=index.d.ts.map