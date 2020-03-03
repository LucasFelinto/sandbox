import User from '../schemas/User';

class EmployeeControlle {
  async store(req, res) {
    const {
      nome,
      cpf,
      email,
      telefone,
      siape,
      setor,
      cargo,
      senha,
    } = req.body;

    try {
      if (await User.Funcionario.findOne({ siape })) {
        return res.status(400).send({ error: 'Usuario ja existe' });
      }


      const employee = await User.Funcionario.create({
        nome,
        cpf,
        email,
        telefone,
        matricula,
        siape,
        setor,
        cargo,
        senha,
      });

      return res.status(201).json(employee);
    } catch (error) {
      return res.status(400).send({ error: 'Falha ao registrar' });
    }
  }
}

export default new EmployeeControlle();
