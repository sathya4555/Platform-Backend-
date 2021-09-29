import { DtoBase } from "../DtoBase/dtobase";

export class Tenant_User_App_AlertsDto extends DtoBase {
    constructor() {
      super();
     
    }
    alert_type?: string;
    alert_name? : string;
    alert_desc?: string;
    from_date_time?: Date;
    alert_duration_type?: string;
    subscription_date?: Date;
    has_unsubscribed?: boolean;
    tenantUserApps?: number;
    tenant_user_id?: number;
    user_id?: number;

}