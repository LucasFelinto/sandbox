import User from '../models/User';
import * as yup from 'yup';

class UserController {
  async store(req, res) {
    const { name } = req.body;

    return res.json({ name });
  }
}

export default new UserController();
