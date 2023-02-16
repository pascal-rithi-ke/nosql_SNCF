import { useQuery } from "@tanstack/react-query"
import Axios from "../../../infra/http/Axios"
import FoundObjectRepositories from "../../../repositories/foundObject/foundObject"


const getFoundObject = () => {
  const foundObject = FoundObjectRepositories.getInstance(new Axios())
  const request = async () => await foundObject.getFoundObject()

  return useQuery(["foundObject"], request)
}
export default getFoundObject