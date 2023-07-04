import {Amplify, Auth} from "aws-amplify";
import {CognitoUser} from "@aws-amplify/auth";

const awsRegion = 'us-east-2';

Amplify.configure({
  Auth: {
    region: awsRegion,
    userPoolId: 'us-east-2_aZtTsl7U5',
    userPoolWebClientId: '2pv4r5h04c75oeqkgee3et0md5',
    authenticationFlowType: 'USER_PASSWORD_AUTH'
  }
})

export class AuthService {

  public async login(userName: string, password: string) {
    return await Auth.signIn(userName, password) as CognitoUser;
  }
}