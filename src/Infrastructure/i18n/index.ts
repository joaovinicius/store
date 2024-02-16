
import ptBr from './pt-br'
import get from 'lodash/get'

const base = {
    'pt-br':ptBr,
    default: ptBr
}

export default function(message: string, lang: keyof typeof base = 'default'){
    return get(base[lang],message, 400)
}