import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { ProducType } from "@/types/product"
import Image from "next/image"
import Link from "next/link"
import { ProductCardActions } from "./ProductCardActions"
import { formatPrice } from "@/lib/formatPrice"

type ProductCardProps = {
  product: ProducType
}

export const ProductCard = (props: ProductCardProps) => {
  const { product } = props
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group relative block rounded-lg p-2 transition-all duration-100 hover:shadow-lg"
    >
      <div className="absolute top-4 z-10 flex items-center justify-between gap-3 px-2">
        <p className="w-fit rounded-full bg-black px-2 py-1 text-xs text-white dark:bg-white dark:text-black">
          {product.taste}
        </p>
        <p className="w-fit rounded-full bg-yellow-900 px-2 py-1 text-xs text-white">
          {product.origin}
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {product.images.map((image) => (
            <CarouselItem key={image.id}>
              <div className="h-60 overflow-hidden rounded-xl">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                  alt={product.productName}
                  width={400}
                  height={240}
                  priority
                  style={{ width: "100%", height: "auto" }}
                  className="object-cover"
                />
              </div>

              <ProductCardActions product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <p className="text-center text-2xl">{product.productName}</p>
      <p className="text-center font-bold">{formatPrice(product.price)}</p>

      {/* clear */}
      <div>Test Commit</div>
    </Link>
  )
}
