import { Rep } from '../../../../../database/provider/repository/repository';
import { UserEntity } from '../../../entity/user.entity';

export abstract class IUserRep extends Rep<UserEntity> {}
