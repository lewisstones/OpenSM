import { v4 } from "uuid";
import { dynamo } from "./dynamo";
import { PutCommand, GetCommand } from "@aws-sdk/lib-dynamodb";
import { baseProfile, createProfile } from "./types/profileType";

export const getProfileDBAction = async (id: string): Promise<baseProfile> => {
  try {
    const command = new GetCommand({
      TableName: "ProfileTable",
      Key: {
        id: id,
      },
    });
    const result = await dynamo.send(command);
    return result.Item as baseProfile;
  } catch (dbError) {
    throw dbError;
  }
};

export const createProfileDBAction = async (body: baseProfile): Promise<baseProfile> => {
  const { user, handle } = body;

  const params = {
    id: v4(),
    user: user,
    handle: handle,
    activity: "Daily",
  };

  const command = new PutCommand({
    TableName: "ProfileTable",
    Item: params,
  });

  try {
    await dynamo.send(command);
    return params;
  } catch (dbError) {
    throw dbError;
  }
};
