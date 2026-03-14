import { getCategoryProducts } from "@/api/getCategoryProduct"
import { Separator } from "@/components/ui/separator"
import { FiltersControlsCategory } from "./components/FiltersControlsCategory"
import { ProductCard } from "./components/ProductCard"
import { ProducType } from "@/types/product"

type PageProps = {
  params: Promise<{ categorySlug: string }>
}

export default async function Page({ params }: PageProps) {
  const { categorySlug } = await params
  const { data } = await getCategoryProducts(categorySlug)

  return (
    <div className="mx-auto max-w-6xl py-4 sm:px-24 sm:py-16">
      <h1 className="text-3xl font-medium">
        Café {data[0].category.categoryName}
      </h1>
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory />

        {/* Suspense??? */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {data.map((product: ProducType) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
