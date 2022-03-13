module.exports = function (plop) {
  plop.setGenerator('domain', {
    description: 'Generates a domain',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Domain name, e.g. Candidate'
      },
      {
        type: 'input',
        name: 'folder',
        message: 'Folder within /src/'
      }
    ],
    actions: [
      {
        type: 'add',
        path:
          '../src/Domain/{{pascalCase folder}}/{{pascalCase name}}.ts',
        templateFile: 'templates/Domain/Entity.hbs'
      },
      {
        type: 'add',
        path:
          '../src/Domain/{{pascalCase folder}}/I{{pascalCase name}}.ts',
        templateFile: 'templates/Domain/Interface.hbs'
      },
      {
        type: 'add',
        path:
          '../src/Domain/{{pascalCase folder}}/{{pascalCase name}}Factory.ts',
        templateFile: 'templates/Domain/Factory.hbs'
      },
      {
        type: 'add',
        path:
          '../src/Domain/{{pascalCase folder}}/index.ts',
        templateFile: 'templates/Domain/index.hbs'
      },
      {
        type: 'add',
        path:
          '../src/Domain/{{pascalCase folder}}/{{pascalCase name}}.spec.ts',
        templateFile: 'templates/Domain/Spec.hbs'
      }
    ]
  })

  plop.setGenerator('boundedContext', {
    description: 'Generates a BoundedContext',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'BoundedContext name, e.g. Candidate'
      },
      {
        type: 'input',
        name: 'folder',
        message: 'Folder within /src/'
      },
      {
        type: 'input',
        name: 'usecase',
        message: 'UseCase for BoundedContext'
      }
    ],
    actions: [
      {
        type: 'add',
        path:
          '../src/BoundedContext/{{pascalCase folder}}/{{pascalCase name}}/Repository.ts',
        templateFile: 'templates/BoundedContext/Repository.hbs'
      },
      {
        type: 'add',
        path:
        '../src/BoundedContext/{{pascalCase folder}}/{{pascalCase name}}/UseCase/{{pascalCase usecase}}.ts',
        templateFile: 'templates/BoundedContext/UseCase.hbs'
      },
      {
        type: 'add',
        path:
          '../src/BoundedContext/{{pascalCase folder}}/{{pascalCase name}}/{{pascalCase name}}.spec.ts',
        templateFile: 'templates/BoundedContext/Spec.hbs'
      }
    ]
  })

  plop.setGenerator('vueComponent', {
    description: 'Generates a Vue Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name, e.g. Candidate'
      },
      {
        type: 'input',
        name: 'folder',
        message: 'Folder within /src/'
      }
    ],
    actions: [
      {
        type: 'add',
        path:
          '../src/{{pascalCase folder}}/{{pascalCase name}}.vue',
        templateFile: 'templates/Infrastructure/Vue/Component.hbs'
      },
      {
        type: 'add',
        path:
          '../src/{{pascalCase folder}}/{{pascalCase name}}.spec.ts',
        templateFile: 'templates/Infrastructure/Vue/Spec.hbs'
      }
    ]
  })

  plop.setGenerator('vuexModule', {
    description: 'Generates a Vuex Module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Module name, e.g. candidate'
      },
      {
        type: 'input',
        name: 'folder',
        message: 'Folder within /src/'
      }
    ],
    actions: [
      {
        type: 'add',
        path:
          '../src/{{lowerCase folder}}/{{lowerCase name}}/action.ts',
        templateFile: 'templates/Infrastructure/Vuex/action.hbs'
      },
      {
        type: 'add',
        path:
          '../src/{{lowerCase folder}}/{{lowerCase name}}/getters.ts',
        templateFile: 'templates/Infrastructure/Vuex/getters.hbs'
      },
      {
        type: 'add',
        path:
          '../src/{{lowerCase folder}}/{{lowerCase name}}/index.ts',
        templateFile: 'templates/Infrastructure/Vuex/index.hbs'
      },
      {
        type: 'add',
        path:
          '../src/{{lowerCase folder}}/{{lowerCase name}}/mutations.ts',
        templateFile: 'templates/Infrastructure/Vuex/mutations.hbs'
      },
      {
        type: 'add',
        path:
          '../src/{{lowerCase folder}}/{{lowerCase name}}/state.ts',
        templateFile: 'templates/Infrastructure/Vuex/state.hbs'
      },
      {
        type: 'add',
        path:
          '../src/{{lowerCase folder}}/{{lowerCase name}}/{{lowerCase name}}.spec.ts',
        templateFile: 'templates/Infrastructure/Vuex/spec.hbs'
      }
    ]
  })
}
