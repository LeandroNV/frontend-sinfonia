// getCategoryProduct.ts
import { ProducType } from "@/types/product"

export const getCategoryProducts = async (
  slug: string
): Promise<{ data: ProducType[] }> => {
  const url = `http://localhost:1337/api/products?filters[category][slug][$eq]=${slug}&populate=*`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Error${res.status}`)
  return res.json()
}
