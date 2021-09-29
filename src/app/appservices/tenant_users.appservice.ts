import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tenant_UsersDto } from "src/Dtos/tenant_usersDto";
import { Tenant_UsersEntity } from "../../entity/tenant_users.entity";
import AppService from "../../AppService/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../mappers/tenant_users.mapper')

@Injectable()
export default class Tenant_UsersAppService extends AppService<Tenant_UsersEntity,Tenant_UsersDto>{
    constructor(@InjectRepository(Tenant_UsersEntity) private readonly tenant_usersRepository: Repository<Tenant_UsersEntity>,public http:HttpService) {
        super(http,tenant_usersRepository,Tenant_UsersEntity,Tenant_UsersEntity,Tenant_UsersDto,dto.tenant_usersentityJson, dto.tenant_usersdtoJson,dto.tenant_usersentityToDtoJson, dto.tenant_usersdtoToEntityJson);
             
    }

} 