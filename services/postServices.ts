// const { blogpostDb } = require('../db')
import { createPostType, basePost } from "../db/types/postTypes";
import { staticPost } from "../db/types/staticTypes";

/**
 * @description Add a post to the database
 * @param post : basePost
 * @returns newly created basePost
 */
export const addPostToDb = (post: createPostType): basePost => {
  return staticPost;
};
