import { IJwtTokenStructure } from './structure/jwt.token.structure';

export class JwtToken implements IJwtTokenStructure {
  generate(payload?: string) {}

  validate(jwt: string) {}
}
