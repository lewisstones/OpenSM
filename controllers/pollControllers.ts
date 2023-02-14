import { Request, Response } from "express";
import { basePoll, basePollOption } from "../db/types/pollTypes";
import {
  getPollSchema,
  createPollSchema,
  voteOnPollSchema,
  createPollOptionSchema,
} from "../validators/pollValidators";
import { staticPoll, staticPollOption } from "../db/types/staticTypes";
import { addPollToDb } from "../services/pollServices";

/**
 * @description Get a poll
 * @param req
 * @param res
 * @returns
 */
export const getPoll = (req: Request, res: Response): basePoll => {
  const validatedData = getPollSchema.validate(req.query);
  if (validatedData.error) {
    throw validatedData.error;
  } else {
    return staticPoll;
  }
};

/**
 * @description Create a new poll
 * @param req
 * @param res
 * @returns
 */
export const createPoll = (req: Request, res: Response): basePoll => {
  const validatedData = createPollSchema.validate(req.body);
  if (validatedData.error) {
    throw validatedData.error;
  } else {
    return addPollToDb(validatedData.value);
  }
};

/**
 * @description Vote on a poll - should act as unvote if already voted
 * @param req
 * @param res
 * @returns
 */
export const voteOnPoll = (req: Request, res: Response): boolean => {
  const validatedData = voteOnPollSchema.validate(req.body);
  if (validatedData.error) {
    throw validatedData.error;
  } else {
    // create vote record in db for poll option
    return true;
  }
};

/**
 * @description Create a new poll option
 * @param req
 * @param res
 * @returns
 */
export const createPollOption = (
  req: Request,
  res: Response
): basePollOption => {
  const validatedData = createPollOptionSchema.validate(req.body);
  if (validatedData.error) {
    throw validatedData.error;
  } else {
    // create poll option record in db
    return staticPollOption;
  }
};
