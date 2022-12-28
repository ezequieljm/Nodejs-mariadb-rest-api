import { Pool, createPool } from "mariadb";

export const pool: Pool = createPool({
    host: "localhost",
    user: "gorz",
    password: "left4dead2",
    database: "companydb",
    port: 3306,
});
