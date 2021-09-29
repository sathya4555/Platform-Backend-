import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RolesDto } from "../../Dtos/rolesDto";
import { RolesEntity } from "../../entity/roles.entity";
import AppService from "../../AppService/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../mappers/roles.mapper')

@Injectable()
export default class RolesAppService extends AppService<RolesEntity,RolesDto>{
    constructor(@InjectRepository(RolesEntity) private readonly rolesRepository: Repository<RolesEntity>,public http:HttpService) {
        super(http,rolesRepository,RolesEntity,RolesEntity,RolesDto,dto.rolesentityJson, dto.rolesdtoJson,dto.rolesentityToDtoJson, dto.rolesdtoToEntityJson);
             
    }
} 