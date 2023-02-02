"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCommentSchema = exports.idCommentSchema = void 0;
const joi_1 = __importDefault(require("joi"));
/**
 * @description Validate the params for get comment by id
 */
exports.idCommentSchema = joi_1.default.object({
    id: joi_1.default.number().min(1).required(),
});
/**
 * @description Validate the createComment object
 */
exports.createCommentSchema = joi_1.default.object({
    author: joi_1.default.number().min(1).required(),
    postId: joi_1.default.number().min(1).required(),
    textContent: joi_1.default.string().min(1).max(1000).required(),
});
