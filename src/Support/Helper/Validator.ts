/* eslint-disable @typescript-eslint/no-explicit-any */
import validator from 'validator';

type opt = { [key:string]: object }
export interface IRule {
  [key:string]: (string | opt)[]

}

export default function Validator(rules: IRule, value: any): void {
  if (!value)  {
    throw rules
  }
  const verification: any = {}
  for (const [key, validators] of Object.entries(rules)) {
    const check = validators.map(method => {
      if (typeof method === 'string'){
        // eslint-disable-next-line
        // @ts-ignore
        const isValid = validator[method](typeof value[key] === 'string' ? value[key] :  String(value[key]))
        if (!value[key] || !isValid) {
          return method
        }
      }
      if (typeof method === 'object'){
        const [methodName] = Object.keys(method)
        // eslint-disable-next-line
        // @ts-ignore
        const isValid = validator[methodName](
          typeof value[key] === 'string' ? value[key] :  String(value[key]),
          method[methodName]

        )
        if (!value[key] || !isValid) {
          return method
        }
      }
      
    }).filter(item => !!item)
    if (check.length) {
      verification[key] = check
    }
  }
  // console.log(verification, rules, value)
  if (Object.keys(verification).length) {
    throw verification
  }
}
