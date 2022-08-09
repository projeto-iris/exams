import { IBoilerplateRepository } from "../interfaces/IBoilerplateRepository";
import { BoilerplateRepository } from "../repositories/boilerplateRepository";

export class BoilerplateBusiness {
    private repository: IBoilerplateRepository;

    constructor(boilerplateRepository: IBoilerplateRepository) {
        this.repository = boilerplateRepository;
    }

    async useBoilerplate() {
        console.log("foo, bar");
    }
}
