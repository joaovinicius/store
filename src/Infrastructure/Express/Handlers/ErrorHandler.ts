import lang from "../../i18n";
import { Response } from 'express'

export interface IErrorHandler{
    message: string
    status: number
} 
    return {
        message: lang(message),
        status:
    }


export function ResponseErrorHandler(res: Response, error:IErrorHandler) {
    res.status(error.status).json({ mensagem: lang(error.message) });
}