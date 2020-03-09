import jwt from 'jsonwebtoken';
import { promisify } from 'util';

export default async (req, res, next) => {
  const atuhHeader = req.headers.authorization;

  if (!atuhHeader) {
    return res.status(401).json({ error: 'Token não enviado' });
  }

  const [, token] = atuhHeader.split(' ');
  
  try {
    const decoded = await promisify(jwt.verify)(token, 'ebbf27b2510115c1fcf05b250762a924');
    
    console.log(decoded);

    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalido" });
  }
}