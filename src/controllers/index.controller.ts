import { Request, Response } from "express";
import { pool } from "../dbconnection";

export async function getPing(req: Request, res: Response) {
    const result = await pool.query("SELECT 1 + 1 AS result");
    res.json(result);
}
