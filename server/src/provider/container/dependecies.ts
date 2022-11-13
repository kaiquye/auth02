import { CreateUserUseCase } from '../../modules/user/useCases/writing/createUser.useCase';
import { ProviderDatabase } from '../../database/provider/provider.database';
import { PasswordCrypto } from '../../utils/helpers/crypto/password.crypto';

const createUserResolver = new CreateUserUseCase(new ProviderDatabase(), new PasswordCrypto());

export { createUserResolver };
