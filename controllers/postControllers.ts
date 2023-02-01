import { Request, Response } from "express";
import { basePost } from "../db/types/postTypes";
import { staticPost } from "../db/types/staticTypes";
import { createPostSchema, getPostSchema } from "../validators/postValidators";
import { addPostToDb } from "../services/postServices";

/**
 * @description Get a post
 * @param req
 * @param res
 * @returns
 */
export const getPost = (req: Request, res: Response): basePost => {
  const validatedData = getPostSchema.validate(req.query);
  if (validatedData.error) {
    throw validatedData.error;
  } else {
    return staticPost;
  }
};

/**
 * @description Create a new post
 * @param req
 * @param res
 * @returns
 */
export const createPost = (req: Request, res: Response): basePost => {
  const validatedData = createPostSchema.validate(req.body);
  if (validatedData.error) {
    throw validatedData.error;
  } else {
    addPostToDb(validatedData.value);
    return staticPost;
  }
};
