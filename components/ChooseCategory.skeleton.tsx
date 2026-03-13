import { Skeleton } from "@/components/ui/skeleton"

export const ChooseCategorySkeleton = () => {
  return (
    <div className="mx-auto max-w-6xl py-4 sm:px-24 sm:py-16">
      <Skeleton className="mb-4 ml-6 h-9 w-64 sm:mb-8" />

      <div className="grid grid-cols-2 gap-5 px-4 sm:grid-cols-3 sm:px-0">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="h-64 w-full rounded-lg" />
        ))}
      </div>
    </div>
  )
}
