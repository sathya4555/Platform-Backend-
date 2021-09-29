import { Injectable } from "@nestjs/common";
import FeaturesAppService from "../appservices/features.appservice";
import { FeaturesDto } from "../../Dtos/featuresDto";
import { FeaturesEntity } from "../../entity/features.entity";
import FacadeBase from "./facadeBase";

@Injectable()
export class FeaturesFacade extends FacadeBase<FeaturesEntity,FeaturesDto>{
    constructor(private featuresAppService: FeaturesAppService){
       super(featuresAppService);
    }
}