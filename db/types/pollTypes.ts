import { baseProfile } from "./profileType";

/**
 * @description: The base poll option type, generic to all poll options
 */
export interface basePollOption {
  title: string;
  description: string;
  votes: number;
}

/**
 * @description: The base poll type, generic to all polls
 */
export interface basePoll {
  author: baseProfile;
  title: string;
  description: string;
  disclaimer: string;
  options: basePollOption[];
}

/**
 * @description: A subset of the poll type, used for creation of new polls
 */
export interface createPoll {
  author: number;
  title: string;
  description: string;
  disclaimer: string;
  options: basePollOption[];
}
