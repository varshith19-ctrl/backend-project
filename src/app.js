import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()
app.use(cors())
app.use(express.json({
    limit:"16mb"
}))
app.use(express.urlencoded())
app.use(cookieParser())
app.use(express.static("public"))


import userRouter from "./routes/user.routes.js"
//standard practice to use router and cotroller 
app.use("/api/v1/user",userRouter)

export default app