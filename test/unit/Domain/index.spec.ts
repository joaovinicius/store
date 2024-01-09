import fs, { Dirent } from 'fs'
import {
  getInterfaceProperties,
  getFunctionParameters,
  getClassAttibutes,
  getDirectoryPath,
  getPathExportNamesByPath
} from '../../../src/Support/Helper/TsMorph'

const parentFolders = [
  // 'Aggregate/',
  'Entity/',
  // 'Authentication/',
  // 'ValueObject/'
]

const entityNames: string[] = []
const exported = getPathExportNamesByPath('./src/Domain/index')

describe('Domain', () => {
  parentFolders.forEach((folder: string) => {
    const folders = fs.readdirSync(
      `./src/Domain/${folder}`,
      { withFileTypes: true }
    )
    const folderNames = folders
      .filter((item: Dirent) => item.isDirectory())
      .map((item) => item.name)

    folderNames.forEach((ENTITY: string) => {
      const entitiName = ENTITY
      const entityFactoryName = `${ENTITY}Factory`
      const entityInterfaceName = `I${ENTITY}`
      entityNames.push(entitiName, entityFactoryName, entityInterfaceName)

      const Entity = require(`../../../src/Domain/${folder}${ENTITY}`)
      const Mock = require(`./__mocks__/${folder}${ENTITY}`).mock

      describe(`Domain - ${folder}${entitiName}`, () => {
        test('The entity, factory and interface are being exported', () => {
          expect(exported.includes(entitiName)).toBeTruthy()
          expect(exported.includes(entityFactoryName)).toBeTruthy()
          expect(exported.includes(entityInterfaceName)).toBeTruthy()
        })

        test('The entity, interface and factory is in the same directory', () => {
          expect(getDirectoryPath(entitiName)).toEqual(
            getDirectoryPath(entityInterfaceName)
          )
          expect(getDirectoryPath(entitiName)).toEqual(
            getDirectoryPath(entityFactoryName)
          )
          expect(getDirectoryPath(entityFactoryName)).toEqual(
            getDirectoryPath(entityInterfaceName)
          )
        })

        test('The entity instance attributes is equal of interface properties', () => {
          expect(Object.keys(Mock).sort()).toEqual(
            getInterfaceProperties(entityInterfaceName).all.sort()
          )
        })

        test('The entity attributes is equal of interface properties', () => {
          expect(getClassAttibutes(ENTITY).all.sort()).toEqual(
            getInterfaceProperties(entityInterfaceName).all.sort()
          )
        })

        test('The required entity attributes is equal of required interface properties', () => {
          expect(
            getInterfaceProperties(entityInterfaceName).required.sort()
          ).toEqual(getClassAttibutes(ENTITY).required.sort())
        })

        test('The optional entity attributes is equal of optional interface properties', () => {
          expect(
            getInterfaceProperties(entityInterfaceName).optional.sort()
          ).toEqual(getClassAttibutes(ENTITY).optional.sort())
        })

        test('The factory is a function', () => {
          expect(Entity[entityFactoryName]).toBeInstanceOf(Function)
        })

        test('The factory create a entity instance', () => {
          expect(Entity[entityFactoryName]()).toBeInstanceOf(Entity[ENTITY])
        })

        test('The factory params is equal of instance attributes', () => {
          expect(getFunctionParameters(entityFactoryName).all.sort()).toEqual(
            Object.keys(Mock).sort()
          )
        })

        test('The factory params is equal of interface properties', () => {
          expect(getFunctionParameters(entityFactoryName).all.sort()).toEqual(
            getInterfaceProperties(entityInterfaceName).all.sort()
          )
        })
      })
    })
  })
})
