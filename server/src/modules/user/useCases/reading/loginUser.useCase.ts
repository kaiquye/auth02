import { ILoginUserReq, ILoginUserRes, IUseCase } from '../structure/useCase.structures';
import { Result } from '../../../../utils/error/error.structure';
import { IProviderDatabase } from '../../../../database/provider/structure/IApplicationRepositorys.structure';
import { IPasswordCryptoStructure } from '../../../../utils/helpers/crypto/structure/password.crypto.structure';
import { IJwtTokenStructure } from '../../../../utils/helpers/token/structure/jwt.token.structure';

export class LoginUserUseCase extends IUseCase<ILoginUserReq, Promise<Result<ILoginUserRes>>> {
  private readonly logged = 'user logged in successfully';
  private readonly userNotFound = 'informed user was not found in the database';

  constructor(
    private readonly repository: IProviderDatabase,
    private readonly passwordCrypto: IPasswordCryptoStructure,
    private readonly jwt: IJwtTokenStructure,
  ) {
    super();
  }
  async execute(data: ILoginUserReq): Promise<Result<ILoginUserRes>> {
    try {
      const userExists = await this.repository.user.exists({ email: data.email });

      if (userExists) {
        return this.fail(404, this.userNotFound);
      }

      const match = this.passwordCrypto.compare(data.password, userExists[0].password);

      if (!match) {
        return this.fail(404, this.userNotFound);
      }

      const token = this.jwt.generate({ email: data.email });

      return this.success<ILoginUserRes>(200, this.logged, { token, access: null });
    } catch (e) {
      return this.fail(500, this.msgInternalError);
    }
  }
}
