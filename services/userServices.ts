import { baseUser, createUser } from "../db/types/userTypes";
import { getUserDBAction, createUserDBAction } from "../db/userDBActions";

/**
 * @description Service: Get a user from the database
 * @param id : id of user to retrieve
 * @returns
 */
export const getUserService = async (id: string): Promise<baseUser> => {
  // -- business logic here --
  // - permissions
  // - blocked / banned / suspended
  return await getUserDBAction(id);
};

/**
 * @description Service: Create a new user in the database
 * @param body
 * @returns
 */
export const createUserService = async (body: createUser): Promise<baseUser> => {
  // -- business logic here --
  // - permissions
  // - blocked / banned / suspended
  return await createUserDBAction(body);
};
