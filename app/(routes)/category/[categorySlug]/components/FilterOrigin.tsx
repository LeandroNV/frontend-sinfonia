import { getProductField } from "@/api/getProductField"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const FilterOrigin = async () => {
  const { data } = await getProductField()

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Origen</p>

      <RadioGroup>
        {data.schema.attributes.origin.enum.map((origin: string) => (
          <div key={origin} className="flex items-center space-x-2">
            <RadioGroupItem value={origin} id={origin} />
            <Label htmlFor={origin}>{origin}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
