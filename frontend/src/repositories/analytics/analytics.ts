import HttpClient from "../../infra/http/IHttpClient"
import { IAnalyticsRepositories } from "./IAnalytics.repositories"


export default class AnalyticsRepositories implements IAnalyticsRepositories {
	private readonly httpClient:  HttpClient
	private readonly baseUrl:  string

	constructor (httpClient: HttpClient) {
		this.httpClient = httpClient
		this.baseUrl = "https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&q=&rows=3"
	}

	async getAnalytics(): Promise<any[]> {
		const analyticsData = await this.httpClient.get(`${this.baseUrl}`)
    return analyticsData
	}

	static getInstance(httpClient: HttpClient) {
		return new AnalyticsRepositories(httpClient);
	}
}