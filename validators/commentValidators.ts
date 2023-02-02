import Joi from "joi";
import { createComment } from "../db/types/commentTypes";

/**
 * @description Validate the params for get comment by id
 */
export const idCommentSchema = Joi.object({
  id: Joi.number().min(1).required(),
});

/**
 * @description Validate the createComment object
 */
export const createCommentSchema = Joi.object<createComment>({
  author: Joi.number().min(1).required(),
  textContent: Joi.string().min(1).max(1000).required(),
});
