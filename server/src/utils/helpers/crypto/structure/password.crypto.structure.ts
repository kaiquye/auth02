export interface IPasswordCryptoStructure {
  salt(saltRounds: number): Promise<string>;
  hash(salt: string, password: string): Promise<string>;
  compare(password, hashPassword): Promise<boolean>;
}
