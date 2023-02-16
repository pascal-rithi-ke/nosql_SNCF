import { FoundObject } from "../../domain/entities/FoundObject";

export interface IFoundObjectRepositories{
	getFoundObject(page: number): Promise<FoundObject[]>
}