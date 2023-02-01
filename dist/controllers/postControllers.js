"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.getPost = void 0;
const staticTypes_1 = require("../db/types/staticTypes");
const postValidators_1 = require("../validators/postValidators");
const postServices_1 = require("../services/postServices");
/**
 * @description Get a post
 * @param req
 * @param res
 * @returns
 */
const getPost = (req, res) => {
    const validatedData = postValidators_1.getPostSchema.validate(req.query);
    if (validatedData.error) {
        throw validatedData.error;
    }
    else {
        return staticTypes_1.staticPost;
    }
};
exports.getPost = getPost;
/**
 * @description Create a new post
 * @param req
 * @param res
 * @returns
 */
const createPost = (req, res) => {
    const validatedData = postValidators_1.createPostSchema.validate(req.body);
    if (validatedData.error) {
        throw validatedData.error;
    }
    else {
        (0, postServices_1.addPostToDb)(validatedData.value);
        return staticTypes_1.staticPost;
    }
};
exports.createPost = createPost;
