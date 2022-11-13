import { CreateUserUseCase } from '../../modules/user/useCases/writing/createUser.useCase';
import { ProviderDatabase } from '../../database/provider/provider.database';
import { PasswordCrypto } from '../../utils/helpers/crypto/password.crypto';
import { LoginUserUseCase } from '../../modules/user/useCases/reading/loginUser.useCase';
import { JwtToken } from '../../utils/helpers/token/jwt.token';

const createUserResolver = new CreateUserUseCase(new ProviderDatabase(), new PasswordCrypto());
const loginUserResolver = new LoginUserUseCase(new ProviderDatabase(), new PasswordCrypto(), new JwtToken());

export { createUserResolver, loginUserResolver };
