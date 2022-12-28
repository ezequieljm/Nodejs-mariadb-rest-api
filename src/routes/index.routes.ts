import { Router } from "express";
import { getPing } from "../controllers/index.controller";

const router: Router = Router();

router.get("/ping", getPing);

export default router;
