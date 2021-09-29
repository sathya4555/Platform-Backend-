import { Column, Entity, ManyToOne, Unique } from "typeorm";
import { EntityBase } from "../EntityBase/entitybase";
import { AppsEntity } from "./apps.entity";
import { RolesEntity } from "./roles.entity";

@Entity()
@Unique(["Id"])
export class App_RolesEntity extends EntityBase {
    
//  @Column({ name: "role_id", nullable: true })
  //  role_id?: number;
  //@Column({ name: "app_id", nullable: true })
    // app_id?: number;
  @Column({ name: "app_role_permisssions", nullable: true })
    app_role_permissions?: string;

    @ManyToOne(
      () => AppsEntity, 
      (apps) => apps.app_roles,
      
    )
    apps: AppsEntity;
    @ManyToOne(
      () => RolesEntity,
      (roles) => roles.app_roles
    )
    roles: RolesEntity;
}