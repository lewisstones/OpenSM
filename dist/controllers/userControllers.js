"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = void 0;
const userValidators_1 = require("../validators/userValidators");
const staticTypes_1 = require("../db/types/staticTypes");
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
