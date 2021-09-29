import { DtoBase } from "../DtoBase/dtobase";

export class Tenant_AppsDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    tenants?: number;
    apps?: number;
    connection_string?: string;
    all_features : boolean=false;
}