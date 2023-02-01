"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pollRoutes = void 0;
const express_1 = require("express");
const pollControllers_1 = require("../controllers/pollControllers");
exports.pollRoutes = (0, express_1.Router)();
/**
 * @description: Get a poll from the database
 */
exports.pollRoutes.get("/get", (_req, _res) => {
    _res.send((0, pollControllers_1.getPoll)(_req, _res));
});
/**
 * @description: Create a new poll
 */
exports.pollRoutes.post("/create", (_req, _res) => {
    const obj = (0, pollControllers_1.createPoll)(_req, _res);
    _res.send(obj);
});
