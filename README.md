# store-ts-core

This package is responsible for supply the business logic and infrastructure resources for the store-ts-server and store-ts-client.

install package
```bash
yarn add @joaoviniciuslab/store-ts-core
```

---
## Development

To start development you will need to install all api and node dependencies.

### Requirements

- docker
- docker-compose
- rails **v6.0.3**
- rbenv **v2.7.1**
- nvm: node **v14**, npm **6**
- yarn

### Projects

- Api: [http://localhost:3000/](http://localhost:3000/)
- Api documentation: [http://localhost:8080/](http://localhost:8080/)
- Admin: [http://admin.lvh.localhost:3000/login](http://admin.lvh.localhost:3000/login)
- Candidate: [http://candidate.lvh.localhost:3001](http://lvh.localhost:3001)
- Company: [http://empresas.lvh.localhost:3000/login](http://empresas.lvh.localhost:3000/login) or [http://subdominiodaempresa.lvh.localhost:3000/login](http://subdominiodaempresa.lvh.localhost:3000/login)

### Thunder Client for VSCode envirioment and collection

Environment to import `tools/server/thunderClient/environment.json`

Collection to import `tools/server/thunderClient/collection.json`

> **Note:** Get the `.env` and `backend.backup` files from someone in the industry and paste them into the `tools/server/` folder


Setup server and install dependencies:
```bash
yarn setup
```

Start api server:
```bash
yarn server
```

To build the code:
```bash
yarn build
```

Link the package local:
```bash
yarn link
```

Lint your code:
```bash
yarn lint
```

Run all tests:
```bash
yarn test
```

Code generator:
```bash
yarn plop
```

Publish package code:
```bash
yarn publish
```

Other development environment commands:
```bash
rake
```
### Folder Structure and Files

Here are described the folder structure adopted for this package.

```bash
├── src                                       - Folder with source
│   ├── Application                           - Folder with implementation of bounded context abstraction
|   │   └── Bounded Context                   - Folder with delimited context name
|   │       └── Version                       - Folder with delimited context version application
|   │           └── Domain                    - Folder with domain name
│   ├── BoundedContext                        - Folder with bounded context abstraction
|   │   └── Bounded Context                   - Folder with delimited context name
|   │       └── Domain                        - Folder with domain name
|   │           ├── Use Case                  - Folder with domain use cases
|   │           │   └── Command.ts            - Implementing a use case command
|   │           └── Repository.ts             - Abstract domain repository
│   ├── Domain                                - Folder with domain layer
|   │   ├── Aggregate                         - Folder with domain aggregates
|   │   ├── Authentication                    - Folder with domain authentication
|   │   └── Entity                            - Folder with domain entity
|   │   └── ValueObject                       - Folder with domain value objects
│   └── Infrastructure                        - Folder with infrastructure layer
|       ├── Assets                            - Folder with assets files
|       ├── DataMapper                        - Folder with data mappers from api
|       ├── Nuxt                              - Folder with nuxt UI implmentation
|       ├── Support                           - Folder with support classes
|       └── Vue                               - Folder with vue tools consuming application layer
├── tools                                     - Folder with required projects and tools
|   ├── client                                - Folder with client applications
|   ├── plop                                  - Folder with plop
|   │   ├── Templates                         - Folder with plop templates
|   │   └── plopfile.ts                       - Plop config
|   └── server                                - Folder with Application layouts
|       ├── .env                              - Ats-monolith env
|       ├── backend.backup                    - Ats-monolith backup
|       └── docker-compose.yml                - Docker-composer with required containers
├── .eslintignore                             - Eslint ignore files
├── .eslintrc.js                              - EsLint config file
├── .gitignore                                - Git ignore files
├── .npmignore                                - Npm ignore files
├── *.d.ts                                    - Types config from typescript
├── jest.config.js                            - Test config
├── package.json                              - Dependencies and scripts
├── Rakefile                                  - Rake tasks
├── README.md                                 - This file
├── tsconfig.json                             - Typescript configuration
└── yarn.lock                                 - Dependencies lock versions
```
