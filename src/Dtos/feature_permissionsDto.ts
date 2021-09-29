import { DtoBase } from "../DtoBase/dtobase";

export class Feature_PermissionsDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    features?: number;
    operation_permitted?: JSON;
    roles?: number;
    users?: number;
    role_feature_security? : JSON;
}