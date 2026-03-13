import { BannerDiscount } from "@/components/BannerDiscount"
import { BannerProduct } from "@/components/BannerProduct"
import { CarouselTextBanner } from "@/components/CarouselTextBanner"
import { ChooseCategory } from "@/components/ChooseCategory"
import { ChooseCategorySkeleton } from "@/components/ChooseCategory.skeleton"
import { FeaturedProducts } from "@/components/FeaturedProducts"
import { FeaturedProductsSkeleton } from "@/components/FeaturedProducts.skeleton"
import { Suspense } from "react"

export default function Page() {
  return (
    <main>
      <CarouselTextBanner />
      <Suspense fallback={<FeaturedProductsSkeleton />}>
        <FeaturedProducts />
      </Suspense>
      <BannerDiscount />
      <Suspense fallback={<ChooseCategorySkeleton />}>
        <ChooseCategory />
      </Suspense>
      <BannerProduct />
    </main>
  )
}
