import { BannerDiscount } from "@/components/BannerDiscount"
import { CarouselTextBanner } from "@/components/CarouselTextBanner"
import { ChooseCategory } from "@/components/ChooseCategory"
import { FeaturedProducts } from "@/components/FeaturedProducts"
import { SkeletonSchema } from "@/components/SkeletonSchema"
import { Suspense } from "react"

export default function Page() {
  return (
    <main>
      <CarouselTextBanner />
      <Suspense fallback={<SkeletonSchema grid={3} />}>
        <FeaturedProducts />
      </Suspense>

      <BannerDiscount />
      <Suspense fallback={<SkeletonSchema grid={3} />}>
        <ChooseCategory />
      </Suspense>
    </main>
  )
}
