import { Rep } from '../../../../../database/provider/repository/repository';
import { UserEntity } from '../../../domain/user.entity';

export abstract class IUserRep extends Rep<UserEntity> {}
