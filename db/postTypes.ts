import { baseProfile } from "./profileType";

export interface basePost {
  author: baseProfile;
  textContent?: string;
  image?: string;
  timeStamp: string;
  liked: boolean;
  commented: boolean;
}
