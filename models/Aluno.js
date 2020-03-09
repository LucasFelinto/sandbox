const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Aluno = new Schema({
    nome: {
        type: String,
        require:true
    },

    email: {
        type: String,
        required: true
    },

    turma: {
        type: String,
        required: true
    },

    matricula: {
        type: String,
        required: true
    },

    cpf: {
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

mongoose.model("alunos",Aluno);