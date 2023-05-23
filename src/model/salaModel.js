function listarSa1as() {
    return [
{
    "_id": {
        "$oid": "643ece43ea11e6e5be421f1B"
    },
    "nome": "Guerreiros da InfoCimol",
    "tipo": "publica"
},{
    "_id": {
        "$oid": "643ece43ea11e6e5be421f1B"
    },
    "nome": "Só os confirmados da INFO",
    "tipo": "privada",
    "chave": "at8q4haw"
},{
    "_id": {
        "$oid": "643ece43ea11e6e5be421f1B"
    },
    "nome": "Guerreiros da INFO",
    "tipo": "publico",

    }];
}

const db = require("./db")
function listarSalas() {
    return db.findAll("salas");
}

module.exports = {listarSalas}
