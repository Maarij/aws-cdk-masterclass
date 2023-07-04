import {AuthService} from "./AuthService";

async function testAuth() {
  const service = new AuthService();
  const loginResult = await service.login(
    'maarij',
    'sj,2PbwH5xhe2_R'
  )

  console.log(loginResult);
}

testAuth();