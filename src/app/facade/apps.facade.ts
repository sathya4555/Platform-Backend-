import { Injectable } from "@nestjs/common";
import AppsAppService from "../appservices/apps.appservice";
import { AppsDto } from "../../Dtos/appsDto";
import { AppsEntity } from "../../entity/apps.entity";
import FacadeBase from "./facadeBase";

@Injectable()
export class AppsFacade extends FacadeBase<AppsEntity,AppsDto>{
    constructor(private appsAppService: AppsAppService){
       super(appsAppService);
    }
}