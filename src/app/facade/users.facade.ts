import { Injectable } from "@nestjs/common";
import UsersAppService from "../appservices/users.appservice";
import { UsersDto } from "../../Dtos/usersDto";
import { UsersEntity } from "../../entity/users.entity";
import FacadeBase from "./facadeBase";

@Injectable()
export class UsersFacade extends FacadeBase<UsersEntity,UsersDto>{
    constructor(private usersAppService: UsersAppService){
       super(usersAppService);
    }
}