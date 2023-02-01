import { Request, Response } from "express";
import { basePoll } from "../db/types/pollTypes";
import { getPollSchema, createPollSchema } from "../validators/pollValidators";
import { staticPoll } from "../db/types/staticTypes";
import { addPollToDb } from "../services/pollServices";

export const getPoll = (req: Request, res: Response): basePoll => {
  const validatedData = getPollSchema.validate(req.query);
  if (validatedData.error) {
    throw validatedData.error;
  } else {
    return staticPoll;
  }
};

export const createPoll = (req: Request, res: Response): basePoll => {
  const validatedData = createPollSchema.validate(req.body);
  if (validatedData.error) {
    throw validatedData.error;
  } else {
    addPollToDb(validatedData.value);
    return staticPoll;
  }
};
