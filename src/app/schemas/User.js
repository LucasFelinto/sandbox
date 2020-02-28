import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    require:true
  },
  email: {
    type: String,
    required: true
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
    required: true
  },
  type: {
    type: String,
    required: true,
  },
  veiculos: [],
});


export default mongoose.model("User", UserSchema);
