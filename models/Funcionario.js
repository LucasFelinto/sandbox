const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Funcionario = new Schema({
    nome: {
        type:String,
        required: true
    },

    cpf: {
        type: Number,
        required: true
    },

    siape: {
        type: String,
        required: true
    },

    setor: {
        type: String,
        required: true
    },

    cargo: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    telefone: {
        type: Number,
        required: true
    },

    senha: {
        type: String,
        required: true
    }


})

mongoose.model("funcionarios",Funcionario)