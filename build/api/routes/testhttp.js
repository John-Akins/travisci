"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _test = _interopRequireDefault(require("../controllers/test"));

var router = _express["default"].Router();
/**
* @api {post} /api/auth/signin
* @apiName User sign in
* @apiPermission admin,employee
* @apiGroup Auth
*
* @apiParam  {String} [email] Email
* @apiParam  {String} [password] Password
*
* @apiSuccess (200) {Object} mixed `User` object
*/


router.post("/testhttp", _test["default"].test);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=testhttp.js.map