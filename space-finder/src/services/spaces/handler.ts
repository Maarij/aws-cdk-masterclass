import {APIGatewayProxyEvent, APIGatewayProxyResult, Context} from "aws-lambda";
import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {postSpaces} from "./PostSpaces";
import {getSpaces} from "./GetSpaces";
import {updateSpace} from "./UpdateSpace";
import {deleteSpace} from "./DeleteSpace";
import {MissingFieldError} from "../shared/Validator";

const ddbClient = new DynamoDBClient({});

async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {

  let message: string;

  try {
    switch (event.httpMethod) {
      case 'GET':
        return await getSpaces(event, ddbClient);
      case 'POST':
        return await postSpaces(event, ddbClient);
      case 'PUT':
        return await updateSpace(event, ddbClient);
      case 'DELETE':
        return await deleteSpace(event, ddbClient);
      default:
        break;
    }
  } catch (e) {
    console.log(e.message);

    if (e instanceof MissingFieldError) {
      return {
        statusCode: 400,
        body: JSON.stringify(e.message)
      }
    }

    return {
      statusCode: 500,
      body: JSON.stringify(e.message)
    }
  }

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(message)
  }

  return response;
}

export {handler}