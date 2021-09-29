import { DtoBase } from "../DtoBase/dtobase";

export class RolesDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    role_name?: string;
    role_priviledge?: JSON;
}