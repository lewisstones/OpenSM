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
exports.addUserToDb = exports.createUserService = exports.getUserService = void 0;
const staticTypes_1 = require("../db/types/staticTypes");
const userDBActions_1 = require("../db/userDBActions");
/**
 * @description Get a user from the database
 * @param id
 * @returns
 */
const getUserService = (id) => {
    // -- business logic here --
    // - permissions
    // - blocked / banned / suspended
    return (0, userDBActions_1.getUserDBAction)(id);
};
exports.getUserService = getUserService;
const createUserService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    // -- business logic here --
    // - permissions
    // - blocked / banned / suspended
    return yield (0, userDBActions_1.createUserDBAction)(body);
});
exports.createUserService = createUserService;
/**
 * @description Add a user to the database
 * @param post
 * @returns
 */
const addUserToDb = (post) => {
    return staticTypes_1.staticUser;
};
exports.addUserToDb = addUserToDb;
