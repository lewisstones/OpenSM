"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostSchema = exports.getPostSchema = void 0;
const joi_1 = __importDefault(require("joi"));
/**
 * @description Joi schema for validating the getPost request params
 * @param id : number - the id of the post to get
 */
exports.getPostSchema = joi_1.default.object({
    id: joi_1.default.number().min(1).required(),
});
/**
 * @description Joi schema for validating the createPost request body
 */
exports.createPostSchema = joi_1.default.object({
    author: joi_1.default.number().min(1).max(1000).required(),
    textContent: joi_1.default.string().min(1).max(1000),
    image: joi_1.default.string().min(1).max(1000),
});
