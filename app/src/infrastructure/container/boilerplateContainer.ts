import { BoilerplateBusiness } from "../../application/business/boilerplateBusiness";
import { BoilerplateRepository } from "../../application/repositories/boilerplateRepository";
import { BoilerplateController } from "../controllers/boilerplateController";

const boilerplateRepository = new BoilerplateRepository();

const boilerplateBusiness = new BoilerplateBusiness(boilerplateRepository);

export const boilerplateController = new BoilerplateController(
    boilerplateBusiness
);
