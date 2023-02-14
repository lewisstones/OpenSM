import { Request, Response } from "express";
import { idUserSchema, createUserSchema } from "../validators/userValidators";
import { baseUser } from "../db/types/userTypes";
import { staticUser } from "../db/types/staticTypes";

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
