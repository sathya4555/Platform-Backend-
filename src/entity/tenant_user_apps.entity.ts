import { Column, Entity, ManyToOne, OneToMany, Unique } from "typeorm";
import { EntityBase } from "../EntityBase/entitybase";
import { Tenant_AppsEntity } from "./tenant_apps.entity";
import { Tenant_UsersEntity } from "./tenant_users.entity";
import { Tenant_User_App_AlertsEntity } from "./tenant_user_app_alerts.entity";
import { Tenant_User_App_RolesEntity } from "./tenant_user_app_roles.entity";
@Entity()
@Unique(["Id"])
export class Tenant_User_AppsEntity extends EntityBase {
  
  // @Column ({ name: "tenant_user_id", nullable: true })
  // tenant_user_id?: number;
 
  // @Column ({ name: "tanant_app_id", nullable: true })
  // tenant_app_id?: number;
 
  @Column ({ name: "tenant_user_app_permissions", nullable: true })
  tenant_user_app_permissions?: string;
  @ManyToOne(
    (type) => Tenant_AppsEntity,
    (tenant_apps) => tenant_apps.apps,
  )
  tenant_apps: Tenant_AppsEntity[];
  @ManyToOne(
    (type) => Tenant_UsersEntity,
    (tenant_users) => tenant_users.tenant_user_apps,
  )
  tenant_users: Tenant_UsersEntity[];
  @OneToMany(
    (type) => Tenant_User_App_AlertsEntity,
    (tenant_user_app_alerts) => tenant_user_app_alerts.tenant_user_apps,
  )
  tenant_user_app_alerts: Tenant_User_App_AlertsEntity[];
  @OneToMany(
    (type) => Tenant_User_App_RolesEntity,
    (tenant_user_app_roles) => tenant_user_app_roles.tenant_user_apps,
  )
  tenant_user_app_roles: Tenant_User_App_RolesEntity[];

}