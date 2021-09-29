import { Injectable } from "@nestjs/common";
import Tenant_UsersAppService from "../appservices/tenant_users.appservice";
import { Tenant_UsersDto } from "../../Dtos/tenant_usersDto";
import { Tenant_UsersEntity } from "../../entity/tenant_users.entity";
import FacadeBase from "./facadeBase";

@Injectable()
export class Tenant_UsersFacade extends FacadeBase<Tenant_UsersEntity,Tenant_UsersDto>{
    constructor(private tenant_usersAppService: Tenant_UsersAppService){
       super(tenant_usersAppService);
    }
}