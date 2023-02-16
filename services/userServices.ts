import { baseUser, createUser, userResponse } from "../db/types/userTypes";
import { staticUser } from "../db/types/staticTypes";
import { getUserDBAction, createUserDBAction } from "../db/userDBActions";

/**
 * @description Get a user from the database
 * @param id
 * @returns
 */
export const getUserService = async (id: string) => {
  // -- business logic here --
  // - permissions
  // - blocked / banned / suspended
  return await getUserDBAction(id);
};

export const createUserService = async (body: createUser): Promise<baseUser> => {
  // -- business logic here --
  // - permissions
  // - blocked / banned / suspended
  return await createUserDBAction(body);
};

/**
 * @description Add a user to the database
 * @param post
 * @returns
 */
export const addUserToDb = (post: createUser): baseUser => {
  return staticUser;
};
