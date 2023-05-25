const express = require("express");
const index = require("./routes/index");
const db = require("./config/dbConecct");
const app = express();

app.use(express.json());
app.use("/",index);

db.on("error", console.log.bind(console, 'Errod e conexão'))
db.once("open", ()=> {
    console.log('Conexão com o banco feita com sucesso')
});

module.exports = app;