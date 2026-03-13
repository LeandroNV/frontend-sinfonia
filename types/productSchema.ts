// types/productSchema.ts

type EnumAttribute = {
  type: string
  enum: string[]
}

type ProductSchemaAttributes = {
  origin: EnumAttribute
  taste: EnumAttribute
}

export type ProductSchemaResponse = {
  data: {
    schema: {
      attributes: ProductSchemaAttributes
    }
  }
}
