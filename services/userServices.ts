import { baseUser, createUser } from "../db/types/userTypes";
import { staticUser } from "../db/types/staticTypes";

/**
 * @description Add a user to the database
 * @param post
 * @returns
 */
export const addUserToDb = (post: createUser): baseUser => {
  return staticUser;
};
