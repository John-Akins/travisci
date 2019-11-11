import express from "express"
import  { json } from "body-parser"

import authRoutes from "./routes/auth"
import testRoutes from "./routes/testhttp"

const app = express()

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization")
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS")
	next()
})

app.use(json())

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/test", testRoutes)

export default app