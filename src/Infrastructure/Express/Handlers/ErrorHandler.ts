import lang from "../../i18n";
import { Response } from 'express'

    
export function ErrorHandler(message: string) {console.log(message)
    throw new Error(message)
}

export function ResponseErrorHandler(res: Response, error:Error) {
    res.status(lang(`${error.message}.status`)).json({ mensagem: lang(error.message) });
}