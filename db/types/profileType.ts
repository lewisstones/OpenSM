/**
 * @description Profile type generic to all profiles
 */
export interface baseProfile {
  handle: string;
  name: string;
  activity: string;
  biography: string;
}

/**
 * @description Subset of the profile type, used for creation of new profiles
 */
export interface createProfile {
  handle: string;
  name: string;
}
