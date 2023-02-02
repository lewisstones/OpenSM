"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComment = exports.getComment = void 0;
const staticTypes_1 = require("../db/types/staticTypes");
const commentValidators_1 = require("../validators/commentValidators");
const commentServices_1 = require("../services/commentServices");
const getComment = (req, res) => {
    const { error, value: validatedData } = commentValidators_1.idCommentSchema.validate(req.query);
    if (error) {
        throw error;
    }
    else {
        return staticTypes_1.staticComment;
    }
};
exports.getComment = getComment;
const createComment = (req, res) => {
    const { error, value: validatedData } = commentValidators_1.createCommentSchema.validate(req.body);
    if (error) {
        throw error;
    }
    else {
        return (0, commentServices_1.addCommentToDb)(validatedData);
    }
};
exports.createComment = createComment;
