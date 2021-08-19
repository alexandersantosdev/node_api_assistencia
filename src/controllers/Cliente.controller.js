const Cliente = require('../models/Cliente.model')

module.exports = {
    
    async getAll (req, res) {
        const lista = await Cliente.find({})
        res.status(200).json({"clientes":lista})
    },

    async add (req, res){
        const cliente = await Cliente.create(req.body)
        res.status(201).json(cliente)
    },

    async deleteOne (req, res){
        const {id} = req.body
        try {
            await Cliente.findByIdAndDelete(id)
            res.status(204).json({})
        } catch (error) {
            res.status(400).json({"error":`error ${error}`})
        }

        res.status(400).json({"error":"cliente não encontrado"})
    }

}