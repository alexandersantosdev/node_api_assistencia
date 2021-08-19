const express = require('express')
const app = express()

require('dotenv').config()
require('./src/database')

const PORT = process.env.PORT

app.use(express.json())
app.use(require('./src/routes/Cliente.routes'))

app.listen(PORT, ()=> {
    console.log(`Running on ${PORT}`)
})