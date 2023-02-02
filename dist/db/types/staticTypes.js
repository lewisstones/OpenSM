"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staticPostLiked = exports.staticPost = exports.staticComment = exports.staticPoll = exports.staticPollOption = exports.staticProfile = void 0;
exports.staticProfile = {
    handle: "lewis",
    name: "Lewis Stones",
    activity: "Daily",
    biography: "This is my biography.",
};
exports.staticPollOption = {
    title: "Option 1",
    description: "This is option 1",
    votes: 0,
};
exports.staticPoll = {
    author: exports.staticProfile,
    title: "Poll 1",
    description: "This is poll 1",
    disclaimer: "This is the disclaimer for poll 1",
    options: [exports.staticPollOption, exports.staticPollOption],
};
exports.staticComment = {
    author: exports.staticProfile,
    textContent: "This is a comment",
    timeStamp: "12:00:00",
};
exports.staticPost = {
    author: exports.staticProfile,
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    image: "",
    timeStamp: "2m",
    liked: false,
    commented: false,
    comments: [exports.staticComment, exports.staticComment],
};
exports.staticPostLiked = {
    author: exports.staticProfile,
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    image: "",
    timeStamp: "2m",
    liked: true,
    commented: false,
    comments: [exports.staticComment, exports.staticComment],
};
