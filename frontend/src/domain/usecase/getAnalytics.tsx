import { useQuery } from "@tanstack/react-query"
import { output } from "../../infra/http/output"
import AnalyticsRepositories from "../../repositories/analytics/analytics"


export const getAnalytics = () => {
  const analyticsRepositories = AnalyticsRepositories.getInstance(output)

  return useQuery(["Analytics"], async () => await analyticsRepositories.getAnalytics())
}
