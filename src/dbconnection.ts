import { Pool, createPool } from "mariadb";

export const pool: Pool = createPool({
    host: "localhots",
    user: "gorz",
    password: "left4dead2",
    database: "companydb",
    port: 3306,
});
