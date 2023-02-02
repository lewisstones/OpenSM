import { Request, Response } from "express";
import { basePost } from "../db/types/postTypes";
import { staticPost, staticPostLiked } from "../db/types/staticTypes";
import { createPostSchema, idPostSchema } from "../validators/postValidators";
import { addPostToDb } from "../services/postServices";

/**
 * @description Get a post
 * @param req
 * @param res
 * @returns
 */
export const getPost = (req: Request, res: Response): basePost => {
  const { error, value: validatedData } = idPostSchema.validate(req.query);
  if (error) {
    throw error;
  }
  return staticPost;
};

/**
 * @description Create a new post
 * @param req
 * @param res
 * @returns
 */
export const createPost = (req: Request, res: Response): basePost => {
  const { error, value: validatedData } = createPostSchema.validate(req.body);
  if (error) {
    throw error;
  } else {
    return addPostToDb(validatedData);
  }
};

/**
 * @description Like a post
 * @param req
 * @param res
 * @returns
 */
export const likePost = (req: Request, res: Response): basePost => {
  const { error, value: validatedData } = idPostSchema.validate(req.query);
  if (error) {
    throw error;
  }
  return staticPostLiked;
};
