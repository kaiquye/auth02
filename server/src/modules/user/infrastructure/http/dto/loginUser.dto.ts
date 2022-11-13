import { IDtoEntityStructure } from './structure/dto.entity.structure';
import { IsEmail, IsString, validateOrReject } from 'class-validator';

export class LoginUserDto implements IDtoEntityStructure {
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  password: string;

  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }

  public isValid() {
    return validateOrReject(this);
  }
}
