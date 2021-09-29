import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClientsDto } from "../../Dtos/clientsDto";
import { ClientsEntity } from "../../entity/clients.entity";
import AppService from "../../AppService/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../mappers/clients.mapper')

@Injectable()
export default class ClientsAppService extends AppService<ClientsEntity,ClientsDto>{
    constructor(@InjectRepository(ClientsEntity) private readonly clientsRepository: Repository<ClientsEntity>,public http:HttpService) {
        super(http,clientsRepository,ClientsEntity,ClientsEntity,ClientsDto,dto.clientsentityJson, dto.clientsdtoJson,dto.clientsentityToDtoJson, dto.clientsdtoToEntityJson);
             
    }

} 