import { ILoginUserRes, IRefreshTokenReq, IUseCase } from '../structure/useCase.structures';
import { Result } from '../../../../utils/error/error.structure';
import { JwtToken } from '../../../../utils/helpers/token/jwt.token';
import { IProviderDatabase } from '../../../../database/provider/structure/IApplicationRepositorys.structure';

export class RefreshTokenUseCase extends IUseCase<IRefreshTokenReq, Promise<Result<ILoginUserRes>>> {
  private readonly createdToken = 'new token created with help of refresh token';
  private readonly userInactive = 'user is no longer active in this application';

  constructor(private readonly repository: IProviderDatabase) {
    super();
  }
  async execute(data: IRefreshTokenReq): Promise<Result<ILoginUserRes>> {
    try {
      const activeUser = await this.repository.user.exists({
        email: data.email,
      });

      if (!activeUser) {
        return this.fail(403, this.userInactive);
      }

      const newToken = new JwtToken().generate({ email: data.email });

      return this.success<ILoginUserRes>(201, this.createdToken, {
        token: newToken,
        access: 'full',
      });
    } catch (e) {
      console.log(e);
      return this.fail(500, this.msgInternalError);
    }
  }
}
