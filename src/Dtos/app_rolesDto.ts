import { DtoBase } from "../DtoBase/dtobase";

export class App_RolesDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    roles?: number;
    apps?: number;
    app_role_permissions?: string;
}