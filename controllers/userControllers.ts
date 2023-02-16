import { Request, Response } from "express";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { idUserSchema, createUserSchema } from "../validators/userValidators";
import { baseUser } from "../db/types/userTypes";
import { staticUser } from "../db/types/staticTypes";
import { getUserService, createUserService } from "../services/userServices";

/**
 * @description Calls the operations to get a user by id - serverless example
 * @param event
 * @returns
 */
export const getUserServerless = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  // Validate the request - id should be present and id should be a string
  const { error, value: validatedData } = idUserSchema.validate(event.pathParameters);

  if (error) {
    throw error;
  } else {
    // Call the service
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

export const createUserServerless = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const { error, value: validatedData } = createUserSchema.validate(JSON.parse(event.body as string));

  if (error) {
    throw error;
  } else {
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

/**
 * @description Calls the operations to get a user by id
 * @param req
 * @param res
 * @returns
 */
export const getUser = (req: Request, res: Response): baseUser => {
  const { error, value: validatedData } = idUserSchema.validate(req.query);
  if (error) {
    throw error;
  } else {
    return staticUser;
  }
};

/**
 * @description Calls the operations to create a new user
 * @param req
 * @param res
 * @returns
 */
export const createUser = (req: Request, res: Response): baseUser => {
  const { error, value: validatedData } = createUserSchema.validate(req.body);
  if (error) {
    throw error;
  } else {
    return staticUser;
  }
};
