import Joi from "joi";
import { createPostType } from "../db/postTypes";

/**
 * @description Joi schema for validating the getPost request params
 * @param id : number - the id of the post to get
 */
export const getPostSchema = Joi.object({
  id: Joi.number().min(1).required(),
});

/**
 * @description Joi schema for validating the createPost request body
 */
export const createPostSchema = Joi.object<createPostType>({
  author: Joi.number().min(1).max(1000).required(),
  textContent: Joi.string().min(1).max(1000),
  image: Joi.string().min(1).max(1000),
});