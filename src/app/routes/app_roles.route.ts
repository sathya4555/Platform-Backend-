import { Body,Query, Controller, Delete, Get, HttpException, HttpStatus, Inject, Injectable, Param, Patch, Post, Put, Req } from '@nestjs/common';
import { App_RolesFacade } from '../facade/app_roles.facade';
import { ResponseModel } from '../../common/ResponseModel';
import { SNS_SQS } from '../../sns_sqs/SNS_SQS';
import { App_RolesDto } from '../../Dtos/app_rolesDto';
import { RequestModel } from '../../common/RequestModel';
import { Message } from '../../common/Message';


@Controller('app_roles')
export class App_RolesRoutes{

  constructor(private app_rolesFacade : App_RolesFacade) { }

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['APP_ROLES1_ADD','APP_ROLES1_UPDATE','APP_ROLES1_DELETE'];
  private serviceName = ['APP_ROLES1_SERVICE','APP_ROLES1_SERVICE','APP_ROLES1_SERVICE'];
  
  onModuleInit() {
   
    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("Result is........" + JSON.stringify(result));
          try {
            let responseModelOfApp_RolesDto: ResponseModel<App_RolesDto> = null;
            console.log(`listening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
              case 'APP_ROLES1_ADD':
                console.log("Inside PRODUCT_ADD Topic");
                responseModelOfApp_RolesDto = await this.createApp_Roles(result["message"]);
                break;
              case 'APP_ROLES1_UPDATE':
                  console.log("Inside PRODUCT_UPDATE Topic");
                  responseModelOfApp_RolesDto = await this.updateapp_roles(result["message"]);
                  break;
              case 'APP_ROLES1_DELETE':
                    console.log("Inside PRODUCT_DELETE Topic");
                    responseModelOfApp_RolesDto = await this.deleteApp_Roles(result["message"]);
                    break;
  
            }
  
            console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOfApp_RolesDto: RequestModel<App_RolesDto> = result["message"];
            responseModelOfApp_RolesDto.setSocketId(requestModelOfApp_RolesDto.SocketId)
            responseModelOfApp_RolesDto.setCommunityUrl(requestModelOfApp_RolesDto.CommunityUrl);
            responseModelOfApp_RolesDto.setRequestId(requestModelOfApp_RolesDto.RequestGuid);
            responseModelOfApp_RolesDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("ELEMENT: ", JSON.stringify(responseModelOfApp_RolesDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOfApp_RolesDto)
            }
          }
          catch (error) {
            console.log("Inside Catch.........");
            console.log(error, result);
            for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
              const element = result.OnFailureTopicsToPush[index];
              let errorResult: ResponseModel<App_RolesDto> = new ResponseModel<App_RolesDto>(null,null,null,null,null,null,null,null,null);;
              errorResult.setStatus(new Message("500",error,null))
              

              this.sns_sqs.publishMessageToTopic(element, errorResult);
            }
          }
        }
      })())
    }

  }


  @Get()
  allApp_Roless() {
    try {
      console.log("Inside controller ......STUDENT");
      return this.app_rolesFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post("/") 
  async createApp_Roles(@Body() body:RequestModel<App_RolesDto>): Promise<ResponseModel<App_RolesDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {
      console.log("Inside CreateApp_Roles of controller....body id" + JSON.stringify(body));
      let result = await this.app_rolesFacade.create(body);
   
      return result;
      // return null;
    } catch (error) {
       console.log("Error is....." + error);
       throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put("/")
  async updateapp_roles(@Body() body: RequestModel<App_RolesDto>): Promise<ResponseModel<App_RolesDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {
      console.log("Inside updateProduct of controller....body id" + JSON.stringify(body));

      console.log("Executing update query..............")
      return await this.app_rolesFacade.update(body);
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/')
  deleteApp_Roles(@Body() body:RequestModel<App_RolesDto>): Promise<ResponseModel<App_RolesDto>>{
    try {
      console.log("body: ",body)
      return this.app_rolesFacade.deleteById(body);
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }

  @Delete('/:id')
  deleteApp_Rolesbyid(@Param('id') id) {
    try {
      console.log("delete by id: ",id)
      return this.app_rolesFacade.deleteByIds(id);
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }

  @Get('/:id')
  readOne(@Param('id') id) {
    return this.app_rolesFacade.readOne(id);
  }


}