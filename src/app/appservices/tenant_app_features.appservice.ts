import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tenant_App_FeaturesDto } from "src/Dtos/tenant_app_featuresDto";
import { Tenant_App_FeaturesEntity } from "../../entity/tenant_app_features.entity";
import AppService from "../../AppService/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../mappers/tenant_app_features.mapper')

@Injectable()
export default class Tenant_App_FeaturesAppService extends AppService<Tenant_App_FeaturesEntity,Tenant_App_FeaturesDto>{
    constructor(@InjectRepository(Tenant_App_FeaturesEntity) private readonly tenant_app_featuresRepository: Repository<Tenant_App_FeaturesEntity>,public http:HttpService) {
        super(http,tenant_app_featuresRepository,Tenant_App_FeaturesEntity,Tenant_App_FeaturesEntity,Tenant_App_FeaturesDto,dto.tenant_app_featuresentityJson, dto.tenant_app_featuresdtoJson,dto.tenant_app_featuresentityToDtoJson, dto.tenant_app_featuresdtoToEntityJson);
             
    }

} 