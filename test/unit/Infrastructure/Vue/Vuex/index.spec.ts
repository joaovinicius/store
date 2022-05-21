// // para cada ação do contexto delimitado precisa ter uma ação implementada
// import fs, { Dirent } from 'fs'
// import camelCase from 'lodash/camelCase'
// import {
//   getInterfaceMethodsFromPath
// } from '../../../../../src/Infrastructure/Support/Helper/TsMorph'

// const contexts = [
//   'Authentication'
// ]

// const parentFolders = [
//   'Admin'
// ]

// parentFolders.forEach((folder: string) => {
//   const folders = fs.readdirSync(`./src/BoundedContext/${folder}`, { withFileTypes: true })
//   const folderNames = folders.filter((item: Dirent) => item.isDirectory()).map(item => item.name)

//   folderNames.forEach((Domain: string) => {
//     contexts.push(`${folder}/${Domain}`)
//   })
// })

// contexts.forEach((context: string) => {
//   const vuexPath = context.includes('/')
//     ? context.split('/').map(item => camelCase(item)).join('/')
//     : `${camelCase(context)}`

//   const repositoryMethods = getInterfaceMethodsFromPath(`./src/BoundedContext/${context}/Repository`)

//   const actions = require(`../../../../src/Infrastructure/Vue/Vuex/${vuexPath}/actions`)
//   const methods: string[] = Object.keys(actions.default)
//     .filter((method: string) => repositoryMethods.includes(method))

//   describe(`Infrastructure/Vue/Vue/${vuexPath} implements all bounde context methods definition`, () => {
//     test('Every repository methods are implemented in the vuex action', () => {
//       expect(repositoryMethods.sort()).toEqual(methods.sort())
//     })
//   })
// })
