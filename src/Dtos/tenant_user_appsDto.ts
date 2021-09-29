import { DtoBase } from "../DtoBase/dtobase";

export class Tenant_User_AppsDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    tenantUsers?: number;
    tenantApps?: number;
    tenant_user_app_permissions?: string;
}