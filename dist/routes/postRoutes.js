"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoutes = void 0;
const express_1 = require("express");
const postControllers_1 = require("../controllers/postControllers");
exports.postRoutes = (0, express_1.Router)();
exports.postRoutes.get("/post", (_req, _res) => {
    _res.send((0, postControllers_1.getPost)(_req, _res));
});
exports.postRoutes.post("/post", (_req, _res) => {
    const obj = (0, postControllers_1.createPost)(_req, _res);
    _res.send(obj);
});
