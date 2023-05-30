const clientes = require("../models/cliente.js");

class ClientesController {

    static getAllClientes = (req, res) => {

        clientes.find((err, clientes) => {
            res.status(200).json(clientes);
        })
    }

    static createClientes = (req, res) => {
        let cliente = new clientes(req.body);

        cliente.save((err) => {
            if (err) {
                res.status(500).send({ mensage: `${err.message} - falha ao cadastrar cliente` })
            } else {
                res.status(201).send(cliente.toJSON())
            }
        })
    };
    static updateClientes = (req,res) => {
        const id = req.params.id;

        clientes.findByIdAndUpedate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Cliente atualizado com sucesso'})
            } else{
                res.status(500).send({message: err.message})
            }
        })
    } 

    static deleteClientes = (req, res) =>{
        const id = req.params.id;

        clientes.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Cliente removido com sucesso'})
            } else{
                res.status(500).send({message: err.message})
            }
        })
    } 
};


module.exports = ClientesController
