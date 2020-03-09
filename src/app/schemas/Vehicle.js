import mongoose, { Mongoose, mongo } from 'mongoose';

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
export default {
  Moto: mongoose.model('Moto', MotoSchema),
  Carro: mongoose.model('Carro', CarroSchema),
  Bicicleta: mongoose.model('Bicicleta', BicicletaSchema),
};
