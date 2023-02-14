import { safeUser } from "./userTypes";

/**
 * @description Profile type generic to all profiles
 */
export interface baseProfile {
  user: safeUser;
  handle: string;
  name: string;
  activity: string;
  biography: string;
}

/**
 * @description Subset of the profile type, used for creation of new profiles
 */
export interface createProfile {
  user: number;
  handle: string;
  name: string;
}
