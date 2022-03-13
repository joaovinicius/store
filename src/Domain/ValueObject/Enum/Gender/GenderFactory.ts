import { Gender } from './Gender'

export function GenderFactory (id: number | string = '', name: string = ''): Gender {
  return new Gender({ id, name })
}
