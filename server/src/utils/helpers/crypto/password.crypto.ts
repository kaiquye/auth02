import { IPasswordCryptoStructure } from './structure/password.crypto.structure';
import * as bcrypt from 'bcrypt';

export class PasswordCrypto implements IPasswordCryptoStructure {
  async salt(saltRounds: number): Promise<string> {
    return bcrypt.genSalt(saltRounds);
  }

  async hash(salt: string, password: string): Promise<string> {
    return bcrypt.hash(password, parseInt(salt));
  }

  async compare(password, hashPassword): Promise<boolean> {
    return bcrypt.compare(password, hashPassword);
  }
}
