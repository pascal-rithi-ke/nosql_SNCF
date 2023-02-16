import { useQuery } from "@tanstack/react-query"
import { output } from "../../../infra/http/output"
import FoundObjectRepositories from "../../../repositories/foundObject/foundObject"


const getFoundObject = () => {
  const foundObjectRepositories = FoundObjectRepositories.getInstance(output)

  return useQuery(["foundObject"], async () => await foundObjectRepositories.getFoundObject())
}
export default getFoundObject