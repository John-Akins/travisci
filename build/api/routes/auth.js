"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("../middleware/auth"));

var _auth2 = _interopRequireDefault(require("../controllers/auth"));

var _inputValidator = _interopRequireDefault(require("../middleware/input-validator"));

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


router.post("/signin", _auth["default"].adminOnly, _inputValidator["default"].signin, _auth2["default"].signin); //router.post("/signin", inputValidator.signin, authController.signin)

/**
* @api {post} /api/auth/create-user
* @apiName Create user
* @apiPermission admin
* @apiGroup Auth
*
* @apiParam  {String} [firstName] Firstname
* @apiParam  {String} [lastName] Lastname
* @apiParam  {String} [email] Email
* @apiParam  {String} [address] Address
* @apiParam  {String} [password] Password
* @apiParam  {String} [gender] Gender
* @apiParam  {String} [jobRole] JobRole
* @apiParam  {String} [department] Department
* @apiParam  {Boolean} [isAdmin] isAdmin
*
* @apiSuccess (200) {Object} mixed `Response` object
*/

router.post("/create-user", _auth["default"].adminOnly, _inputValidator["default"].createUser, _auth2["default"].createUser);
module.exports = router;
//# sourceMappingURL=auth.js.map