import User from '../schemas/User';

class UserController {
  async store(req, res) {
    const { type } = req.params;
    const { matricula, siape } = req.body;
    
    const users = {
      async student() {
        const studentExists = await User.Aluno.findOne({ matricula });
        
        if (studentExists) {
          return res.status(400).json({ error: "Matricula ja cadastrada" });
        }
        
        const student = await User.Aluno.create(req.body);
        return student;
      },
      async employee() {
        const employeeExists = await User.Funcionario.findOne({ siape });

        if (employeeExists) {
          return res.status(400).json({ error: "Siape já cadastrado "});
        }

        const employee = await User.Funcionario.create(req.body);
        return employee;
      }
    }; 

    const data = await users[type]();

    return res.json(data);
  }
}

export default new UserController();
