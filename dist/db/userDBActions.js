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
const uuid_1 = __importDefault(require("uuid"));
const userDynamo_1 = __importDefault(require("./userDynamo"));
/**
 * @description Get a user from the database
 * @param event
 * @returns
 */
const getUserDBAction = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = event.pathParameters) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const result = yield userDynamo_1.default
            .get({
            TableName: "Users",
            Key: {
                id: id,
            },
        })
            .promise();
        return {
            statusCode: 200,
            body: JSON.stringify(result.Item),
        };
    }
    catch (dbError) {
        return {
            statusCode: 500,
            body: JSON.stringify(dbError),
        };
    }
});
exports.getUserDBAction = getUserDBAction;
/**
 * @description Create a new user in the database
 * @param event
 * @returns
 */
const createUserDBAction = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, last_name, email } = JSON.parse(event.body);
    const params = {
        id: uuid_1.default.v4(),
        first_name,
        last_name,
        email,
    };
    try {
        yield userDynamo_1.default
            .put({
            TableName: "Users",
            Item: params,
        })
            .promise();
        return {
            statusCode: 200,
            body: JSON.stringify(params),
        };
    }
    catch (dbError) {
        return {
            statusCode: 500,
            body: JSON.stringify(dbError),
        };
    }
});
exports.createUserDBAction = createUserDBAction;
