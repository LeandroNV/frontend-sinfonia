"use client"

import * as React from "react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel"
import { cn } from "@/lib/utils"

export const dataCarouselTop = [
  {
    id: 1,
    title: "Envío en 24/48 h",
    description:
      "Como cliente VIP, tus envios en 24/48 horas. Obtén más información y únete",
    link: "#",
  },
  {
    id: 2,
    title: "Consigue hasta un -25% en compras superiores a $150000",
    description:
      "−20 % al gastar $150000 o −25 % al gastar $200000. Usa el código LENGUPA.",
    link: "#",
  },
  {
    id: 3,
    title: "Devoluciones y entregas gratuitas",
    description:
      "Como cliente, tienes envíos y devoluciones gratis en un plazo de 30 días en todos los pedidos. Obtén más información y únete",
    link: "#",
  },
  {
    id: 4,
    title: "Comprar novedades",
    description: "Todas las novedades al 50% de descuento",
    link: "#",
  },
]

export const CarouselTextBanner = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="bg-muted">
      <Carousel
        setApi={setApi}
        className="mx-auto w-full max-w-4xl"
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, description, link }) => (
            <CarouselItem key={id}>
              <Link
                href={link}
                className="flex flex-col items-center justify-center p-2 text-center"
              >
                <span className="text-sm font-semibold text-foreground sm:text-base">
                  {title}
                </span>
                <span className="text-xs text-muted-foreground sm:text-sm">
                  {description}
                </span>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-1.5 pb-2">
        {dataCarouselTop.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Ir al slide ${index + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              current === index
                ? "w-4 bg-foreground"
                : "w-1.5 bg-muted-foreground/40"
            )}
          />
        ))}
      </div>
    </div>
  )
}
