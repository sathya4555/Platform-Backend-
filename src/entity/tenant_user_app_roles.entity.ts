import { Column, Entity, ManyToOne, Unique } from "typeorm";
import { EntityBase } from "../EntityBase/entitybase";
import { RolesEntity } from "./roles.entity";
import { Tenant_User_AppsEntity } from "./tenant_user_apps.entity";
@Entity()
@Unique(["Id"])
export class Tenant_User_App_RolesEntity extends EntityBase {
  
  //@Column ({ name: "tenant_user_app_id", nullable: true })
  //tenant_user_app_id?: number;
 
  //@Column ({ name: "role_id", nullable: true })
  // role_id?: number;
  @ManyToOne(
    (type) => RolesEntity,
    (roles) => roles.tenant_user_app_roles,
  )
  roles: RolesEntity;
  @ManyToOne(
    () => Tenant_User_AppsEntity,
    (tenant_user_apps) => tenant_user_apps.tenant_user_app_roles,
  )
  tenant_user_apps: Tenant_User_AppsEntity;

}