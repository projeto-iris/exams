import { IBoilerplateRepository } from "../interfaces/IBoilerplateRepository";

export class BoilerplateRepository implements IBoilerplateRepository {
    get(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
