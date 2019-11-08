const express = require("express")
const testCtrl = require("../controllers/test")

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

router.post("/testhttp", testCtrl.test)

module.exports = router