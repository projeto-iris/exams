import { Router } from "express";
import { boilerplateController } from "../../container/boilerplateContainer";

const boilerplateRoutes = Router();

boilerplateRoutes.get("/", (req, res) => {
    return boilerplateController.handler({ request: req, response: res });
});

export { boilerplateRoutes };
