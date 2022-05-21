import fs, { Dirent } from 'fs'
import {
  getInterfaceMethodsFromPath,
  getClassMethodsFromPath
} from '../../../src/Infrastructure/Support/Helper/TsMorph'

const contexts = [
  'Authentication'
]

const parentFolders = [
  'Admin'
]

parentFolders.forEach((folder: string) => {
  const folders = fs.readdirSync(`./src/BoundedContext/${folder}`, { withFileTypes: true })
  const folderNames = folders.filter((item: Dirent) => item.isDirectory()).map(item => item.name)

  folderNames.forEach((Domain: string) => {
    contexts.push(`${folder}/${Domain}`)
  })
})

contexts.forEach((context: string) => {
  describe(`Application - ${context}`, () => {
    const repositoryMethods = getInterfaceMethodsFromPath(`./src/BoundedContext/${context}/Repository`)
    const classMethods = getClassMethodsFromPath(`./src/Application/${context}/Service`)

    const methods: string[] = repositoryMethods
      .filter((method: string) => classMethods.includes(method))

    // o service tem os mesmos métodos que o repositório
    test('Every repository methods are implemented in the service', () => {
      expect(repositoryMethods.sort()).toEqual(methods.sort())
    })
  })
})
