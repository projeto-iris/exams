import { Request, Response } from "express";

export interface IExpressParameters {
    request?: Request;
    response: Response;
}
