"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamo = void 0;
/**
 * @fileoverview DynamoDB client for user and profile tables
 */
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const dynamo = lib_dynamodb_1.DynamoDBDocumentClient.from(new client_dynamodb_1.DynamoDBClient({ region: process.env.AWS_REGION }));
exports.dynamo = dynamo;
