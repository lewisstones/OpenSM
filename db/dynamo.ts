/**
 * @fileoverview DynamoDB client for user and profile tables
 */
import AWS from "aws-sdk";

AWS.config.update({
  region: process.env.AWS_REGION,
  //endpoint: process.env.DYNAMODB_ENDPOINT,
});

const dynamo = new AWS.DynamoDB.DocumentClient();

export default dynamo;
