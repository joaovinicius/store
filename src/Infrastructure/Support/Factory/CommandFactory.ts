export default function CommandFactory (
  Repository: any,
  UseCase: any
): any {
  return new UseCase(Repository)
}
