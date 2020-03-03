import User from '../schemas/User';

class StudentController {
  async store(req, res) {
    const {
      nome,
      cpf,
      email,
      telefone,
      matricula,
      turma,
      senha,
    } = req.body;


    try {
      if (await User.Aluno.findOne({ matricula })) {
        return res.status(400).send({ error: 'Usuario ja existe' });
      }

      const user = await User.Aluno.create({
        nome,
        cpf,
        email,
        telefone,
        matricula,
        turma,
        senha,
      });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).send({ error: 'Falha ao registrar' });
    }
  }
}

export default new StudentController();
