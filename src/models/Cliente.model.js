const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cliente = Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Cliente', Cliente)