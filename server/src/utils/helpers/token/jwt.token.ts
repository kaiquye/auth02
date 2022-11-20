import * as jwt from 'jsonwebtoken';
import { IJwtTokenStructure } from './structure/jwt.token.structure';

export class JwtToken implements IJwtTokenStructure {
  generate(payload?: string | object) {
    return jwt.sign(payload, 'process.env.SECRET', {
      expiresIn: '1000s',
    });
  }

  validate(token: string) {
    return jwt.verify(token, 'process.env.SECRET');
  }

  generateRefreshToken(payload?: string | object) {
    return jwt.sign(payload, 'process.env.SECRET_REFRESH_TOKEN', {
      expiresIn: '2000s',
    });
  }

  validateRefreshToken(token: string) {
    return jwt.verify(token, 'process.env.SECRET_REFRESH_TOKEN');
  }
}
