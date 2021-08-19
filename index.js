const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()
require('./src/database')

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(require('./src/routes/Cliente.routes'))

app.listen(PORT, ()=> {
    console.log(`Running on ${PORT}`)
})