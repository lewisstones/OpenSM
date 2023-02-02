"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likePost = exports.createPost = exports.getPost = void 0;
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
    const { error, value: validatedData } = postValidators_1.idPostSchema.validate(req.query);
    if (error) {
        throw error;
    }
    return staticTypes_1.staticPost;
};
exports.getPost = getPost;
/**
 * @description Create a new post
 * @param req
 * @param res
 * @returns
 */
const createPost = (req, res) => {
    const { error, value: validatedData } = postValidators_1.createPostSchema.validate(req.body);
    if (error) {
        throw error;
    }
    else {
        return (0, postServices_1.addPostToDb)(validatedData);
    }
};
exports.createPost = createPost;
/**
 * @description Like a post
 * @param req
 * @param res
 * @returns
 */
const likePost = (req, res) => {
    const { error, value: validatedData } = postValidators_1.idPostSchema.validate(req.query);
    if (error) {
        throw error;
    }
    return staticTypes_1.staticPostLiked;
};
exports.likePost = likePost;
