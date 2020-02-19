import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb+srv://sandbox:sandbox@cluster0-lcntc.mongodb.net/test?retryWrites=true&w=majority',
      { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true }
    )
  }
}

export default new Database();
