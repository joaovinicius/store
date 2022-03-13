import { Project } from 'ts-morph'

const project = new Project()
project.addSourceFilesAtPaths('./src/**/*.ts')

export function getInterfaceProperties (interfaceName: string): string[] | undefined {
  const sourceFile = project.getSourceFileOrThrow(`${interfaceName}.ts`)
  const properties = sourceFile.getInterface(interfaceName)
    ?.getProperties().map((item: any) => item.getName())

  return properties
}
