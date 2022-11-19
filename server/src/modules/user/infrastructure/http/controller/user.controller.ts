import { IHttpResponse } from '../../../../../utils/adapters/httpAdapter';
import {
  createUserResolver,
  loginUserResolver,
  refreshTokenResolver,
} from '../../../../../provider/container/dependecies';
import { CreateUserDto } from '../dto/createUser.dto';
import { LoginUserDto } from '../dto/loginUser.dto';

class UserController {
  async create(userDto: CreateUserDto): Promise<IHttpResponse> {
    delete userDto['user_infos'];

    const response = await createUserResolver.execute(userDto);

    return {
      status: response.status,
      json: response,
    };
  }

  async login(loginDto: LoginUserDto): Promise<IHttpResponse> {
    const response = await loginUserResolver.execute(loginDto);

    return {
      status: response.status,
      json: response,
      cookie: { name: 'refresh-token', value: response.value['refresh_token'] },
    };
  }

  async refreshToken(refreshTokenDto): Promise<IHttpResponse> {
    console.log('pasoouw');
    const response = await refreshTokenResolver.execute({ email: refreshTokenDto.user_infos });

    return {
      status: response.status,
      json: response,
    };
  }
}

export default new UserController();
