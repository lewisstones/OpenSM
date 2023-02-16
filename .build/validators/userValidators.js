"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = exports.idUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
/**
 * @description Validate the params for get user by id
 */
exports.idUserSchema = joi_1.default.object({
    id: joi_1.default.string().required(),
});
/**
 * @description Validate the params for create user endpoint
 */
exports.createUserSchema = joi_1.default.object({
    first_name: joi_1.default.string().required(),
    last_name: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
});
