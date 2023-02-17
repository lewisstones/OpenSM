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
exports.unsubscribeFromProfile = exports.subscribeToProfile = exports.createProfile = exports.getProfile = exports.createProfileServerless = exports.getProfileServerless = void 0;
const profileValidators_1 = require("../validators/profileValidators");
const staticTypes_1 = require("../db/types/staticTypes");
const profileServices_1 = require("../services/profileServices");
/**
 * @description Get a profile by id
 * @param event
 * @returns
 */
const getProfileServerless = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value: validatedData } = profileValidators_1.idProfileSchema.validate(event.pathParameters);
    if (error) {
        throw error;
    }
    else {
        // call service
        const profile = yield (0, profileServices_1.getProfileService)(validatedData.id);
        if (!profile) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "Profile not found" }),
            };
        }
        return {
            statusCode: 200,
            body: JSON.stringify(profile),
        };
    }
});
exports.getProfileServerless = getProfileServerless;
/**
 * @description Create a new profile
 * @param event
 * @returns
 */
const createProfileServerless = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value: validatedData } = profileValidators_1.createProfileSchema.validate(JSON.parse(event.body));
    if (error) {
        throw error;
    }
    else {
        const profile = yield (0, profileServices_1.createProfileService)(validatedData);
        if (!profile) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Profile creation failed" }),
            };
        }
        return {
            statusCode: 200,
            body: JSON.stringify(profile),
        };
    }
});
exports.createProfileServerless = createProfileServerless;
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
/**
 * @description Subscribe to a profile
 * @param req
 * @param res
 * @returns
 */
const subscribeToProfile = (req, res) => {
    const { error, value: validatedData } = profileValidators_1.idProfileSchema.validate(req.body);
    if (error) {
        throw error;
    }
    else {
        return true;
    }
};
exports.subscribeToProfile = subscribeToProfile;
/**
 * @description Unsubscribe from a profile
 * @param req
 * @param res
 * @returns
 */
const unsubscribeFromProfile = (req, res) => {
    const { error, value: validatedData } = profileValidators_1.idProfileSchema.validate(req.body);
    if (error) {
        throw error;
    }
    else {
        return true;
    }
};
exports.unsubscribeFromProfile = unsubscribeFromProfile;
