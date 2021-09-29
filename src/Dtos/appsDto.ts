import { DtoBase } from "../DtoBase/dtobase";

export class AppsDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    app_name?: string;
    app_description?: string;
}