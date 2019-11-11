import express from "express"
import inputValidator from "../middleware/input-validator"
import testController from "../controllers/test"

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
/*
router.post("/testhttp", (req, res) => {
    console.log(req.body)
    return res.status(422).json(req.body)
})
*/


//inputValidator.createUser, testController.createUser
//router.post("/testhttp", testController.test)
router.post("/testhttp", testController.test)
export default router