export interface IJwtTokenStructure {
  generate(payload?: string);
  validate(jwt: string);
}
