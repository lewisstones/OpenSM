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
exports.createProfileDBAction = exports.getProfileDBAction = void 0;
const uuid_1 = require("uuid");
const dynamo_1 = require("./dynamo");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const getProfileDBAction = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const command = new lib_dynamodb_1.GetCommand({
            TableName: "ProfileTable",
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
exports.getProfileDBAction = getProfileDBAction;
const createProfileDBAction = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, handle } = body;
    const params = {
        id: (0, uuid_1.v4)(),
        user: user,
        handle: handle,
        activity: "Daily",
    };
    const command = new lib_dynamodb_1.PutCommand({
        TableName: "ProfileTable",
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
exports.createProfileDBAction = createProfileDBAction;
