import { Injectable } from "@nestjs/common";
import App_RolesAppService from "../appservices/app_roles.appservice";
import { App_RolesDto } from "../../Dtos/app_rolesDto";
import { App_RolesEntity } from "../../entity/app_roles.entity";
import FacadeBase from "./facadeBase";

@Injectable()
export class App_RolesFacade extends FacadeBase<App_RolesEntity,App_RolesDto>{
    constructor(private app_rolesAppService: App_RolesAppService){
       super(app_rolesAppService);
    }
}