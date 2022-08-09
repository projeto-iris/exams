import { Router } from "express";
import { examsRoutes } from "./exams.routes";

const router = Router();

router.use("/exams", examsRoutes);

export { router };
