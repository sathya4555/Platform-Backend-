import { Injectable } from "@nestjs/common";
import RolesAppService from "../appservices/roles.appservice";
import { RolesDto } from "../../Dtos/rolesDto";
import { RolesEntity } from "../../entity/roles.entity";
import FacadeBase from "./facadeBase";

@Injectable()
export class RolesFacade extends FacadeBase<RolesEntity,RolesDto>{
    constructor(private rolesAppService: RolesAppService){
       super(rolesAppService);
    }
}