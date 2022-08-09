import { Router } from "express";
import { boilerplateRoutes } from "./boilerplate.routes";

const router = Router();

router.use("/boilerplate", boilerplateRoutes);

export { router };
