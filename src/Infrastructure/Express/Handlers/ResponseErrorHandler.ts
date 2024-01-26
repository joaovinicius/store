import lang from "../../i18n";
import { Response } from 'express'

export default function ErrorHandler(res: Response, status: number, message: string) {
    res.status(status).json({ mensagem: lang(message) });
    return
}