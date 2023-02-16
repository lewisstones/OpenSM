import { v4 } from "uuid";
import { dynamo } from "./dynamo";
import { PutCommand, GetCommand } from "@aws-sdk/lib-dynamodb";
import { baseUser, createUser } from "../db/types/userTypes";

/**
 * @description Get a user from the database
 * @param event
 * @returns
 */
export const getUserDBAction = async (id: string): Promise<baseUser> => {
  try {
    const command = new GetCommand({
      TableName: "UserTable",
      Key: {
        id: id,
      },
    });
    const result = await dynamo.send(command);
    return result.Item as baseUser;
  } catch (dbError) {
    throw dbError;
  }
};

/**
 * @description Create a new user in the database
 * @param event
 * @returns
 */
export const createUserDBAction = async (body: createUser): Promise<baseUser> => {
  const { first_name, last_name, email } = body;

  const params = {
    id: v4(),
    first_name,
    last_name,
    email,
  };

  const command = new PutCommand({
    TableName: "UserTable",
    Item: params,
  });

  try {
    await dynamo.send(command);
    return params;
  } catch (dbError) {
    throw dbError;
  }
};
