"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = exports.createUserServerless = exports.getUserServerless = void 0;
const userValidators_1 = require("../validators/userValidators");
const staticTypes_1 = require("../db/types/staticTypes");
const userServices_1 = require("../services/userServices");
/**
 * @description Calls the operations to get a user by id - serverless example
 * @param event
 * @returns
 */
const getUserServerless = (event) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate the request - id should be present and id should be a string
    const { error, value: validatedData } = userValidators_1.idUserSchema.validate(event.pathParameters);
    if (error) {
        throw error;
    }
    else {
        // Call the service
        const user = yield (0, userServices_1.getUserService)(validatedData.id);
        if (!user) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "User not found" }),
            };
        }
        return {
            statusCode: 200,
            body: JSON.stringify(user),
        };
    }
});
exports.getUserServerless = getUserServerless;
const createUserServerless = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value: validatedData } = userValidators_1.createUserSchema.validate(JSON.parse(event.body));
    if (error) {
        throw error;
    }
    else {
        const user = yield (0, userServices_1.createUserService)(validatedData);
        if (!user) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "User creation failed" }),
            };
        }
        return {
            statusCode: 200,
            body: JSON.stringify(user),
        };
    }
});
exports.createUserServerless = createUserServerless;
/**
 * @description Calls the operations to get a user by id
 * @param req
 * @param res
 * @returns
 */
const getUser = (req, res) => {
    const { error, value: validatedData } = userValidators_1.idUserSchema.validate(req.query);
    if (error) {
        throw error;
    }
    else {
        return staticTypes_1.staticUser;
    }
};
exports.getUser = getUser;
/**
 * @description Calls the operations to create a new user
 * @param req
 * @param res
 * @returns
 */
const createUser = (req, res) => {
    const { error, value: validatedData } = userValidators_1.createUserSchema.validate(req.body);
    if (error) {
        throw error;
    }
    else {
        return staticTypes_1.staticUser;
    }
};
exports.createUser = createUser;
