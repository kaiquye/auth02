import { CreateUserUseCase } from '../createUser.useCase';
import { PasswordCrypto } from '../../../../../utils/helpers/crypto/password.crypto';
import { IUserRep } from '../../../infrastructure/repository/structure/repository.structure';
import { UserMock } from './mock/user.mock';

describe('create new user', () => {
  let repository: jest.Mocked<IUserRep>;
  let sut: CreateUserUseCase;

  beforeAll(() => {
    let userRep: jest.Mocked<IUserRep> = {
      table: '',
      queryBuilder: '',
      exists: jest.fn(),
      save: jest.fn(),
      delete: jest.fn(),
    };

    userRep.save.mockResolvedValue([UserMock]);
    userRep.exists.mockResolvedValue([{ user: UserMock }] as any);
    userRep.delete.mockResolvedValue(UserMock);

    repository = userRep;

    const providerDatabase = {
      user: userRep,
    };

    sut = new CreateUserUseCase(providerDatabase, new PasswordCrypto());
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should successfully register a new success', async () => {
    repository.exists.mockResolvedValueOnce(false);

    const result = await sut.execute(UserMock);

    expect(result.value).toHaveProperty('password', undefined);
    expect(result.value).toEqual(UserMock);
    expect(result.success).toEqual(true);
  });

  it('should a conflict when registering a new user', async () => {
    const result = await sut.execute(UserMock);

    expect(result.status).toEqual(409);
    expect(result.message).toEqual('informed email already registered');
    expect(result.value).toEqual({});
    expect(result.success).toEqual(false);
  });

  it('should return an internal error', async () => {
    const error = await sut.execute(undefined as any);

    expect(error.message).toEqual('an internal error occurred in the user module, contact an administrator');
    expect(error.status).toEqual(500);
  });
});
