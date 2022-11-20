import { UserEntity } from '../../../../domain/user.entity';
import { faker } from '@faker-js/faker';

export const UserMock = new UserEntity(
  faker.name.firstName(),
  faker.name.lastName(),
  'kaique@gmail.com',
  faker.random.numeric(),
);
