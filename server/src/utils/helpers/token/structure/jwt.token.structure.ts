export interface IJwtTokenStructure {
  generate(payload?: string | object);
  generateRefreshToken(payload?: string | object);
  validate(jwt: string);
  validateRefreshToken(jwt: string);
}
