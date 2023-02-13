import { Request, Response } from "express";
import { baseComment } from "../db/types/commentTypes";
import { staticComment, staticCommentLiked } from "../db/types/staticTypes";
import {
  idCommentSchema,
  createCommentSchema,
} from "../validators/commentValidators";
import { addCommentToDb } from "../services/commentServices";

/**
 * @description Get a comment
 * @param req
 * @param res
 * @returns
 */
export const getComment = (req: Request, res: Response): baseComment => {
  const { error, value: validatedData } = idCommentSchema.validate(req.query);
  if (error) {
    throw error;
  } else {
    return staticComment;
  }
};

/**
 * @description Create a new comment
 * @param req
 * @param res
 * @returns
 */
export const createComment = (req: Request, res: Response): baseComment => {
  const { error, value: validatedData } = createCommentSchema.validate(
    req.body
  );
  if (error) {
    throw error;
  } else {
    return addCommentToDb(validatedData);
  }
};

/**
 * @description Like a comment
 * @param req
 * @param res
 * @returns
 */
export const likeComment = (req: Request, res: Response) => {
  const { error, value: validatedData } = idCommentSchema.validate(req.body);
  if (error) {
    throw error;
  } else {
    return staticCommentLiked;
  }
};
