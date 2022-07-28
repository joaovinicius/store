import {NodePlopAPI} from 'plop'
import Domain from './scaffoldings/Domain'

export default function (plop: NodePlopAPI) {
  // plop generator code
  plop.setGenerator('Domain', Domain)

  // plop.setGenerator('UseCase', UseCase)
  //
  // plop.setGenerator('VueComponent', {
  //   description: 'Generates a Vue Component',
  //   prompts: [
  //     {
  //       type: 'input',
  //       name: 'name',
  //       message: 'Component name, e.g. Candidate'
  //     },
  //     {
  //       type: 'input',
  //       name: 'folder',
  //       message: 'Folder within /src/'
  //     }
  //   ],
  //   actions: [
  //     {
  //       type: 'add',
  //       path:
  //           '../../src/{{pascalCase folder}}/{{pascalCase name}}.vue',
  //       templateFile: 'templates/Infrastructure/Vue/Component.hbs'
  //     },
  //     {
  //       type: 'add',
  //       path:
  //           '../../src/{{pascalCase folder}}/{{pascalCase name}}.spec.ts',
  //       templateFile: 'templates/Infrastructure/Vue/Spec.hbs'
  //     }
  //   ]
  // })
  //
  // plop.setGenerator('vuexModule', {
  //   description: 'Generates a Vuex Module',
  //   prompts: [
  //     {
  //       type: 'input',
  //       name: 'name',
  //       message: 'Module name, e.g. candidate'
  //     },
  //     {
  //       type: 'input',
  //       name: 'folder',
  //       message: 'Folder within /src/'
  //     }
  //   ],
  //   actions: [
  //     {
  //       type: 'add',
  //       path:
  //           '../../src/{{lowerCase folder}}/{{lowerCase name}}/action.ts',
  //       templateFile: 'templates/Infrastructure/Vuex/action.hbs'
  //     },
  //     {
  //       type: 'add',
  //       path:
  //           '../../src/{{lowerCase folder}}/{{lowerCase name}}/getters.ts',
  //       templateFile: 'templates/Infrastructure/Vuex/getters.hbs'
  //     },
  //     {
  //       type: 'add',
  //       path:
  //           '../../src/{{lowerCase folder}}/{{lowerCase name}}/index.ts',
  //       templateFile: 'templates/Infrastructure/Vuex/index.hbs'
  //     },
  //     {
  //       type: 'add',
  //       path:
  //           '../../src/{{lowerCase folder}}/{{lowerCase name}}/mutations.ts',
  //       templateFile: 'templates/Infrastructure/Vuex/mutations.hbs'
  //     },
  //     {
  //       type: 'add',
  //       path:
  //           '../../src/{{lowerCase folder}}/{{lowerCase name}}/state.ts',
  //       templateFile: 'templates/Infrastructure/Vuex/state.hbs'
  //     },
  //     {
  //       type: 'add',
  //       path:
  //           '../../src/{{lowerCase folder}}/{{lowerCase name}}/{{lowerCase name}}.spec.ts',
  //       templateFile: 'templates/Infrastructure/Vuex/spec.hbs'
  //     }
  //   ]
  // })
}
