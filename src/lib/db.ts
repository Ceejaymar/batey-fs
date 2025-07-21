import path from "path";
import sql from "better-sqlite3";

const dbPath = path.join(process.cwd(), "products.db");
const db = sql(dbPath, { readonly: true });

export default db;
