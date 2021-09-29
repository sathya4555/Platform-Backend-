import { Column, Entity, ManyToOne, OneToMany, Unique } from "typeorm";
import { EntityBase } from "../EntityBase/entitybase";
import { ClientsEntity } from "./clients.entity";
import { Tenant_AppsEntity } from "./tenant_apps.entity";
import { Tenant_UsersEntity } from "./tenant_users.entity";
@Entity()
@Unique(["Id"])
export class TenantsEntity extends EntityBase {
    
    
  @Column ({ name: "tanant_name", nullable: true })
  tenant_name?: string;
  
  @Column ({ name: "description", nullable: true })
  description?: string;
  
  @Column ({ name: "alias", nullable: true })
  alias?: string;
  
  @Column ({ name: "published_from", nullable: true })
  published_from?: Date;
  
  @Column ({ name: "published_till", nullable: true })
  published_till?: Date;
  
  @Column ({ name: "is_complete", nullable: true })
  is_complete?: boolean;
  
  @Column ({ name: "site_image_url_path", nullable: true })
  site_image_url_path?: string;
  
  @Column ({ name: "status_id", nullable: true })
  status_id?: number;
  
  //@Column ({ name: "client_id", nullable: true })
  //client_id?: number;
  
  @Column ({ name: "identity_providers_details", nullable: true , type: "json"})
  identity_providers_details?: JSON;
  
  @Column ({ name: "tenant_admin_email", nullable: true })
  tenant_admin_email?: string;
  @OneToMany(
    (type) => Tenant_UsersEntity,
    (tenant_users) => tenant_users.tenants,
  )
  tenant_users: Tenant_UsersEntity[];
  @OneToMany(
    (type) => Tenant_AppsEntity,
    (tenant_apps) => tenant_apps.tenants,
  )
  tenant_apps: Tenant_AppsEntity[];
  @ManyToOne(
    () => ClientsEntity,
    (clients) => clients.tenants,
  )
  clients: ClientsEntity;
}