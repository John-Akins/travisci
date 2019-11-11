const express = require("express")
const auth = require("../middleware/auth.js")
const authCtrl = require("../controllers/auth")
const inputValidator = require("../middleware/input-validator")

const router = express.Router()

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

router.post("/signin", inputValidator.signin, authCtrl.signin)

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

router.post("/create-user", auth.adminOnly, inputValidator.createUser, authCtrl.createUser)

module.exports = router