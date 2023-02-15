import AWS from "aws-sdk";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import uuid from "uuid";

const dynamodb = new AWS.DynamoDB.DocumentClient();

export const createUserDBAction = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const { first_name, last_name, email } = JSON.parse(event.body as string);

  const params = {
    id: uuid.v4(),
    first_name,
    last_name,
    email,
  };

  try {
    await dynamodb
      .put({
        TableName: "Users",
        Item: params,
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify(params),
    };
  } catch (dbError) {
    return {
      statusCode: 500,
      body: JSON.stringify(dbError),
    };
  }
};
