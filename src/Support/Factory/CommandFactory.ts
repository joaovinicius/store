import { Command } from '../../BoundedContext/Command'

export interface IUseCase {
  new (repository: unknown): Command
}

export default function CommandFactory(
  Repository: unknown,
  UseCase: IUseCase
): Command {
  return new UseCase(Repository)
}
