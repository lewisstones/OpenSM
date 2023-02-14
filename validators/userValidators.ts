import Joi from "joi";
import { createUser } from "../db/types/userTypes";

/**
 * @description Validate the params for get user by id
 */
export const idUserSchema = Joi.object({
  id: Joi.number().min(1).required(),
});

/**
 * @description Validate the params for create user endpoint
 */
export const createUserSchema = Joi.object<createUser>({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
});
