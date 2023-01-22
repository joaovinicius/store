/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Project,
  SourceFile,
  PropertySignature,
  ParameterDeclaration,
  PropertyDeclaration,
  MethodSignature,
  MethodDeclaration,
  Symbol as TSSymbol
} from 'ts-morph'
import uniq from 'lodash/uniq'

const project = new Project()
project.addSourceFilesAtPaths([
  './src/Domain/**/*.ts',
  './src/Infrastructure/Express/Controller/**/*Dto.ts'
])

export interface FileDefinitions {
  all: string[]
  required: string[]
  optional: string[]
  methods: string[]
}
export type InterfaceProperties = FileDefinitions
export type ClassAttibutes = FileDefinitions
export type FunctionParameters = FileDefinitions

export function getSourceFileByFileName(fileName: string): SourceFile {
  return project.getSourceFileOrThrow(`${fileName}.ts`)
}

export function getPathExportNamesByPath(path: string): string[] {
  const sourceFile = getSourceFileByFileName(path)

  return (
    sourceFile.getExportSymbols()?.map((item: TSSymbol) => item.getName()) || []
  )
}

export function getInterfacePropertiesByName(
  sourceFile: SourceFile,
  interfaceName: string
): InterfaceProperties {
  const interfaceProperties: InterfaceProperties = {
    all: [],
    required: [],
    optional: [],
    methods: []
  }

  interfaceProperties.all =
    sourceFile
      .getInterface(interfaceName)
      ?.getProperties()
      .map((item: PropertySignature) => {
        const name = item.getName()
        if (item.hasQuestionToken()) {
          interfaceProperties.optional.push(name)
        } else {
          interfaceProperties.required.push(name)
        }
        return name
      }) || []

  return interfaceProperties
}

export function getInterfaceMethodsFromPath(
  path: string,
  interfaceName = 'Repository'
): string[] {
  const sourceFile = getSourceFileByFileName(path)

  return (
    sourceFile
      .getInterface(interfaceName)
      ?.getMethods()
      .map((item: MethodSignature) => {
        return item.getName()
      }) || []
  )
}

export function getInterfaceHeritageClausesByName(
  sourceFile: SourceFile,
  interfaceName: string
): InterfaceProperties {
  const interfaceProperties: InterfaceProperties = {
    all: [],
    required: [],
    optional: [],
    methods: []
  }
  const getHeritageClauses = sourceFile
    .getInterface(interfaceName)
    ?.getHeritageClauses()

  if (getHeritageClauses) {
    sourceFile
      .getInterface(interfaceName)
      ?.getBaseDeclarations()
      .forEach((item: any) => {
        item.getProperties().forEach((item: PropertySignature) => {
          const name = item.getName()
          if (item.hasQuestionToken()) {
            interfaceProperties.optional.push(name)
          }

          if (!item.hasQuestionToken()) {
            interfaceProperties.required.push(name)
          }

          interfaceProperties.all.push(name)
        })
      })
    return interfaceProperties
  }

  return interfaceProperties
}

export function getInterfaceProperties(
  interfaceName: string
): InterfaceProperties {
  const sourceFile = getSourceFileByFileName(interfaceName)
  const interfaceProperties = getInterfacePropertiesByName(
    sourceFile,
    interfaceName
  )
  const interfaceHeritageClauses = getInterfaceHeritageClausesByName(
    sourceFile,
    interfaceName
  )

  const data: InterfaceProperties = {
    all: [],
    required: [],
    optional: [],
    methods: []
  }
  data.all = uniq([...interfaceProperties.all, ...interfaceHeritageClauses.all])
  data.required = uniq([
    ...interfaceProperties.required,
    ...interfaceHeritageClauses.required
  ])
  data.optional = uniq([
    ...interfaceProperties.optional,
    ...interfaceHeritageClauses.optional
  ])

  return data
}

export function getFunctionParameters(
  functionName: string
): InterfaceProperties {
  const functionParameters: FunctionParameters = {
    all: [],
    required: [],
    optional: [],
    methods: []
  }
  const sourceFile = project.getSourceFileOrThrow(`${functionName}.ts`)
  functionParameters.all =
    sourceFile
      .getFunction(functionName)
      ?.getParameters()
      .map((item: ParameterDeclaration) => {
        const name = item.getName()
        if (item.hasQuestionToken()) {
          functionParameters.optional.push(name)
        } else {
          functionParameters.required.push(name)
        }
        return name
      }) || []

  return functionParameters
}

export function getClassMethodsFromPath(
  path: string,
  className = 'Service'
): string[] {
  const sourceFile = getSourceFileByFileName(path)

  return (
    sourceFile
      .getClass(className)
      ?.getMethods()
      .map((item: MethodDeclaration) => item.getName()) || []
  )
}

export function getClassAttibutesByName(
  sourceFile: SourceFile,
  className: string
): ClassAttibutes {
  const classAttibutes: ClassAttibutes = {
    all: [],
    required: [],
    optional: [],
    methods: []
  }
  classAttibutes.all =
    sourceFile
      .getClass(className)
      ?.getProperties()
      .map((item: PropertyDeclaration) => {
        const name = item.getName()
        if (item.hasQuestionToken()) {
          classAttibutes.optional.push(name)
        } else {
          classAttibutes.required.push(name)
        }
        return name
      }) || []

  return classAttibutes
}

export function getClassHeritageClausesByName(
  sourceFile: SourceFile,
  className: string
): ClassAttibutes {
  const classAttibutes: ClassAttibutes = {
    all: [],
    required: [],
    optional: [],
    methods: []
  }
  const getHeritageClauses = sourceFile
    .getClass(className)
    ?.getHeritageClauses()
  if (getHeritageClauses) {
    classAttibutes.all =
      sourceFile
        .getClass(className)
        ?.getBaseClass()
        ?.getProperties()
        ?.map((item: PropertyDeclaration) => {
          const name = item.getName()
          if (item.hasQuestionToken()) {
            classAttibutes.optional.push(name)
          } else {
            classAttibutes.required.push(name)
          }
          return name
        }) || []
  }

  return classAttibutes
}

export function getClassAttibutes(className: string): ClassAttibutes {
  const sourceFile = getSourceFileByFileName(className)
  const classAttibutes = getClassAttibutesByName(sourceFile, className)
  const classHeritageClauses = getClassHeritageClausesByName(
    sourceFile,
    className
  )

  const data: ClassAttibutes = {
    all: [],
    required: [],
    optional: [],
    methods: []
  }
  data.all = uniq([...classAttibutes.all, ...classHeritageClauses.all])
  data.required = uniq([
    ...classAttibutes.required,
    ...classHeritageClauses.required
  ])
  data.optional = uniq([
    ...classAttibutes.optional,
    ...classHeritageClauses.optional
  ])

  return data
}

export function getDirectoryPath(className: string): string {
  const sourceFile = project.getSourceFileOrThrow(`${className}.ts`)
  return sourceFile.getDirectoryPath() as string
}
