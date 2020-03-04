import mongoose from 'mongoose';
import { config } from 'dotenv';


class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    config();
    this.mongoConnection = mongoose.connect(
      `mongodb://localhost:27017/test`,
      { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true },
    );
  }
}

export default new Database();
