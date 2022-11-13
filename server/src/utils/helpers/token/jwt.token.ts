import * as jwt from 'jsonwebtoken';
import { IJwtTokenStructure } from './structure/jwt.token.structure';

export class JwtToken implements IJwtTokenStructure {
  generate(payload?: string | object) {
    return jwt.sign(payload, process.env.SECRET, {
      expiresIn: process.env.TIME_TOKEN,
    });
  }

  validate(token: string) {
    return jwt.verify(token, process.env.SECRET);
  }
}
