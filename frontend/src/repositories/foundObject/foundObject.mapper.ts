import { FoundObject } from "../../domain/entities/FoundObject"
import { foundObjectDTO } from "./foundObject.dto"

export class FoundObjectMapper {
    static toFoundObjectDomain(dataframe: foundObjectDTO[]): FoundObject[] {
        return dataframe.map((serie: foundObjectDTO) => {
            return {
                foundObjectId: serie.recordid,
                code_uic: serie.fields.gc_obo_gare_origine_r_code_uic_c,
                restitution: serie.fields.gc_obo_date_heure_restitution_c,
                type: serie.fields.gc_obo_nom_recordtype_sc_c,
                gareName: serie.fields.gc_obo_gare_origine_r_name, 
                nature: serie.fields.gc_obo_nature_c,
                date: serie.fields.date,
            }
        })
    }
}
