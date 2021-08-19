const express = require('express')
const router = express.Router()

const {getAll, add, deleteOne} = require('../controllers/Cliente.controller')

router.get('/clientes', getAll)
router.post('/clientes', add)
router.delete('/clientes', deleteOne)

module.exports = router