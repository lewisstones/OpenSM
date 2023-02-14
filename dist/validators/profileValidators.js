"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProfileSchema = exports.idProfileSchema = void 0;
const joi_1 = __importDefault(require("joi"));
/**
 * @description Validate the params for get profile by id
 */
exports.idProfileSchema = joi_1.default.object({
    id: joi_1.default.number().min(1).required(),
});
/**
 * @description Validate the params for create profile endpoint
 */
exports.createProfileSchema = joi_1.default.object({
    user: joi_1.default.number().min(1).required(),
    handle: joi_1.default.string().min(3).max(30).required(),
    name: joi_1.default.string().min(3).max(30).required(),
});
