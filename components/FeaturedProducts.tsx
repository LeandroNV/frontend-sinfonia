import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { ProducType } from "@/types/product"
import { getFeaturedProducts } from "@/api/getFeaturedProducts"
import { ProductCard } from "./ProductCard"

export const FeaturedProducts = async () => {
  const { data } = await getFeaturedProducts()

  return (
    <div className="mx-auto max-w-6xl py-4 sm:px-24 sm:py-16">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>

      <Carousel className="px-4 sm:px-0">
        <CarouselContent className="md:-ml-4">
          {data.map((product: ProducType) => (
            <CarouselItem
              key={product.id}
              className="group basis-[85%] md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden cursor-pointer sm:flex" />
        <CarouselNext className="hidden cursor-pointer sm:flex" />
      </Carousel>
    </div>
  )
}
