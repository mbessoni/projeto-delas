const clientes = require("../models/cliente.js");

class ClientesController {

    static getAllClientes = (req, res) => {

        clientes.find((err, clientes) => {
            res.status(200).json(clientes);
        })
    }

    static createClientes = (req, res) => {
        let clientes = new clientes(req.body);

        cliente.save((err) => {
            if (err) {
                res.status(500).send({ mensage: `${err.message} - falha ao cadastrar cliente` })
            } else {
                res.status(201).send(clientes.toJSON())
            }
        })
    };
};


module.exports = ClientesController
