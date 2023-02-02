import { Request, Response } from "express";
import { baseComment } from "../db/types/commentTypes";
import { staticComment } from "../db/types/staticTypes";
import {
  idCommentSchema,
  createCommentSchema,
} from "../validators/commentValidators";
import { addCommentToDb } from "../services/commentServices";

export const getComment = (req: Request, res: Response): baseComment => {
  const { error, value: validatedData } = idCommentSchema.validate(req.query);
  if (error) {
    throw error;
  } else {
    return staticComment;
  }
};

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
