import { Router } from "express";
import {
    deleteEmployee,
    readAllEmployees,
    registerEmployee,
    updateEmployee,
    readEmployee,
    updatePartialEmployee
} from "../controllers/employees.controller";

const router: Router = Router();

router.get("/employees", readAllEmployees);

router.get("/employees/:id", readEmployee);

router.post("/employees", registerEmployee);

router.put("/employees:id", updateEmployee);

router.patch("/employees:id", updatePartialEmployee);

router.delete("/employees/:id", deleteEmployee);

export default router;
