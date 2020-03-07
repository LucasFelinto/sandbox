import mongoose, { Mongoose, mongo } from 'mongoose';
import bcrypt from 'bcryptjs';
//import Vehicle from './Vehicle/';

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  cpf: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true,
  },
  veiculos: [],
});


const AlunoSchema = new mongoose.Schema({
  matricula: {
    type: String,
    required: true,
    unique: true,
  },
  turma: {
    type: String,
    required: true
  }
});

const FuncionarioSchema = new mongoose.Schema({
  cargo: {
    type: String,
    required: true,
  },
  setor: {
    type: String,
    required: true,
  },
  siape: {
    type: String,
    required: true,
    unique: true,
  },
});

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;

  next();
});


AlunoSchema.add(UserSchema);
FuncionarioSchema.add(UserSchema);


export default {
  Aluno: mongoose.model('Aluno', AlunoSchema),
  Funcionario: mongoose.model('Funcionario', FuncionarioSchema),
};
