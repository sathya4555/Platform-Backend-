import { Body,Query, Controller, Delete, Get, HttpException, HttpStatus, Inject, Injectable, Param, Patch, Post, Put, Req } from '@nestjs/common';
import { ClientsFacade } from '../facade/clients.facade';
import { ResponseModel } from '../../common/ResponseModel';
import { SNS_SQS } from '../../sns_sqs/SNS_SQS';
import { ClientsDto } from '../../Dtos/clientsDto';
import { RequestModel } from '../../common/RequestModel';
import { Message } from '../../common/Message';


@Controller('clients')
export class ClientsRoutes{

  constructor(private clientsFacade : ClientsFacade) { }

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['CLIENTS1_ADD','CLIENTS1_UPDATE','CLIENTS1_DELETE'];
  private serviceName = ['CLIENTS1_SERVICE','CLIENTS1_SERVICE','CLIENTS1_SERVICE'];
  
  onModuleInit() {
   
    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("Result is........" + JSON.stringify(result));
          try {
            let responseModelOfClientsDto: ResponseModel<ClientsDto> = null;
            console.log(`listening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
              case 'CLIENTS1_ADD':
                console.log("Inside PRODUCT_ADD Topic");
                responseModelOfClientsDto = await this.createClients(result["message"]);
                break;
              case 'CLIENTS1_UPDATE':
                  console.log("Inside PRODUCT_UPDATE Topic");
                  responseModelOfClientsDto = await this.updateclients(result["message"]);
                  break;
              case 'CLIENTS1_DELETE':
                    console.log("Inside PRODUCT_DELETE Topic");
                    responseModelOfClientsDto = await this.deleteClients(result["message"]);
                    break;
  
            }
  
            console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOfClientsDto: RequestModel<ClientsDto> = result["message"];
            responseModelOfClientsDto.setSocketId(requestModelOfClientsDto.SocketId)
            responseModelOfClientsDto.setCommunityUrl(requestModelOfClientsDto.CommunityUrl);
            responseModelOfClientsDto.setRequestId(requestModelOfClientsDto.RequestGuid);
            responseModelOfClientsDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("ELEMENT: ", JSON.stringify(responseModelOfClientsDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOfClientsDto)
            }
          }
          catch (error) {
            console.log("Inside Catch.........");
            console.log(error, result);
            for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
              const element = result.OnFailureTopicsToPush[index];
              let errorResult: ResponseModel<ClientsDto> = new ResponseModel<ClientsDto>(null,null,null,null,null,null,null,null,null);;
              errorResult.setStatus(new Message("500",error,null))
              

              this.sns_sqs.publishMessageToTopic(element, errorResult);
            }
          }
        }
      })())
    }

  }


  @Get()
  allClientss() {
    try {
      console.log("Inside controller ......STUDENT");
      return this.clientsFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post("/") 
  async createClients(@Body() body:RequestModel<ClientsDto>): Promise<ResponseModel<ClientsDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {
      console.log("Inside CreateClients of controller....body id" + JSON.stringify(body));
      let result = await this.clientsFacade.create(body);
   
      return result;
      // return null;
    } catch (error) {
       console.log("Error is....." + error);
       throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put("/")
  async updateclients(@Body() body: RequestModel<ClientsDto>): Promise<ResponseModel<ClientsDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {
      console.log("Inside updateProduct of controller....body id" + JSON.stringify(body));

      console.log("Executing update query..............")
      return await this.clientsFacade.update(body);
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/')
  deleteClients(@Body() body:RequestModel<ClientsDto>): Promise<ResponseModel<ClientsDto>>{
    try {
      console.log("body: ",body)
      return this.clientsFacade.deleteById(body);
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }

  @Delete('/:id')
  deleteClientsbyid(@Param('id') id) {
    try {
      console.log("delete by id: ",id)
      return this.clientsFacade.deleteByIds(id);
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }

  @Get('/:id')
  readOne(@Param('id') id) {
    return this.clientsFacade.readOne(id);
  }


}