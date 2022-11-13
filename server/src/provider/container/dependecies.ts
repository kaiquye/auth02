import { CreateUserUseCase } from '../../modules/user/useCases/createUser.useCase';
import { ProviderDatabase } from '../../database/provider/provider.database';

const createUserServices = new CreateUserUseCase(new ProviderDatabase());

export { createUserServices };
