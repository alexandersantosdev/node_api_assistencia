const mongoose = require('mongoose')

const { USER, PASSWORD, DATABASE } = process.env

const URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0.hkwnu.mongodb.net/${DATABASE}?retryWrites=true&w=majority`

const conn = mongoose.connect(
    URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log('Connected to database'))
    .catch(err => console.log(`Error connectiong to database: ${err}`))

module.exports = conn