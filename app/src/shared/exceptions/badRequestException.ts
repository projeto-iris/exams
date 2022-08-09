/* eslint-disable max-classes-per-file */
import { HTTP_STATUS_CODE } from "../constants/httpStatusCode";

export class BusinessError extends Error {
    statusCode: number;

    code: string;

    constructor(message: string) {
        super(`Business Error: ${message}`);
        this.name = "BusinessError";
        this.message = message;
        this.statusCode = HTTP_STATUS_CODE.BAD_REQUEST;
    }
}
