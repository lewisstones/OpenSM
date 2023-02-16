import { baseProfile, createProfile } from "../db/types/profileType";
import { staticProfile } from "../db/types/staticTypes";
import { getUserService } from "./userServices";
import { createProfileDBAction, getProfileDBAction } from "../db/profileDBActions";

export const getProfileService = async (id: string): Promise<baseProfile> => {
  return await getProfileDBAction(id);
};

/**
 * @description: Create a new profile
 * @param body
 * @returns
 */
export const createProfileService = async (body: createProfile): Promise<baseProfile> => {
  const { user, handle } = body;

  // get user from db
  const userObj = await getUserService(user);
  if (userObj) {
    // create profile params
    const params = {
      user: userObj,
      handle: handle,
    };

    return await createProfileDBAction(params);
  } else {
    throw new Error("User not found");
  }
};

/**
 * @description Add a profile to the database
 * @param post
 * @returns
 */
export const addProfileToDb = (post: createProfile): baseProfile => {
  return staticProfile;
};
