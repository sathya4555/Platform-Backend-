import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersDto } from "../../Dtos/usersDto";
import { UsersEntity } from "../../entity/users.entity";
import AppService from "../../AppService/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../mappers/users.mapper')

@Injectable()
export default class UsersAppService extends AppService<UsersEntity,UsersDto>{
    constructor(@InjectRepository(UsersEntity) private readonly usersRepository: Repository<UsersEntity>,public http:HttpService) {
        super(http,usersRepository,UsersEntity,UsersEntity,UsersDto,dto.usersentityJson, dto.usersdtoJson,dto.usersentityToDtoJson, dto.usersdtoToEntityJson);
             
    }

} 