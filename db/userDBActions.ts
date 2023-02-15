import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import uuid from "uuid";
import useDynamo from "./userDynamo";

/**
 * @description Get a user from the database
 * @param event
 * @returns
 */
export const getUserDBAction = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters?.id;
  try {
    const result = await useDynamo
      .get({
        TableName: "Users",
        Key: {
          id: id,
        },
      })
      .promise();
    return {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
  } catch (dbError) {
    return {
      statusCode: 500,
      body: JSON.stringify(dbError),
    };
  }
};

/**
 * @description Create a new user in the database
 * @param event
 * @returns
 */
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
    await useDynamo
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
