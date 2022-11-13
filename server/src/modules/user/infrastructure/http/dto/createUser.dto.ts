import { validateOrReject, IsString, IsOptional, IsEmail } from 'class-validator';
import { IDtoEntityStructure } from './structure/dto.entity.structure';
import { UserEntity } from '../../../entity/user.entity';

export class Post implements IDtoEntityStructure, UserEntity {
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  fist_name: string;
  @IsString()
  @IsOptional()
  last_name?: string;
  @IsString()
  password: string;

  constructor({ fist_name, password, email, last_name = undefined }) {
    this.email = email;
    this.fist_name = fist_name;
    this.password = password;
    this.last_name = last_name;
  }

  public isValid() {
    return validateOrReject(this);
  }
}
