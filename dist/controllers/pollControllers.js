"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPollOption = exports.voteOnPoll = exports.createPoll = exports.getPoll = void 0;
const pollValidators_1 = require("../validators/pollValidators");
const staticTypes_1 = require("../db/types/staticTypes");
const pollServices_1 = require("../services/pollServices");
/**
 * @description Get a poll
 * @param req
 * @param res
 * @returns
 */
const getPoll = (req, res) => {
    const validatedData = pollValidators_1.getPollSchema.validate(req.query);
    if (validatedData.error) {
        throw validatedData.error;
    }
    else {
        return staticTypes_1.staticPoll;
    }
};
exports.getPoll = getPoll;
/**
 * @description Create a new poll
 * @param req
 * @param res
 * @returns
 */
const createPoll = (req, res) => {
    const validatedData = pollValidators_1.createPollSchema.validate(req.body);
    if (validatedData.error) {
        throw validatedData.error;
    }
    else {
        return (0, pollServices_1.addPollToDb)(validatedData.value);
    }
};
exports.createPoll = createPoll;
/**
 * @description Vote on a poll - should act as unvote if already voted
 * @param req
 * @param res
 * @returns
 */
const voteOnPoll = (req, res) => {
    const validatedData = pollValidators_1.voteOnPollSchema.validate(req.body);
    if (validatedData.error) {
        throw validatedData.error;
    }
    else {
        // create vote record in db for poll option
        return true;
    }
};
exports.voteOnPoll = voteOnPoll;
/**
 * @description Create a new poll option
 * @param req
 * @param res
 * @returns
 */
const createPollOption = (req, res) => {
    const validatedData = pollValidators_1.createPollOptionSchema.validate(req.body);
    if (validatedData.error) {
        throw validatedData.error;
    }
    else {
        // create poll option record in db
        return staticTypes_1.staticPollOption;
    }
};
exports.createPollOption = createPollOption;
