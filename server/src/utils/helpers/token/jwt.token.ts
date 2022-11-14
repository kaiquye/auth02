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

  generateRefreshToken(payload?: string | object) {
    return jwt.sign(payload, process.env.SECRET_REFRESH_TOKEN, {
      expiresIn: process.env.TIME_TOKEN_REFRESH_TOKEN,
    });
  }

  validateRefreshToken(token: string) {
    return jwt.verify(token, process.env.SECRET_REFRESH_TOKEN);
  }
}
