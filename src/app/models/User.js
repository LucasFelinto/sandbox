import mongoose from 'mongoose';

const UserScehma = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  matricula: {
    type: String,
  },
  telefone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  siape: {
    type: String,
  },
  setor: {
    type: String,
  },
  cargo: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },

});

export default mongoose.model('User', UserScehma);
