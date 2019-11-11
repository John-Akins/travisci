import express from "express"
import testController from "../controllers/test"
const router = express.Router()

router.post("/testhttp", testController.test)

export default router