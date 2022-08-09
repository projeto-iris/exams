import { Response } from "express";
import { BoilerplateBusiness } from "../../application/business/boilerplateBusiness";
import { IExpressParameters } from "../interfaces/IExpressParameters";

export class BoilerplateController {
    private business: BoilerplateBusiness;

    constructor(boilerplateBusiness: BoilerplateBusiness) {
        this.business = boilerplateBusiness;
    }

    async handler({
        request,
        response,
    }: IExpressParameters): Promise<Response> {
        this.business.useBoilerplate();
        return response.status(200);
    }
}
