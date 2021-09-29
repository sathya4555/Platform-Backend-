import { DtoBase } from "../DtoBase/dtobase";

export class Tenant_App_FeaturesDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    tenantApps?: number;
    features?: number;
}