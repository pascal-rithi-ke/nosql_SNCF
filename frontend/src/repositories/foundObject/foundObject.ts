import { FoundObject } from "../../domain/entities/FoundObject"
import HttpClient from "../../infra/http/IHttpClient"
import { FoundObjectMapper } from "./foundObject.mapper"
import { IFoundObjectRepositories } from "./IFoundObject.repositories"


export default class FoundObjectRepositories implements IFoundObjectRepositories {
	private readonly httpClient:  HttpClient
	private readonly baseUrl:  string

	constructor (httpClient: HttpClient) {
		this.httpClient = httpClient
		this.baseUrl = "https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&q=&rows=3"
	}

	async getFoundObject(): Promise<FoundObject[]> {
		const foundObjectData = await this.httpClient.get(`${this.baseUrl}`)
    return FoundObjectMapper.toFoundObjectDomain(foundObjectData.records);
	}

	static getInstance(httpClient: HttpClient) {
		return new FoundObjectRepositories(httpClient);
	}
}