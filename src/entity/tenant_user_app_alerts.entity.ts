import { Column, Entity, ManyToOne, Unique } from "typeorm";
import { EntityBase } from "../EntityBase/entitybase";
import { Tenant_User_AppsEntity } from "./tenant_user_apps.entity";

@Entity()
@Unique(["Id"])
export class Tenant_User_App_AlertsEntity extends EntityBase {
    
  @Column ({ name: "alert_type", nullable: true })
  alert_type?: string;
  
  @Column ({ name: "alert_name", nullable: true })
  alert_name? : string;
  
  @Column ({ name: "alert_desc", nullable: true })
  alert_desc?: string;
  
  @Column ({ name: "from_date_time", nullable: true })
  from_date_time?: Date;
  
  @Column ({ name: "alert_duration_type", nullable: true })
  alert_duration_type?: string;
  
  @Column ({ name: "subscription_date", nullable: true })
  subscription_date?: Date;
  
  @Column ({ name: "has_unsubscribed", nullable: true })
  has_unsubscribed?: boolean;
  
  // @Column ({ name: "tenant_user_app_id", nullable: true })
  // tenant_user_app_id?: number;
  
  @Column ({ name: "tenant_user_id", nullable: true })
  tenant_user_id?: number;
  
  @Column ({ name: "user_id", nullable: true })
  user_id?: number;
  @ManyToOne(
    () => Tenant_User_AppsEntity,
    (tenant_user_apps) => tenant_user_apps.tenant_user_app_alerts,
  )
  tenant_user_apps: Tenant_User_AppsEntity;

}