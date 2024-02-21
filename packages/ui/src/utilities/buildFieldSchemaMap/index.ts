import type { SanitizedConfig } from 'payload/types'
import { FieldSchemaMap } from './types'
import { traverseFields } from './traverseFields'

export const buildFieldSchemaMap = (config: SanitizedConfig): FieldSchemaMap => {
  const result: FieldSchemaMap = new Map()

  config.collections.forEach((collection) => {
    traverseFields({
      schemaPath: collection.slug,
      fields: collection.fields,
      schemaMap: result,
    })
  })

  config.globals.forEach((global) => {
    traverseFields({
      schemaPath: global.slug,
      fields: global.fields,
      schemaMap: result,
    })
  })

  return result
}
