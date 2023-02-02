import { staticComment } from "../db/types/staticTypes";
import { baseComment, createComment } from "../db/types/commentTypes";

/**
 * @description Add a comment to the database
 * @param comment
 * @returns
 */
export const addCommentToDb = (comment: createComment): baseComment => {
  return staticComment;
};
