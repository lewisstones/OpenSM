"use strict";
const express = require("express");
const app = express();
const apiName = "OpenSS";
const port = 3000;
app.listen(port, () => {
    console.log(`${apiName} listening on port ${port}`);
});
