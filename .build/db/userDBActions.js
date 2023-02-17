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
exports.createUserDBAction = exports.getUserDBAction = void 0;
const uuid_1 = require("uuid");
const dynamo_1 = require("./dynamo");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
/**
 * @description Get a user from the database
 * @param event
 * @returns
 */
const getUserDBAction = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const command = new lib_dynamodb_1.GetCommand({
            TableName: "UserTable",
            Key: {
                id: id,
            },
        });
        const result = yield dynamo_1.dynamo.send(command);
        return result.Item;
    }
    catch (dbError) {
        throw dbError;
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
    const command = new lib_dynamodb_1.PutCommand({
        TableName: "UserTable",
        Item: params,
    });
    try {
        yield dynamo_1.dynamo.send(command);
        return params;
    }
    catch (dbError) {
        throw dbError;
    }
});
exports.createUserDBAction = createUserDBAction;
