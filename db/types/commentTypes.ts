import { baseProfile } from "./profileType";

/**
 * @description: The base comment type, generic to all comments
 */
export interface baseComment {
  author: baseProfile;
  textContent: string;
  timeStamp: string;
  liked?: boolean;
}

/**
 * @description: A subset of the comment type, used for creation of new comments
 */
export interface createComment {
  author: number;
  postId: number;
  textContent: string;
}
