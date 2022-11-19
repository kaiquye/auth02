import { IUseCase } from '../structure/useCase.structures';
import { Result } from '../../../../utils/error/error.structure';
import { UserEntity } from '../../domain/user.entity';
import { IProviderDatabase } from '../../../../database/provider/structure/IApplicationRepositorys.structure';
import { IPasswordCryptoStructure } from '../../../../utils/helpers/crypto/structure/password.crypto.structure';

export class CreateUserUseCase extends IUseCase<UserEntity, Promise<Result<UserEntity>>> {
  private readonly userAlready = 'informed email already registered';
  private readonly userCreated = 'user created successfully';

  constructor(
    private readonly repository: IProviderDatabase,
    private readonly passwordCrypto: IPasswordCryptoStructure,
  ) {
    super();
  }

  async execute(data: UserEntity): Promise<Result<UserEntity>> {
    try {
      console.log(data);
      const email = await this.repository.user.exists({ email: data.email });

      if (email[0]) {
        return this.fail(409, this.userAlready);
      }

      const salt = await this.passwordCrypto.salt(100);

      const passwordHash = await this.passwordCrypto.hash(salt, data.password);

      const user = Object.assign(data, { password: passwordHash });

      await this.repository.user.save(user);

      data.password = undefined;
      return this.success<UserEntity>(201, this.userCreated, data);
    } catch (error) {
      console.log(error);
      return this.fail(500, this.msgInternalError);
    }
  }
}
