"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRoutes = void 0;
const express_1 = require("express");
const profileControllers_1 = require("../controllers/profileControllers");
exports.profileRoutes = (0, express_1.Router)();
/**
 * @description: Get a profile from the database
 */
exports.profileRoutes.get("/get", (_req, _res) => {
    _res.send((0, profileControllers_1.getProfile)(_req, _res));
});
/**
 * @description: Create a new profile
 */
exports.profileRoutes.post("/create", (_req, _res) => {
    const obj = (0, profileControllers_1.createProfile)(_req, _res);
    _res.send(obj);
});
