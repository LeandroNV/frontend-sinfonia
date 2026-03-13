export const getFeaturedProducts = async () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Error ${res.status}`)
  const json = res.json()
  return json
}
