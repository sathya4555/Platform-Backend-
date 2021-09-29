import { Injectable } from "@nestjs/common";
import Tenant_App_FeaturesAppService from "../appservices/tenant_app_features.appservice";
import { Tenant_App_FeaturesDto } from "../../Dtos/tenant_app_featuresDto";
import { Tenant_App_FeaturesEntity } from "../../entity/tenant_app_features.entity";
import FacadeBase from "./facadeBase";

@Injectable()
export class Tenant_App_FeaturesFacade extends FacadeBase<Tenant_App_FeaturesEntity,Tenant_App_FeaturesDto>{
    constructor(private tenant_app_featuresAppService: Tenant_App_FeaturesAppService){
       super(tenant_app_featuresAppService);
    }
}