import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { idUserSchema, createUserSchema } from "../validators/userValidators";
import { getUserService, createUserService } from "../services/userServices";

/**
 * @description Calls the operations to get a user by id - serverless example
 * @param event
 * @returns
 */
export const getUserServerless = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const { error, value: validatedData } = idUserSchema.validate(event.pathParameters);

  if (error) {
    throw error;
  } else {
    // call the service
    const user = await getUserService(validatedData.id);
    if (!user) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "User not found" }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  }
};

/**
 * @description Calls the operations to create a user - serverless example
 * @param event
 * @returns
 */
export const createUserServerless = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const { error, value: validatedData } = createUserSchema.validate(JSON.parse(event.body as string));

  if (error) {
    throw error;
  } else {
    // call the service
    const user = await createUserService(validatedData);

    if (!user) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "User creation failed" }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  }
};
