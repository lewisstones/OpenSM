"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
exports.userRoutes = (0, express_1.Router)();
/**
 * @description: Get a user from the database
 */
exports.userRoutes.get("/get", (_req, _res) => {
    _res.send((0, userControllers_1.getUser)(_req, _res));
});
/**
 * @description: Create a new user
 */
exports.userRoutes.post("/create", (_req, _res) => {
    const obj = (0, userControllers_1.createUser)(_req, _res);
    _res.send(obj);
});
/**
 * @description: Edit a user
 */
exports.userRoutes.post("/edit", (_req, _res) => {
    _res.send("edit");
});
