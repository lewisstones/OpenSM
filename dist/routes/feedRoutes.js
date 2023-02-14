"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedRoutes = void 0;
const express_1 = require("express");
const feedControllers_1 = require("../controllers/feedControllers");
exports.feedRoutes = (0, express_1.Router)();
/**
 * @description: Get a feed of posts for a given profile
 */
exports.feedRoutes.get("/home", (_req, _res) => {
    _res.send((0, feedControllers_1.getHomeFeed)(_req, _res));
});
/**
 * @description: Get a feed of popular posts
 */
exports.feedRoutes.get("/popular", (_req, _res) => {
    _res.send((0, feedControllers_1.getPopularFeed)(_req, _res));
});
