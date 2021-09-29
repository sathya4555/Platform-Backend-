import { Injectable } from "@nestjs/common";
import App_MessagesAppService from "../appservices/app_messages.appservice";
import { App_MessagesDto } from "../../Dtos/app_messagesDto";
import { App_MessagesEntity } from "../../entity/app_messages.entity";
import FacadeBase from "./facadeBase";

@Injectable()
export class App_MessagesFacade extends FacadeBase<App_MessagesEntity,App_MessagesDto>{
    constructor(private app_messagesAppService: App_MessagesAppService){
       super(app_messagesAppService);
    }
}