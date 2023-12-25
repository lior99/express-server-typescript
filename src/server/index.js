"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var helpers_1 = require("../helpers");
var PORT = 5500;
var app = express();
app.get('/api/heartbeat', function (req, res) {
    res.send('OK! alive!');
});
app.get('/api/dummyresult', function (req, resp) {
    var jsonOject = (0, helpers_1.default)();
    resp.setHeader('content-type', 'application/json');
    resp.status(200).send(jsonOject);
});
app.listen(PORT, function () {
    console.log("listening on port ".concat(PORT));
});
