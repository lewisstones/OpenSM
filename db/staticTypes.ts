import { basePost } from "../db/postTypes";
import { baseProfile } from "../db/profileType";

export const staticProfile: baseProfile = {
  handle: "lewis",
  name: "Lewis Stones",
  activity: "Daily",
  biography: "This is my biography.",
};

export const staticPost: basePost = {
  author: staticProfile,
  textContent:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  image: "",
  timeStamp: "2m",
  liked: true,
  commented: false,
};
