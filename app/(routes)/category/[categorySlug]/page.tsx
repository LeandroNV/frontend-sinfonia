import { getCategoryProducts } from "@/api/getCategoryProduct"
import { Separator } from "@/components/ui/separator"
import { FiltersControlsCategory } from "./components/FiltersControlsCategory"

type PageProps = {
  params: Promise<{ categorySlug: string }>
}

export default async function Page({ params }: PageProps) {
  const { categorySlug } = await params
  const { data } = await getCategoryProducts(categorySlug)

  console.log(data)

  return (
    <div className="mx-auto max-w-6xl py-4 sm:px-24 sm:py-16">
      <h1 className="text-3xl font-medium">
        Café {data[0].category.categoryName}
      </h1>
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory />
      </div>
    </div>
  )
}
