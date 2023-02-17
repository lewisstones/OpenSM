import { Request, Response } from "express";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { idProfileSchema, createProfileSchema } from "../validators/profileValidators";
import { staticProfile } from "../db/types/staticTypes";
import { baseProfile } from "../db/types/profileType";
import { addProfileToDb, createProfileService, getProfileService } from "../services/profileServices";

/**
 * @description Get a profile by id
 * @param event
 * @returns
 */
export const getProfileServerless = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const { error, value: validatedData } = idProfileSchema.validate(event.pathParameters);
  if (error) {
    throw error;
  } else {
    // call service
    const profile = await getProfileService(validatedData.id);
    if (!profile) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Profile not found" }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(profile),
    };
  }
};

/**
 * @description Create a new profile
 * @param event
 * @returns
 */
export const createProfileServerless = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const { error, value: validatedData } = createProfileSchema.validate(JSON.parse(event.body as string));
  if (error) {
    throw error;
  } else {
    const profile = await createProfileService(validatedData);
    if (!profile) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Profile creation failed" }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(profile),
    };
  }
};

/**
 * @description Get a profile
 * @param req
 * @param res
 * @returns
 */
export const getProfile = (req: Request, res: Response): baseProfile => {
  const { error, value: validatedData } = idProfileSchema.validate(req.query);
  if (error) {
    throw error;
  }
  return staticProfile;
};

/**
 * @description Create a new profile
 * @param req
 * @param res
 * @returns
 */
export const createProfile = (req: Request, res: Response): baseProfile => {
  const { error, value: validatedData } = createProfileSchema.validate(req.body);
  if (error) {
    throw error;
  } else {
    return addProfileToDb(validatedData);
  }
};

/**
 * @description Subscribe to a profile
 * @param req
 * @param res
 * @returns
 */
export const subscribeToProfile = (req: Request, res: Response) => {
  const { error, value: validatedData } = idProfileSchema.validate(req.body);
  if (error) {
    throw error;
  } else {
    return true;
  }
};

/**
 * @description Unsubscribe from a profile
 * @param req
 * @param res
 * @returns
 */
export const unsubscribeFromProfile = (req: Request, res: Response) => {
  const { error, value: validatedData } = idProfileSchema.validate(req.body);
  if (error) {
    throw error;
  } else {
    return true;
  }
};
