import { ILoginUserReq, ILoginUserRes, IUseCase } from '../structure/useCase.structures';
import { Result } from '../../../../utils/error/error.structure';
import { IProviderDatabase } from '../../../../database/provider/structure/IApplicationRepositorys.structure';
import { IPasswordCryptoStructure } from '../../../../utils/helpers/crypto/structure/password.crypto.structure';

export class LoginUserUseCase extends IUseCase<ILoginUserReq, Result<ILoginUserRes>> {
  private readonly logged = 'user logged in successfully';
  private readonly userNotFound = 'informed user was not found in the database';

  constructor(
    private readonly repository: IProviderDatabase,
    private readonly passwordCrypto: IPasswordCryptoStructure,
  ) {
    super();
  }
  async execute(data: ILoginUserReq): Result<ILoginUserRes> {
    try {
      const userExists = await this.repository.user.exists({ email: data.email });

      if (userExists) {
        return this.fail(404, this.userNotFound);
      }

      const match = this.passwordCrypto.compare(data.password, userExists[0].password);

      if (!match) {
        return this.fail(404, this.userNotFound);
      }

      return this.success(200, this.logged, {
        token: z,
      });
    } catch (e) {
      return this.fail(500, this.msgInternalError);
    }
  }
}
