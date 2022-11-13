import { IUseCase } from './structure/useCase.adapter';
import { Result } from '../../../utils/error/error.structure';
import { UserEntity } from '../entity/user.entity';

export class CreateUserUseCase extends IUseCase<{}, any> {
  async execute(data): Promise<Result<UserEntity>> {}
}
