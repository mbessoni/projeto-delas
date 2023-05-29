const empreendedoras = require("../models/empreendedoras.js");

class EmpreendedorasController {

    static getAllEmpreendedoras = (req, res) => {
        empreendedoras.find((err, empreendedoras) => {
            res.status(200).json(empreendedoras);
        })
    }
    
    static createEmpreendedoras = (req, res) => {
        let empreendedoras = new empreendedoras(req.body);
    
        empreendedora.save((err) => {
            if (err) {
                res.status(500).send({ mensage: `${err.message} - falha ao cadastrar empreendedora` })
            } else {
                res.status(201).send(empreendedora.toJSON())
            }
        })
    };
};


module.exports = EmpreendedorasController;


