import { DtoBase } from "../DtoBase/dtobase";

export class Tenant_User_App_RolesDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    tenantUserApps?: number;
    roles?: number;
}