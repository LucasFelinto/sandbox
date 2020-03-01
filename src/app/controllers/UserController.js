import User from '../schemas/User';

class UserController {
  async store(req, res) {
    const {
      nome,
      cpf,
      email,
      telefone,
      type,
      matricula,
      turma,
      siape,
      setor,
      cargo,
      senha,
    } = req.body;

    if (type === 'aluno') {
      const user = await User.Aluno.create({
        nome,
        cpf,
        email,
        telefone,
        type,
        matricula,
        turma,
        senha,
      });
      return res.json(user);
    }

    if (type === 'funcionario') {
      const user = await User.Funcionario.create({
        nome,
        cpf,
        email,
        telefone,
        type,
        matricula,
        siape,
        setor,
        cargo,
        senha,
      });
      return res.json(user);
    }
  }
}

export default new UserController();
