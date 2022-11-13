export interface IJwtTokenStructure {
  generate(payload?: string | object);
  validate(jwt: string);
}
