import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { Message } from 'src/common/Message';
import { RequestModel } from 'src/common/RequestModel';
import { ResponseModel } from 'src/common/ResponseModel';
import { AppsDto } from 'src/Dtos/appsDto';
import { SNS_SQS } from 'src/sns_sqs/SNS_SQS';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['LOGIN_ADD'];
  private serviceName = ['APPS1_SERVICE'];


  onModuleInit() {
   
    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("Result is........" + JSON.stringify(result));
          try {
            let responseModelOfAppsDto:any = null;
            console.log(`listening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
              case 'APPS1_ADD':
                console.log("Inside PRODUCT_ADD Topic");
                responseModelOfAppsDto = await this.login(result["message"]);
                break;
            //   case 'APPS1_UPDATE':
            //       console.log("Inside PRODUCT_UPDATE Topic");
            //       responseModelOfAppsDto = await this.updateapps(result["message"]);
            //       break;
            //   case 'APPS1_DELETE':
            //         console.log("Inside PRODUCT_DELETE Topic");
            //         responseModelOfAppsDto = await this.deleteApps(result["message"]);
            //         break;
  
            }
  
            console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOfAppsDto: RequestModel<any> = result["message"];
            responseModelOfAppsDto.setSocketId(requestModelOfAppsDto.SocketId)
            responseModelOfAppsDto.setCommunityUrl(requestModelOfAppsDto.CommunityUrl);
            responseModelOfAppsDto.setRequestId(requestModelOfAppsDto.RequestGuid);
            responseModelOfAppsDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("ELEMENT: ", JSON.stringify(responseModelOfAppsDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOfAppsDto)
            }
          }
          catch (error) {
            console.log("Inside Catch.........");
            console.log(error, result);
            for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
              const element = result.OnFailureTopicsToPush[index];
              let errorResult: ResponseModel<any> = new ResponseModel<any>(null,null,null,null,null,null,null,null,null);;
              errorResult.setStatus(new Message("500",error,null))
              

              this.sns_sqs.publishMessageToTopic(element, errorResult);
            }
          }
        }
      })())
    }

  }



  @Post('register')
  async register(
    @Body() registerRequest: { name: string; password: string; email: string },
  ) {
    return await this.authService.registerUser(registerRequest)
  }

  
  @Post('login')
  async login(@Body() authenticateRequest: RequestModel<any>): Promise<ResponseModel<any>> {
    try {
      return await this.authService.authenticateUser(authenticateRequest);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}