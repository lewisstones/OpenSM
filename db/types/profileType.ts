import { safeUser, baseUser } from "./userTypes";

/**
 * @description Profile type generic to all profiles
 */
export interface baseProfile {
  user: baseUser;
  handle: string;
  activity?: string;
  biography?: string;
}

/**
 * @description Subset of the profile type, used for creation of new profiles
 */
export interface createProfile {
  user: string;
  handle: string;
}
