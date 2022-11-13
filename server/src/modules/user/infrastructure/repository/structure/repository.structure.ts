import { Rep } from '../../../../../database/provider/repository/repository';
import { UserEntity } from '../../../entity/user.entity';

export abstract class UserRepAbstract extends Rep<UserEntity> {}
