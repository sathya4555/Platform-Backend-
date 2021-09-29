import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FeaturesDto } from "../../Dtos/featuresDto";
import { FeaturesEntity } from "../../entity/features.entity";
import AppService from "../../AppService/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../mappers/features.mapper')

@Injectable()
export default class FeaturesAppService extends AppService<FeaturesEntity,FeaturesDto>{
    constructor(@InjectRepository(FeaturesEntity) private readonly featuresRepository: Repository<FeaturesEntity>,public http:HttpService) {
        super(http,featuresRepository,FeaturesEntity,FeaturesEntity,FeaturesDto,dto.featuresentityJson, dto.featuresdtoJson,dto.featuresentityToDtoJson, dto.featuresdtoToEntityJson);
             
    }

} 