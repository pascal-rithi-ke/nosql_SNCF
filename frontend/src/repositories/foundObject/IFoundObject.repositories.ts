import { FoundObject } from "../../domain/entities/FoundObject";

export interface IFoundObjectRepositories{
	getFoundObject(): Promise<FoundObject[]>
}