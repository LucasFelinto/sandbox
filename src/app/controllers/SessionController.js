import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../schemas/User';

class SessionController {
  async store(req, res) {
    const { type } = req.params;
    const { matricula, siape, senha } = req.body;

    const users = {
      async student() {
        const student = await User.Aluno.findOne({ matricula });

        console.log("MATRICULA", matricula);
        console.log("ALUNO", student);
        
        if (!student) {
          return res.status(401).json({ error: 'Usuário não encotrado' });
        }

        if (!await bcrypt.compare(senha, student.senha)) {
          return res.status(400).json({ error: 'Senha invalida' });
        }

        const { id, nome } = student; 

        return {
          user: {
            id,
            nome,
            matricula,
          },
          token: jwt.sign({ id }, 'ebbf27b2510115c1fcf05b250762a924', {
            expiresIn: '1d'
          })
        };
      }
    }

    const data = await users[type]();
    return res.json(data);
  }
}

export default new SessionController();