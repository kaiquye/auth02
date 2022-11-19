import { CreateUserUseCase } from '../../modules/user/useCases/writing/createUser.useCase';
import { ProviderDatabase } from '../../database/provider/provider.database';
import { PasswordCrypto } from '../../utils/helpers/crypto/password.crypto';
import { LoginUserUseCase } from '../../modules/user/useCases/reading/loginUser.useCase';
import { JwtToken } from '../../utils/helpers/token/jwt.token';
import { RefreshTokenUseCase } from '../../modules/user/useCases/reading/refreshToken.useCase';

const createUserResolver = new CreateUserUseCase(new ProviderDatabase(), new PasswordCrypto());
const loginUserResolver = new LoginUserUseCase(new ProviderDatabase(), new PasswordCrypto(), new JwtToken());
const refreshTokenResolver = new RefreshTokenUseCase(new ProviderDatabase());

export { createUserResolver, loginUserResolver, refreshTokenResolver };
