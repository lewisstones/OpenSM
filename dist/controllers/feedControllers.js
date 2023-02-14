"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPopularFeed = exports.getHomeFeed = void 0;
const profileValidators_1 = require("../validators/profileValidators");
const staticTypes_1 = require("../db/types/staticTypes");
/**
 * @description Get a feed of posts for a given profile
 * @param req
 * @param res
 * @returns
 */
const getHomeFeed = (req, res) => {
    const { error, value: validatedData } = profileValidators_1.idProfileSchema.validate(req.query);
    if (error) {
        throw error;
    }
    return [staticTypes_1.staticPost, staticTypes_1.staticPost, staticTypes_1.staticPost];
};
exports.getHomeFeed = getHomeFeed;
/**
 * @description Get a feed of popular posts
 * @param req
 * @param res
 * @returns
 */
const getPopularFeed = (req, res) => {
    const { error, value: validatedData } = profileValidators_1.idProfileSchema.validate(req.query);
    if (error) {
        throw error;
    }
    return [staticTypes_1.staticPost, staticTypes_1.staticPost, staticTypes_1.staticPost];
};
exports.getPopularFeed = getPopularFeed;
