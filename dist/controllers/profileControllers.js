"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProfile = exports.getProfile = void 0;
const profileValidators_1 = require("../validators/profileValidators");
const staticTypes_1 = require("../db/types/staticTypes");
const profileServices_1 = require("../services/profileServices");
/**
 * @description Get a profile
 * @param req
 * @param res
 * @returns
 */
const getProfile = (req, res) => {
    const { error, value: validatedData } = profileValidators_1.idProfileSchema.validate(req.query);
    if (error) {
        throw error;
    }
    return staticTypes_1.staticProfile;
};
exports.getProfile = getProfile;
/**
 * @description Create a new profile
 * @param req
 * @param res
 * @returns
 */
const createProfile = (req, res) => {
    const { error, value: validatedData } = profileValidators_1.createProfileSchema.validate(req.body);
    if (error) {
        throw error;
    }
    else {
        return (0, profileServices_1.addProfileToDb)(validatedData);
    }
};
exports.createProfile = createProfile;
