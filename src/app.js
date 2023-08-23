require('dotenv').config()

const express = require("express")
const router = require('./router/router')
const cors = require('cors')
require('./config/db')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use("/", router)

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})    