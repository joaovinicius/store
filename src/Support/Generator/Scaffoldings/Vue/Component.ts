import { PlopGeneratorConfig } from 'node-plop'

const PromptComponentName = {
  type: 'input',
  name: 'name',
  message: 'Component name'
}

const PromptComponentFolder = {
  type: 'list',
  name: 'folder',
  message: 'Component type',
  choices: [
    { name: 'Atoms', value: 'Atoms' },
    { name: 'Molecules', value: 'Molecules' },
    { name: 'Organisms', value: 'Organisms' },
    { name: 'Templates', value: 'Templates' },
    { name: 'Pages', value: 'Pages' }
  ]
}

const PromptComponentPageContext = {
  when: function (response: { folder: string; }) {
    return response.folder === 'Pages';
  },
  type: 'list',
  name: 'context',
  message: 'Component page context',
  choices: [
    { name: 'Admin', value: 'Atoms' },
    { name: 'Store', value: 'Store' },
  ]
}
const Component: PlopGeneratorConfig = {
  description: 'Scaffolding a Vuex module',
  prompts: [
    PromptComponentName,
    PromptComponentFolder,
    PromptComponentPageContext
  ],
  actions: []
}

export default Component
