import { Skeleton } from "@/components/ui/skeleton"

type SkeletonSchemaProps = {
  grid: number
}

export const SkeletonSchema = ({ grid }: SkeletonSchemaProps) => {
  return Array.from({ length: grid }).map((_, index) => (
    <div key={index} className="mx-auto flex flex-col gap-8 space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  ))
}
