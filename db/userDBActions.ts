import { v4 } from "uuid";
import dynamo from "./dynamo";
import { baseUser, createUser } from "../db/types/userTypes";

/**
 * @description Get a user from the database
 * @param event
 * @returns
 */
export const getUserDBAction = async (id: string) => {
  try {
    const result = await dynamo
      .get({
        TableName: "UserTable",
        Key: {
          id: id,
        },
      })
      .promise();
    return result.Item;
  } catch (dbError) {
    return dbError;
  }
};

/**
 * @description Create a new user in the database
 * @param event
 * @returns
 */
export const createUserDBAction = async (
  body: createUser
): Promise<baseUser> => {
  const { first_name, last_name, email } = body;

  const params = {
    id: v4(),
    first_name,
    last_name,
    email,
  };

  try {
    await dynamo
      .put({
        TableName: "UserTable",
        Item: params,
      })
      .promise();

    return params;
  } catch (dbError) {
    throw dbError;
  }
};
