import User from '../schemas/User';

class UserController {
  async store(req, res) {
    const { type } = req.params;

    const users = {
      async student() {
        const student = await User.Aluno.create(req.body);
        return student;
      },
      async employee() {
        const employee = await User.Funcionario.create(req.body);
        return employee;
      }
    }; 

    const data = await users[type]();

    return res.json(data);
  }
}

export default new UserController();
