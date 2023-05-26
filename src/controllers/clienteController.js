const cliente = require ("../models/cliente.js");

const getAllClientes = (req, res) => {

    clientes.find((err, clientes) => {
        res.status(200).json(clientes);
    })
};

const createClientes = (req, res) => {
let clientes = new clientes(req.body);
    
    cliente.save((err) => {
        if(err) {
            res.status(500).send({mensage: `${err.message} - falha ao cadastrar cliente`})
        } else {
            res.status(201).send(cliente.toJSON())
        }
    })
    };

module.exports = {
    getAllClientes,
    createClientes
}
