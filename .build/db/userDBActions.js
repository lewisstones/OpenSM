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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserDBAction = exports.getUserDBAction = void 0;
const uuid_1 = require("uuid");
const dynamo_1 = __importDefault(require("./dynamo"));
/**
 * @description Get a user from the database
 * @param event
 * @returns
 */
const getUserDBAction = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield dynamo_1.default
            .get({
            TableName: "UserTable",
            Key: {
                id: id,
            },
        })
            .promise();
        return result.Item;
    }
    catch (dbError) {
        return dbError;
    }
});
exports.getUserDBAction = getUserDBAction;
/**
 * @description Create a new user in the database
 * @param event
 * @returns
 */
const createUserDBAction = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, last_name, email } = body;
    const params = {
        id: (0, uuid_1.v4)(),
        first_name,
        last_name,
        email,
    };
    try {
        yield dynamo_1.default
            .put({
            TableName: "UserTable",
            Item: params,
        })
            .promise();
        return params;
    }
    catch (dbError) {
        throw dbError;
    }
});
exports.createUserDBAction = createUserDBAction;
