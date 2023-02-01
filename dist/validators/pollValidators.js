"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPollSchema = exports.createPollOptionSchema = exports.getPollSchema = void 0;
const joi_1 = __importDefault(require("joi"));
/**
 * @description Schema for validating the request params for get poll
 */
exports.getPollSchema = joi_1.default.object({
    id: joi_1.default.number().min(1).required(),
});
/**
 * @description Schema for validating the request body for create poll option
 */
exports.createPollOptionSchema = joi_1.default.object({
    title: joi_1.default.string().min(1).max(1000).required(),
    description: joi_1.default.string().min(1).max(1000).required(),
    votes: joi_1.default.number().min(0).required(),
});
/**
 * @description Schema for validating the request body for create poll
 */
exports.createPollSchema = joi_1.default.object({
    author: joi_1.default.number().min(1).required(),
    title: joi_1.default.string().min(1).max(1000).required(),
    description: joi_1.default.string().min(1).max(1000).required(),
    disclaimer: joi_1.default.string().min(1).max(1000).required(),
    options: joi_1.default.array().items(exports.createPollOptionSchema).min(2).required(),
});
