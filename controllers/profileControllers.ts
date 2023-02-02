import { Request, Response } from "express";
import {
  idProfileSchema,
  createProfileSchema,
} from "../validators/profileValidators";
import { staticProfile } from "../db/types/staticTypes";
import { baseProfile } from "../db/types/profileType";
import { addProfileToDb } from "../services/profileServices";

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
  const { error, value: validatedData } = createProfileSchema.validate(
    req.body
  );
  if (error) {
    throw error;
  } else {
    return addProfileToDb(validatedData);
  }
};
