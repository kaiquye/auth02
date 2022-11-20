import { IUserRep } from '../../../infrastructure/repository/structure/repository.structure';
import LoginUserUseCase from '../loginUser.useCase';
import { UserMock } from '../../writing/test/mock/user.mock';
import { JwtToken } from '../../../../../utils/helpers/token/jwt.token';
import { loginUserMock } from './mock/loginUser.mock';
import { IPasswordCryptoStructure } from '../../../../../utils/helpers/crypto/structure/password.crypto.structure';
import { IJwtTokenStructure } from '../../../../../utils/helpers/token/structure/jwt.token.structure';

describe('login user', () => {
  let repository: jest.Mocked<IUserRep>;
  let crypto: jest.Mocked<IPasswordCryptoStructure>;
  let sut: LoginUserUseCase;

  beforeAll(() => {
    let userRep: jest.Mocked<IUserRep> = {
      table: '',
      queryBuilder: '',
      exists: jest.fn(),
      save: jest.fn(),
      delete: jest.fn(),
    };

    userRep.save.mockResolvedValue([UserMock]);
    userRep.exists.mockResolvedValue([loginUserMock] as any);
    userRep.delete.mockResolvedValue(UserMock);

    let passwordCrypto: jest.Mocked<IPasswordCryptoStructure> = {
      compare: jest.fn(),
      salt: jest.fn(),
      hash: jest.fn(),
    };

    passwordCrypto.compare.mockResolvedValue(true);
    passwordCrypto.salt.mockResolvedValue('10');
    passwordCrypto.hash.mockResolvedValue('000000000');

    let jwtToken: jest.Mocked<IJwtTokenStructure> = {
      generate: jest.fn(),
      validate: jest.fn(),
      generateRefreshToken: jest.fn(),
      validateRefreshToken: jest.fn(),
    };

    jwtToken.generate.mockResolvedValue('token');
    jwtToken.validate.mockResolvedValue(true);
    jwtToken.generateRefreshToken.mockResolvedValue('refresh_token');
    jwtToken.validateRefreshToken.mockResolvedValue(true);

    repository = userRep;
    crypto = passwordCrypto;

    sut = new LoginUserUseCase({ user: userRep }, passwordCrypto, new JwtToken());
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should successfully login user', async () => {
    const result = await sut.execute(loginUserMock);

    expect(result.status).toEqual(200);
    expect(result.message).toEqual('user logged in successfully');
    expect(result.value).toHaveProperty('token');
    expect(result.value).toHaveProperty('refresh_token');
  });

  it('should return an error with invalid credentials => user not found', async () => {
    repository.exists.mockResolvedValueOnce(false);

    const result = await sut.execute(loginUserMock);

    expect(result.status).toEqual(404);
    expect(result.message).toEqual('informed user was not found in the database');
  });

  it('should return an error with invalid credentials => password not match', async () => {
    crypto.compare.mockResolvedValueOnce(false);

    const result = await sut.execute(loginUserMock);

    expect(result.status).toEqual(404);
    expect(result.message).toEqual('informed user was not found in the database');
  });

  it('should return an internal error', async () => {
    const result = await sut.execute(undefined as any);

    expect(result.status).toEqual(500);
    expect(result.message).toEqual('an internal error occurred in the user module, contact an administrator');
  });
});
