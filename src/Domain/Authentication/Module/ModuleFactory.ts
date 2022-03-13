import { Permission } from '../Permission/Permission'
import { Module } from './Module'

export function ModuleFactory (
  name: string = '',
  permissions: Permission[] = []
): Module {
  return new Module({ name, permissions })
}
