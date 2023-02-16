import { useQuery } from "@tanstack/react-query"
import { output } from "../../../infra/http/output"
import FoundObjectRepositories from "../../../repositories/foundObject/foundObject"


const getFoundObject = (page: number) => {
  const foundObjectRepositories = FoundObjectRepositories.getInstance(output)

  return useQuery(["foundObject", page], async () => await foundObjectRepositories.getFoundObject(page))
}
export default getFoundObject