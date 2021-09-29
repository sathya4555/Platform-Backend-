import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AppsDto } from "../../Dtos/appsDto";
import { AppsEntity } from "../../entity/apps.entity";
import AppService from "../../AppService/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../mappers/apps.mapper')

@Injectable()
export default class AppsAppService extends AppService<AppsEntity,AppsDto>{
    constructor(@InjectRepository(AppsEntity) private readonly appsRepository: Repository<AppsEntity>,public http:HttpService) {
        super(http,appsRepository,AppsEntity,AppsEntity,AppsDto,dto.appsentityJson, dto.appsdtoJson,dto.appsentityToDtoJson, dto.appsdtoToEntityJson);
             
    }

} 