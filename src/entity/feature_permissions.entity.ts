import { Column, Entity, ManyToOne, Unique } from "typeorm";
import { EntityBase } from "../EntityBase/entitybase";
import { FeaturesEntity } from "./features.entity";
import { RolesEntity } from "./roles.entity";
import { UsersEntity } from "./users.entity";

@Entity()

export class Feature_PermissionsEntity extends EntityBase {
    
    //@Column ({ name: "feature_id", nullable: true })
    // feature_id?: number;
 
    @Column ({ name: "operation_permitted", nullable: true, type: "json" })
    operation_permitted?: JSON;
 
    // @Column ({ name: "role_id", nullable: true })
    // role_id?: number;
 
    // @Column ({ name: "user_id", nullable: true })
    // user_id?: number;
 
    @Column ({ name: "role_feature_security", nullable: true, type: "json" })
    role_feature_security? : JSON;
    @ManyToOne(
      () => FeaturesEntity,
      (features) => features.feature_permissions,
    )
    features: FeaturesEntity;
    @ManyToOne(
      () => RolesEntity,
      (roles) => roles.feature_permissions,
    )
    roles: RolesEntity[];
    @ManyToOne(
      () => UsersEntity,
      (users) => users.feature_permissions,
    )
    users: UsersEntity;
}