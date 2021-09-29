import { Injectable } from "@nestjs/common";
import ClientsAppService from "../appservices/clients.appservice";
import { ClientsDto } from "../../Dtos/clientsDto";
import { ClientsEntity } from "../../entity/clients.entity";
import FacadeBase from "./facadeBase";

@Injectable()
export class ClientsFacade extends FacadeBase<ClientsEntity,ClientsDto>{
    constructor(private clientsAppService: ClientsAppService){
       super(clientsAppService);
    }
}