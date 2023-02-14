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
  handle: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  is_admin: Joi.boolean().required().default(false),
});
