import Joi from "joi";
import { basePoll, createPoll, basePollOption } from "../db/types/pollTypes";

/**
 * @description Schema for validating the request params for get poll
 */
export const getPollSchema = Joi.object({
  id: Joi.number().min(1).required(),
});

/**
 * @description Schema for validating the request body for create poll option
 */
export const createPollOptionSchema = Joi.object<basePollOption>({
  title: Joi.string().min(1).max(1000).required(),
  description: Joi.string().min(1).max(1000).required(),
});

/**
 * @description Schema for validating the request body for create poll
 */
export const createPollSchema = Joi.object<createPoll>({
  author: Joi.number().min(1).required(),
  title: Joi.string().min(1).max(1000).required(),
  description: Joi.string().min(1).max(1000).required(),
  disclaimer: Joi.string().min(1).max(1000).required(),
  options: Joi.array().items(createPollOptionSchema).min(2).required(),
});

/**
 * @description Schema for validating the request body for vote on poll
 */
export const voteOnPollSchema = Joi.object({
  id: Joi.number().min(1).required(),
});
