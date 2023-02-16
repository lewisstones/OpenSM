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
exports.addProfileToDb = exports.createProfileService = exports.getProfileService = void 0;
const staticTypes_1 = require("../db/types/staticTypes");
const userServices_1 = require("./userServices");
const profileDBActions_1 = require("../db/profileDBActions");
const getProfileService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, profileDBActions_1.getProfileDBAction)(id);
});
exports.getProfileService = getProfileService;
/**
 * @description: Create a new profile
 * @param body
 * @returns
 */
const createProfileService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, handle } = body;
    // get user from db
    const userObj = yield (0, userServices_1.getUserService)(user);
    if (userObj) {
        // create profile params
        const params = {
            user: userObj,
            handle: handle,
        };
        return yield (0, profileDBActions_1.createProfileDBAction)(params);
    }
    else {
        throw new Error("User not found");
    }
});
exports.createProfileService = createProfileService;
/**
 * @description Add a profile to the database
 * @param post
 * @returns
 */
const addProfileToDb = (post) => {
    return staticTypes_1.staticProfile;
};
exports.addProfileToDb = addProfileToDb;
