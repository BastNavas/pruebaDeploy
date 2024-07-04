import express from "express";
import operation from "./operation.js"

const app=express()
app.use(operation)

export default app