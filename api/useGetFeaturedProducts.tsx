import { useEffect, useState } from "react"
import { ProducType } from "@/types/product"

export const useGetFeaturedProducts = () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`

  const [result, setResult] = useState<ProducType[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(url)
        const json = await res.json()
        setResult(json.data)
        setLoading(false)
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : "Ocurrió un error")
        setLoading(false)
      }
    })()
  }, [url])

  return { loading, result, error }
}
