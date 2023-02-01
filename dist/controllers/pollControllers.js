"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPoll = exports.getPoll = void 0;
const pollValidators_1 = require("../validators/pollValidators");
const staticTypes_1 = require("../db/types/staticTypes");
const pollServices_1 = require("../services/pollServices");
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
const createPoll = (req, res) => {
    const validatedData = pollValidators_1.createPollSchema.validate(req.body);
    if (validatedData.error) {
        throw validatedData.error;
    }
    else {
        (0, pollServices_1.addPollToDb)(validatedData.value);
        return staticTypes_1.staticPoll;
    }
};
exports.createPoll = createPoll;
