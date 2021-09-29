import { DtoBase } from "../DtoBase/dtobase";

export class FeaturesDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    feature_id?: number;
    feature_name?: string;
    apps?: number;
    base_feature_id?: number;
    feature_description? : string;
    feature_key? : string;
    operations? :string;
    feature_type? : number;

}