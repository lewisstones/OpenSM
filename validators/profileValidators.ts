import Joi from "joi";
import { createProfile } from "../db/types/profileType";

/**
 * @description Validate the params for get profile by id
 */
export const idProfileSchema = Joi.object({
  id: Joi.number().min(1).required(),
});

/**
 * @description Validate the params for create profile endpoint
 */
export const createProfileSchema = Joi.object<createProfile>({
  user: Joi.number().min(1).required(),
  handle: Joi.string().min(3).max(30).required(),
  name: Joi.string().min(3).max(30).required(),
});
