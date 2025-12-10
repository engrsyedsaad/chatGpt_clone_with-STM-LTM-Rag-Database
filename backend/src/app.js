const express  =  require("express")
const cookieParser = require("cookie-parser")
const userRoutes = require("./routes/user.routes")
const chatRoutes = require("../src/routes/chat.routes")
const cros = require("cors")


const app = express()

app.use(cros({
    origin:["http://localhost:5173"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",userRoutes)
app.use("/api",chatRoutes)

module.exports = app
