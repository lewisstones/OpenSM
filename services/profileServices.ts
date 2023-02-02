import { baseProfile, createProfile } from "../db/types/profileType";
import { staticProfile } from "../db/types/staticTypes";

/**
 * @description Add a profile to the database
 * @param post
 * @returns
 */
export const addProfileToDb = (post: createProfile): baseProfile => {
  return staticProfile;
};
