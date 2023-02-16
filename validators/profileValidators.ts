import Joi from "joi";
import { createProfile } from "../db/types/profileType";

/**
 * @description Validate the params for get profile by id
 */
export const idProfileSchema = Joi.object({
  id: Joi.string().min(1).max(300).required(),
});

/**
 * @description Validate the params for create profile endpoint
 */
export const createProfileSchema = Joi.object<createProfile>({
  user: Joi.string().min(1).max(300).required(),
  handle: Joi.string().min(3).max(38).required(),
});
