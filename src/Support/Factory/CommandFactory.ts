import { Command } from '../../BoundedContext/Command'

export default function CommandFactory (
  Repository: any,
  UseCase: any
): Command {
  return new UseCase(Repository)
}
