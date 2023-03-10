import { baseUser, safeUser } from "./userTypes";
import { basePost } from "./postTypes";
import { baseProfile } from "./profileType";
import { basePoll, basePollOption } from "./pollTypes";
import { baseComment } from "./commentTypes";

export const staticUser: baseUser = {
  first_name: "Lewis",
  last_name: "Stones",
  email: "lewis@gmail.com",
};

export const staticSafeUser: safeUser = {
  id: 1,
  first_name: "John",
};

export const staticProfile: baseProfile = {
  user: staticSafeUser,
  handle: "lewis",
  name: "Lewis Stones",
  activity: "Daily",
  biography: "This is my biography.",
};

export const staticPollOption: basePollOption = {
  title: "Option 1",
  description: "This is option 1",
  votes: 0,
};

export const staticPoll: basePoll = {
  author: staticProfile,
  title: "Poll 1",
  description: "This is poll 1",
  disclaimer: "This is the disclaimer for poll 1",
  options: [staticPollOption, staticPollOption],
};

export const staticComment: baseComment = {
  author: staticProfile,
  textContent: "This is a comment",
  timeStamp: "12:00:00",
  liked: false,
};

export const staticCommentLiked: baseComment = {
  author: staticProfile,
  textContent: "This is a comment",
  timeStamp: "12:00:00",
  liked: true,
};

export const staticPost: basePost = {
  author: staticProfile,
  textContent:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  image: "",
  timeStamp: "2m",
  liked: false,
  commented: false,
  comments: [staticComment, staticComment],
};

export const staticPostLiked: basePost = {
  author: staticProfile,
  textContent:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  image: "",
  timeStamp: "2m",
  liked: true,
  commented: false,
  comments: [staticComment, staticComment],
};
