import mongoose, { Mongoose, mongo } from 'mongoose';
import bcrypt from 'bcryptjs';
//import Vehicle from './Vehicle/';

const MotoSchema = new mongoose.Schema({
  placa: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  cor: {
    type: String,
    required: true
  },
  ano: {
    type: Number,
    required: true
  },
});

const CarroSchema = new mongoose.Schema({
  placa: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  cor: {
    type: String,
    required: true
  },
  ano: {
    type: Number,
    required: true
  },
});

const BicicletaSchema = new mongoose.Schema({
  cor: {
    type: String,
    required: true
  },
  marca: {
    type: String,
    required: true
  }
});

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
  moto: {
    type: [MotoSchema],
    required: false,
    default: undefined,
  },
  carro: {
    type: [CarroSchema],
    required: false,
    default: undefined,
  },
  Bicicleta: {
    type: [BicicletaSchema],
    required: false,
    default: undefined,
  },
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
  Moto: mongoose.model('Moto', MotoSchema),
  Carro: mongoose.model('Carro', CarroSchema),
  Bicicleta: mongoose.model('Bicicleta', BicicletaSchema),
};
