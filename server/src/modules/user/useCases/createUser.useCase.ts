import { IUseCase } from './structure/useCase.adapter';
import { Result } from '../../../utils/error/error.structure';
import { UserEntity } from '../entity/user.entity';
import { IProviderDatabase } from '../../../database/provider/structure/IApplicationRepositorys.structure';

export class CreateUserUseCase extends IUseCase<UserEntity, any> {
  private readonly userAlready = 'informed email already registered';
  private readonly userCreated = 'user created successfully';

  constructor(private repository: IProviderDatabase) {
    super();
  }

  async execute(data: UserEntity): Promise<Result<UserEntity>> {
    try {
      const email = await this.repository.user.exists({ email: data.email });

      if (email) {
        return this.fail(409, this.userAlready);
      }

      data.password = undefined;
      return this.success<UserEntity>(201, this.userCreated, data);
    } catch (e) {
      console.log(e);
    }
  }
}
