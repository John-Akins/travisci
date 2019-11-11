const express = require("express")
const  { json } = require("body-parser")
const testRoutes = require("./routes/testhttp")

/**
import express from "express"
import  { json } from "body-parser"

import testRoutes from "./routes/testhttp"

 */

const app = express()

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization")
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS")
	next()
})

app.use(json())

app.use("/api/v1/test", testRoutes)

module.exports = app