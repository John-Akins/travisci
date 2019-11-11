"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var bcrypt = require("bcrypt");

var jwt = require("jsonwebtoken");

var _require = require("express-validator"),
    validationResult = _require.validationResult;

var db = require("../db");

var testController = {};

testController.test = function (req, res) {
  console.log("req " + req);
  res.status(200).json({
    response: "hiya"
  });
};

var _default = testController;
exports["default"] = _default;
//# sourceMappingURL=test.js.map