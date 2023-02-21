/* eslint-disable @typescript-eslint/no-explicit-any */
import validator from 'validator';

export interface IRule {
  [key:string]: string[]
}

export default function Validate(rules: IRule, value: any): void {
  if (!value)  {
    throw rules
  }
  const verification: any = {}
  for (const [key, validators] of Object.entries(rules)) {
    if (!value[key] && validators.includes('required')) {
      verification[key] = validators
    } else {
      const check = validators.map(method => {
        if (method === 'isNotEmpty' ) {
          if (!value[key] || validator.isEmpty(value[key])) {
            return method
          }
        }

        // eslint-disable-next-line
        // @ts-ignore
        if (!value[key] || !validator[method](value[key])) {
          return method
        }
      })
      if (check.length) {
        verification[key] = check
      }
    }
  }
  if (Object.keys(verification).length) {
    throw verification
  }
}
