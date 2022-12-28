import express from "express";
import { Request, Response, NextFunction } from "express";
import employeesRoutes from "./routes/employees.routes";
import indexRoutes from "./routes/index.routes";
import morganBody from "morgan-body";

const app: express.Application = express();
const PORT: number = 8080;

// Morgan body
morganBody(app);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(employeesRoutes);
app.use(indexRoutes);

app.use(function (req: Request, res: Response, next: NextFunction) {
    res.status(404).json({
        message: "Endopoint not found",
    });
});

export default app;