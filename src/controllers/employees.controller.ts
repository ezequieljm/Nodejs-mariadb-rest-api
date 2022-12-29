import { Request, Response } from "express";
import { pool } from "../dbconnection";

/* 
    Read all employees
*/
export async function readAllEmployees(req: Request, res: Response): Promise<void> {
    try {
        const rows = await pool.query({ rowsAsArray: true, sql: "SELECT * FROM employees;" });
        res.status(200).json(rows);
    } catch (error) {
        res.send("something goes wrong");
    }
}
/* 
    Read only employees
*/
export async function readEmployee(req: Request, res: Response): Promise<void> {
    try {
        const employeeId: string = req.params.id;
        const rows = await pool.query(
            { rowsAsArray: true, sql: "SELECT * FROM employees e WHERE e.employee_id = ?" },
            [employeeId]
        );
        res.status(200).json(rows);
    } catch (error) {
        res.status(404).json({ message: "Employee not found" });
    }
}

/* 
    Register an employee
*/
export async function registerEmployee(req: Request, res: Response): Promise<void> {
    try {
        const { firstname, lastname, salary } = req.body;
        const rows = await pool.query(
            { rowsAsArray: true, sql: "INSERT INTO employees(firstname,lastname,salary) VALUES (?, ?, ?)" },
            [firstname, lastname, salary]
        );
        res.status(201).json({ id: parseInt(rows.insertId), firstname, lastname, salary });
    } catch (error) {
        res.status(500).json({ message: "Something goes wrong" });
    }
}

export async function updateEmployee(req: Request, res: Response): Promise<void> {
    try {
        const employeeId: string = req.params.id;
        const { firstname, lastname, salary } = req.body;
        const rows = await pool.query(
            {
                rowsAsArray: true,
                sql: `
            UPDATE employees  
            SET firstname = ?, lastname = ?, salary = 999999.99
            WHERE employee_id = ?`,
            },
            [firstname, lastname, salary, employeeId]
        );
    } catch (error) {
        res.status(500).json({ message: `User not found` });
    }
}

export async function updatePartialEmployee(req: Request, res: Response): Promise<void> {
    try {
        const employeeId: string = req.params.id;
        const { firstname, lastname, salary } = req.body;
        const rows = await pool.query(
            {
                rowsAsArray: true,
                sql: `
            UPDATE employees  
            SET firstname = IFNULL(?,firstname), lastname = IFNULL(?,lastname), salary = IFNULL(?,salary)
            WHERE employee_id = ?`,
            },
            [firstname, lastname, salary, employeeId]
        );
    } catch (error) {
        res.status(500).json({ message: `User not found` });
    }
}

/* 
    Delete an employee
*/
export async function deleteEmployee(req: Request, res: Response): Promise<void> {
    try {
        const employeeId: string = req.params.id;
        const result = await pool.query(
            { rowsAsArray: true, sql: "DELETE FROM employees WHERE employee_id = ?" },
            [employeeId]
        );
        if (result.affectedRows < 1) throw new Error("Record not exists in the database");

        res.status(200).json({ message: "Deleted employee", id: parseInt(employeeId) });
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "Employee not found" });
    }
}
