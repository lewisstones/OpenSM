// const { blogpostDb } = require('../db')
import { createPostType, basePost } from "../db/postTypes";
import { createPostSchema } from "../validators/postValidators";
import { staticPost } from "../db/staticTypes";

/**
 * @description Add a post to the database
 * @param post : basePost
 * @returns newly created basePost
 */
export const addPostToDb = (post: createPostType): basePost => {
  return staticPost;
};
