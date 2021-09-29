import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Feature_PermissionsDto } from "../../Dtos/feature_permissionsDto";
import { Feature_PermissionsEntity } from "../../entity/feature_permissions.entity";
import AppService from "../../AppService/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../mappers/feature_permissions.mapper')

@Injectable()
export default class Feature_PermissionsAppService extends AppService<Feature_PermissionsEntity,Feature_PermissionsDto>{
    constructor(@InjectRepository(Feature_PermissionsEntity) private readonly feature_permissionsRepository: Repository<Feature_PermissionsEntity>,public http:HttpService) {
        super(http,feature_permissionsRepository,Feature_PermissionsEntity,Feature_PermissionsEntity,Feature_PermissionsDto,dto.feature_permissionsentityJson, dto.feature_permissionsdtoJson,dto.feature_permissionsentityToDtoJson, dto.feature_permissionsdtoToEntityJson);
             
    }

} 