/**
 * @fileoverview DynamoDB client for user and profile tables
 */
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dynamo = DynamoDBDocumentClient.from(
  new DynamoDBClient({
    region: "localhost",
    endpoint: "http://localhost:8000",
  })
);

export { dynamo };
