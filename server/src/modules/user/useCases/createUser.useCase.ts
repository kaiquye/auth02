import { IUseCase } from './structure/useCase.adapter';
import { Result } from '../../../utils/error/error.structure';
import { UserEntity } from '../entity/user.entity';
import { IProviderDatabase } from '../../../database/provider/structure/IApplicationRepositorys.structure';

export class CreateUserUseCase extends IUseCase<{}, any> {
  constructor(private repository: IProviderDatabase) {
    super();
  }

  async execute(data): Promise<Result<UserEntity>> {
    try {
      const created = await this.repository.userRep.save({
        last_name: 'tested',
        fist_name: 'tested',
        email: 'assdsd',
        password: 'asdas',
      });

      const user = await this.repository.userRep.exists({
        last_name: 'tested',
        fist_name: 'tested',
        email: 'asdsd',
        password: 'asdas',
      });

      console.log(user);

      return undefined;
    } catch (e) {
      console.log(e);
    }
  }
}
