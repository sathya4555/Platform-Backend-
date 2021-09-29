import { Column, Entity, ManyToOne, OneToMany, Unique } from "typeorm";
import { EntityBase } from "../EntityBase/entitybase";
import { AppsEntity } from "./apps.entity";
import { Feature_PermissionsEntity } from "./feature_permissions.entity";
import { Tenant_App_FeaturesEntity } from "./tenant_app_features.entity";
@Entity()
@Unique(["Id"])
export class FeaturesEntity extends EntityBase {
    
    @Column ({ name: "feature_id", nullable: true })
    feature_id?: number;
 
    @Column ({ name: "feature_name", nullable: true })
    feature_name?: string;
 
    // @Column ({ name: "app_id", nullable: true })
    // app_id?: number;
 
    @Column ({ name: "base_feature_id", nullable: true })
    base_feature_id?: number;
 
    @Column ({ name: "feature_description", nullable: true })
    feature_description? : string;
 
    @Column ({ name: "feature_key", nullable: true })
    feature_key? : string;
 
    @Column ({ name: "operations", nullable: true })
    operations? :string;
 
    @Column ({ name: "feature_type", nullable: true })
    feature_type? : number;
    
    @ManyToOne(
      () => AppsEntity,
      (apps) => apps.features,
    )
    apps: AppsEntity[];
    @OneToMany(
      () => Feature_PermissionsEntity,
      (feature_permissions) => feature_permissions.features,
    )
    feature_permissions: Feature_PermissionsEntity[]
    @OneToMany(
      () => Feature_PermissionsEntity,
      (tenant_app_feature) => tenant_app_feature.features,
    )
    tenant_app_features: Tenant_App_FeaturesEntity[]

}