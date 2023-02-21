import { PlopGeneratorConfig } from 'node-plop'

const PromptBoundedContext = {
  type: 'list',
  name: 'folder',
  message: 'Bounded context',
  choices: [
    { name: 'Admin', value: 'Admin' },
    { name: 'Authentication', value: 'Authentication' },
    { name: 'Store', value: 'Store' }
  ]
}

const PromptDomainName = {
  type: 'list',
  name: 'folder',
  message: 'Select the domain',
  choices: [
    { name: 'Admin', value: 'Entity' },
    { name: 'Authentication', value: 'Authentication' },
    { name: 'Store', value: 'Store' }
  ]
}

const PromptUseCase = {
  type: 'input',
  name: 'useCase',
  message: 'UseCase for BoundedContext'
}

const PromptUseCaseHasParam = {
  type: 'input',
  name: 'useCase',
  message: 'UseCase for BoundedContext'
}

const AddRepository = {
  type: 'add',
  path: '../src/BoundedContext/{{pascalCase folder}}/{{pascalCase name}}/Repository.ts',
  templateFile: 'templates/BoundedContext/Repository.hbs'
}

const AddUseCase = {
  type: 'add',
  path: '../src/BoundedContext/{{pascalCase folder}}/{{pascalCase name}}/UseCase/{{pascalCase usecase}}.ts',
  templateFile: 'templates/BoundedContext/UseCase.hbs'
}

const AddTest = {
  type: 'add',
  path: '../src/BoundedContext/{{pascalCase folder}}/{{pascalCase name}}/{{pascalCase name}}.spec.ts',
  templateFile: 'templates/BoundedContext/Spec.hbs'
}

const UseCase: PlopGeneratorConfig = {
  description: 'Generates a BoundedContext',
  prompts: [
    PromptBoundedContext,
    PromptDomainName,
    PromptUseCase,
    PromptUseCaseHasParam
  ],
  actions: [AddRepository, AddUseCase, AddTest]
}

export default UseCase
// create use case
// context?
//     - admin
//     - store
//     has param?
//         type: String, Number, Date, File, Entity
// findOrCreate Entity
//
// where you will save?
//     database
//      // tables, repository
//     local storage
//      // keys, repository
//     api
//      // routes, repository
//
// requestUpdateEmail(from: string, body: Admin): Promise<boolean>,
// create use case file
// create repositories: api, localStorage, database
// create service: api, localStorage, database
// create state: module, files
// create express endpoint
// create quasar page
//
// create entity
//
// create component
// context? shared, admin, store
//
