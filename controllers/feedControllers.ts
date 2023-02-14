import { Request, Response } from "express";
import { idProfileSchema } from "../validators/profileValidators";
import { staticPost } from "../db/types/staticTypes";

/**
 * @description Get a feed of posts for a given profile
 * @param req
 * @param res
 * @returns
 */
export const getHomeFeed = (req: Request, res: Response) => {
  const { error, value: validatedData } = idProfileSchema.validate(req.query);
  if (error) {
    throw error;
  }
  return [staticPost, staticPost, staticPost];
};

/**
 * @description Get a feed of popular posts
 * @param req
 * @param res
 * @returns
 */
export const getPopularFeed = (req: Request, res: Response) => {
  const { error, value: validatedData } = idProfileSchema.validate(req.query);
  if (error) {
    throw error;
  }
  return [staticPost, staticPost, staticPost];
};
