"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _inputValidator = _interopRequireDefault(require("../middleware/input-validator"));

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

/*
router.post("/testhttp", (req, res) => {
    console.log(req.body)
    return res.status(422).json(req.body)
})
*/
//inputValidator.createUser, testController.createUser
//router.post("/testhttp", testController.test)


router.post("/testhttp", _test["default"].test);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=testhttp.js.map