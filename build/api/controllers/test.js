"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../db"));

var testController = {};

testController.test = function (req, res) {
  var query = 'SELECT * FROM users';

  _db["default"].query(query).then(function () {
    res.status(200).json({
      status: "success"
    });
  })["catch"](function (error) {
    console.log("error:: :::");
    console.log(error);
    res.status(500).json({
      status: "error",
      error: "Internal server error "
    });
  });
};

var _default = testController;
exports["default"] = _default;
//# sourceMappingURL=test.js.map