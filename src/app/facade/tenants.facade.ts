import { Injectable } from "@nestjs/common";
import TenantsAppService from "../appservices/tenants.appservice";
import { TenantsDto } from "../../Dtos/tenantsDto";
import { TenantsEntity } from "../../entity/tenants.entity";
import FacadeBase from "./facadeBase";

@Injectable()
export class TenantsFacade extends FacadeBase<TenantsEntity,TenantsDto>{
    constructor(private tenantsAppService: TenantsAppService){
       super(tenantsAppService);
    }
}