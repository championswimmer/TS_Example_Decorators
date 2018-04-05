"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.send("HELLO");
});
app.listen(3434, () => {
    console.log(`Started on http://localhost:3434`);
});
//# sourceMappingURL=server.js.map