export interface foundObjectDTO {
    datasetid: string;
    recordid: string;
    fields: Fields;
    record_timestamp: Date;
}
export interface Fields {
    gc_obo_gare_origine_r_code_uic_c: string;
    gc_obo_date_heure_restitution_c: Date;
    gc_obo_type_c: string;
    gc_obo_gare_origine_r_name: string;
    gc_obo_nature_c: string;
    gc_obo_nom_recordtype_sc_c: string;
    date: Date;
}