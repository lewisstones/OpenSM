import { baseProfile } from "./profileType";
import { baseComment } from "./commentTypes";

/**
 * @description: The base post type, generic to all posts
 */
export interface basePost {
  author: baseProfile;
  textContent?: string;
  image?: string;
  timeStamp: string;
  liked: boolean;
  commented: boolean;
  comments: baseComment[];
}

/**
 * @description: A subset of the post type, used for creation of new posts
 */
export interface createPostType {
  author: number;
  textContent?: string;
  image?: string;
}
