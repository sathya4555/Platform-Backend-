import { DtoBase } from "../DtoBase/dtobase";

export class App_MessagesDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    user_id?: number;
    tenant_id?: number;
    apps?: number;
    is_notification?: boolean;
    subject?: string;
    message_body?: string;
    is_read?: boolean;
}