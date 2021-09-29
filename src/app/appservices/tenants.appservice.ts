import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TenantsDto } from "../../Dtos/tenantsDto";
import { TenantsEntity } from "../../entity/tenants.entity";
import AppService from "../../AppService/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../mappers/tenants.mapper')

@Injectable()
export default class TenantsAppService extends AppService<TenantsEntity,TenantsDto>{
    constructor(@InjectRepository(TenantsEntity) private readonly tenantsRepository: Repository<TenantsEntity>,public http:HttpService) {
        super(http,tenantsRepository,TenantsEntity,TenantsEntity,TenantsDto,dto.tenantsentityJson, dto.tenantsdtoJson,dto.tenantsentityToDtoJson, dto.tenantsdtoToEntityJson);
             
    }

} 