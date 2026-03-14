"use client"

import { IconButton } from "@/components/IconButton"
import { ProducType } from "@/types/product"
import { Expand, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"

type ProductCardActionsProps = {
  product: ProducType
}

export const ProductCardActions = ({ product }: ProductCardActionsProps) => {
  const router = useRouter()
  return (
    <div className="absolute bottom-5 w-full px-6 opacity-0 transition duration-200 group-hover:opacity-100">
      <div className="flex justify-center gap-x-6">
        <IconButton
          onClick={() => router.push(`/product/${product.slug}`)}
          icon={<Expand size={20} className="text-gray-600" />}
        />
        <IconButton
          onClick={() => console.log("add to cart")}
          icon={<ShoppingCart size={20} className="text-gray-600" />}
        />
      </div>
    </div>
  )
}
