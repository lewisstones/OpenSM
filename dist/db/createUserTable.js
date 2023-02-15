"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
aws_sdk_1.default.config.update({
    region: "eu-west-2",
    endpoint: "http://localhost:8000",
});
var dynamodb = new aws_sdk_1.default.DynamoDB();
var params = {
    TableName: "Users",
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH" }, //Partition key
    ],
    AttributeDefinitions: [{ AttributeName: "id", AttributeType: "N" }],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5,
    },
};
dynamodb.createTable(params, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    }
    else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
