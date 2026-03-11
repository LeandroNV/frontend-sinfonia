"use client"

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts"
import { ResponseType } from "@/types/response"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { SkeletonSchema } from "./SkeletonSchema"
import { ProducType } from "@/types/product"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Expand, ShoppingCart } from "lucide-react"

export const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts()

  return (
    <div className="mx-auto max-w-6xl py-4 sm:px-24 sm:py-16">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>

      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result !== null &&
            result.map((product: ProducType) => {
              const { id, slug, images, productName, taste, origin } = product
              return (
                <CarouselItem
                  key={id}
                  className="group md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="border border-gray-200 shadow-none">
                      <CardContent className="p-0">
                        <div className="relative h-60 w-full">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`}
                            alt={productName}
                            fill
                            className="rounded-lg object-contain p-2"
                            priority
                          />

                          <div className="absolute bottom-5 w-full px-6 transition duration-200 group-hover:opacity-100">
                            <div className="flex justify-center gap-x-6">
                              <Expand />
                              <ShoppingCart />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
