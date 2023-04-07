import { PlopGeneratorConfig } from 'node-plop'

const path = require('path');

const PromptModuleName = {
  type: 'input',
  name: 'name',
  message: 'Vuex module name'
}

const AddIndex = {
  type: 'add',
  path: '/src/Infrastructure/Vue/Vuex/{{camelCase name}}/index.ts',
  templateFile: 'templates/Vuex/index.hbs'
}

const AddGetters = {
  type: 'add',
  path: '/src/Infrastructure/Vue/Vuex/{{camelCase name}}/getters.ts',
  templateFile: 'templates/Vuex/getters.hbs'
}

const AddMutations = {
  type: 'add',
  path: '/src/Infrastructure/Vue/Vuex/{{camelCase name}}/mutations.ts',
  templateFile: 'templates/Vuex/mutations.hbs'
}

const AddActions = {
  type: 'add',
  path: '/src/Infrastructure/Vue/Vuex/{{camelCase name}}/actions.ts',
  templateFile: 'templates/Vuex/actions.hbs'
}

const AddState = {
  type: 'add',
  path: '/src/Infrastructure/Vue/Vuex/{{camelCase name}}/state.ts',
  templateFile: 'templates/Vuex/state.hbs'
}

const Vuex: PlopGeneratorConfig = {
  description: 'Scaffolding a Vuex module',
  prompts: [PromptModuleName],
  actions: [AddGetters, AddMutations, AddActions, AddState, AddIndex]
}

export default Vuex
