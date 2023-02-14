"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postRoutes_1 = require("./routes/postRoutes");
const pollRoutes_1 = require("./routes/pollRoutes");
const commentRoutes_1 = require("./routes/commentRoutes");
const profileRoutes_1 = require("./routes/profileRoutes");
const feedRoutes_1 = require("./routes/feedRoutes");
// initialise express application
const app = (0, express_1.default)();
// define the port
const port = 3000;
// api name
const apiName = "OpenSM";
// for request body parsing
app.use(express_1.default.json());
// routes
app.use("/post/", postRoutes_1.postRoutes);
app.use("/poll/", pollRoutes_1.pollRoutes);
app.use("/comment/", commentRoutes_1.commentRoutes);
app.use("/profile/", profileRoutes_1.profileRoutes);
app.use("/feed/", feedRoutes_1.feedRoutes);
app.listen(port, () => {
    console.log(`${apiName} listening on port ${port}`);
});
exports.default = app;
