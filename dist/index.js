"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postRoutes_1 = require("./routes/postRoutes");
// initialise express application
const app = (0, express_1.default)();
// define the port
const port = 3000;
// api name
const apiName = "OpenSM";
// routes
app.use("/", postRoutes_1.postRoutes);
app.listen(port, () => {
    console.log(`${apiName} listening on port ${port}`);
});
exports.default = app;
