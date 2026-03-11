import { ProducType } from "./product"

export type ResponseType = {
  result: ProducType[] | null
  loading: boolean
  error: string
}
