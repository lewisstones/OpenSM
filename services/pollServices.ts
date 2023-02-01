import { basePoll, createPoll } from "../db/types/pollTypes";
import { staticPoll } from "../db/types/staticTypes";

/**
 * @description Add a poll to the database
 * @param poll
 * @returns
 */
export const addPollToDb = (poll: createPoll): basePoll => {
  return staticPoll;
};
