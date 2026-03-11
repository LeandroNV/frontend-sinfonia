"use client"

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts"
import { ResponseType } from "@/types/response"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { SkeletonSchema } from "./SkeletonSchema"
import { ProducType } from "@/types/product"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Expand, ShoppingCart } from "lucide-react"
import { IconButton } from "./IconButton"
import { useRouter } from "next/navigation"

export const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts()
  const router = useRouter()

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
                            className="rounded-lg object-cover px-6"
                            priority
                          />

                          <div className="absolute bottom-5 w-full px-6 transition duration-200 group-hover:opacity-100">
                            <div className="flex justify-center gap-x-6">
                              <IconButton
                                onClick={() => router.push(`product/${slug}`)}
                                icon={<Expand size={20} />}
                                className="text-gray-600"
                              />
                              <IconButton
                                onClick={() => console.log("Add Item")}
                                icon={<ShoppingCart size={20} />}
                                className="text-gray-600"
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>

                      <div className="flex h-10 items-center justify-between gap-4 px-8">
                        <h3 className="text-lg font-bold">{productName}</h3>
                        <div className="flex items-center justify-between gap-3">
                          <p className="w-fit rounded-full bg-black px-2 py-1 text-white italic dark:bg-white dark:text-black">
                            {taste}
                          </p>
                          <p className="w-fit rounded-full bg-yellow-900 px-2 py-1 text-white">
                            {origin}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  )
}
