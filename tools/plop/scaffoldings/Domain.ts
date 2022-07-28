import { PlopGeneratorConfig } from 'node-plop'

const PromptDomainName = {
  type: 'input',
  name: 'name',
  message: 'Domain name'
}

const PromptDomainFolder = {
  type: 'list',
  name: 'folder',
  message: 'Domain type',
  choices: [
    { name: 'Aggregate', value: 'Aggregate' },
    { name: 'Authentication', value: 'Entity' },
    { name: 'Entity', value: 'Entity' },
    { name: 'ValueObject', value: 'ValueObject' }
  ]
}

const AddEntity = {
  type: 'add',
  path: '../../src/Domain/{{pascalCase folder}}/{{pascalCase name}}/{{pascalCase name}}.ts',
  templateFile: 'templates/Domain/Entity.hbs'
}

const AddInterface = {
  type: 'add',
  path: '../../src/Domain/{{pascalCase folder}}/{{pascalCase name}}/I{{pascalCase name}}.ts',
  templateFile: 'templates/Domain/Interface.hbs'
}

const AddFactory = {
  type: 'add',
  path: '../../src/Domain/{{pascalCase folder}}/{{pascalCase name}}/{{pascalCase name}}Factory.ts',
  templateFile: 'templates/Domain/Factory.hbs'
}

const AddIndex = {
  type: 'add',
  path: '../../src/Domain/{{pascalCase folder}}/{{pascalCase name}}/index.ts',
  templateFile: 'templates/Domain/index.hbs'
}

const AddMock = {
  type: 'add',
  path: '../../test/unit/Domain/__mocks__/{{pascalCase folder}}/{{pascalCase name}}.ts',
  templateFile: 'templates/Domain/Mock.hbs'
}

const Domain: PlopGeneratorConfig = {
  description: 'Scaffolding a domain',
  prompts: [PromptDomainName, PromptDomainFolder],
  actions: [AddEntity, AddFactory, AddInterface, AddMock, AddIndex]
}

export default Domain
