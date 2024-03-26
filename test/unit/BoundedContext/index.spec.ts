import fs, { type Dirent } from 'fs'
import { getInterfaceMethodsFromPath } from '../../../src/Support/Helper/TsMorph'

const contexts = ['Authentication']

const parentFolders = ['Admin']

parentFolders.forEach((folder: string) => {
  const folders = fs.readdirSync(`./src/BoundedContext/${folder}`, {
    withFileTypes: true
  })
  const folderNames = folders
    .filter((item: Dirent) => item.isDirectory())
    .map((item) => item.name)

  folderNames.forEach((Domain: string) => {
    contexts.push(`${folder}/${Domain}`)
  })
})

contexts.forEach((context: string) => {
  describe(`BoundedContext - ${context}`, () => {
    const files = fs.readdirSync(
      `./src/BoundedContext/${context}/UseCase`,
      { withFileTypes: true }
    )
    const fileNames = files
      .filter((item: Dirent) => item.isFile())
      .map((item) => item.name.replace(/\.[^/.]+$/, ''))

    const methods = getInterfaceMethodsFromPath(`./src/BoundedContext/${context}/Repository`)
      .map((item: string) => `${item.charAt(0).toUpperCase()}${item.slice(1)}`)

    test(
      'There is an use case for each method defined in the repository contract',
      () => { expect(fileNames.sort()).toEqual(methods.sort()) }
    )
  })
})
