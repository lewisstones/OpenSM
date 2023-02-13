"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRoutes = void 0;
const express_1 = require("express");
const commentControllers_1 = require("../controllers/commentControllers");
exports.commentRoutes = (0, express_1.Router)();
exports.commentRoutes.get("/get", (_req, _res) => {
    _res.send((0, commentControllers_1.getComment)(_req, _res));
});
exports.commentRoutes.post("/create", (_req, _res) => {
    const obj = (0, commentControllers_1.createComment)(_req, _res);
    _res.send(obj);
});
exports.commentRoutes.post("/like", (_req, _res) => {
    _res.send((0, commentControllers_1.likeComment)(_req, _res));
});
