import { ProductSchemaResponse } from "@/types/productSchema"

export const getProductField = async (): Promise<ProductSchemaResponse> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Error ${res.status}`)
  return res.json()
}
