// import { AuthConfig } from './auth.config';
import { Inject, Injectable } from '@nestjs/common';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
} from 'amazon-cognito-identity-js';
import { RequestModel } from 'src/common/RequestModel';
import { ResponseModel } from 'src/common/ResponseModel';
import { AuthConfig } from './auth.config';

@Injectable()
export class AuthService {
  private userPool: CognitoUserPool;
  constructor(
   
  ) {
    this.userPool = new CognitoUserPool({
      UserPoolId: "ca-central-1_dcs5wTtEl",
      ClientId: "6ao3t42tqdtgrp56ojvauitm25",
    });
  }

  authenticateUser(user:RequestModel<any>): Promise<ResponseModel<any>>{
    const { name, password } = user;

    const authenticationDetails = new AuthenticationDetails({
      Username: name,
      Password: password,
    });
    const userData = {
      Username: name,
      Pool: this.userPool,
    };

    const newUser :any= new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      return newUser.authenticateUser(authenticationDetails, {
        onSuccess: result => {
          resolve(result);

        },
        onFailure: err => {
          reject(err);

        },
      });
    });
  }

  registerUser(registerRequest: {
    name: string;
    email: string;
    password: string;
  }) {
    const { name, email, password } = registerRequest;
    return new Promise((resolve, reject) => {
      return this.userPool.signUp(
        name,
        password,
        [new CognitoUserAttribute({ Name: 'email', Value: email })],
        null,
        (error, result) => {
          if (!result) {
            reject(error);
          } else {
            resolve(result.user);
          }
        },
      );
    });
  }
}