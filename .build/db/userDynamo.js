"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @fileoverview DynamoDB client for user and profile tables
 */
const aws_sdk_1 = __importDefault(require("aws-sdk"));
aws_sdk_1.default.config.update({
    region: process.env.AWS_REGION,
    //endpoint: process.env.DYNAMODB_ENDPOINT,
});
const useDynamo = new aws_sdk_1.default.DynamoDB.DocumentClient();
exports.default = useDynamo;
