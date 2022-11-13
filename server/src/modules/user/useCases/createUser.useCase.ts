import { IUseCase } from './structure/useCase.adapter';
import { Result } from '../../../utils/error/error.structure';
import { UserEntity } from '../entity/user.entity';
import { UserRep } from '../infrastructure/repository/repository';

export class CreateUserUseCase extends IUseCase<{}, any> {
  async execute(data): Promise<Result<UserEntity>> {
    try {
      const rep = new UserRep();

      const data = await rep.save({
        fist_name: 'tested',
        last_name: 'tested',
        email: 'tested',
        password: 'asda',
      });

      console.log(data);
      return undefined;
    } catch (e) {
      console.log(e);
    }
  }
}
