import { Column, Entity, ManyToOne, Unique } from "typeorm";
import { EntityBase } from "../EntityBase/entitybase";
import { FeaturesEntity } from "./features.entity";
import { Tenant_AppsEntity } from "./tenant_apps.entity";

@Entity()
@Unique(["Id"])
export class Tenant_App_FeaturesEntity extends EntityBase {
  
  // @Column ({ name: "tenant_app_id", nullable: true })
  // tenant_app_id?: number;
 
  // @Column ({ name: "feature_id", nullable: true })
  // feature_id?: number;
  @ManyToOne(
    () => FeaturesEntity,
    (features) => features.tenant_app_features,
  )
  features: FeaturesEntity;
  @ManyToOne(
    () => FeaturesEntity,
    (tenant_apps) => tenant_apps.tenant_app_features,
  )
  tenant_apps: Tenant_AppsEntity;
}