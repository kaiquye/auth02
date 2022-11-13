import { IHttpResponse } from '../../../../../utils/adapters/httpAdapter';
import { createUserResolver, loginUserResolver } from '../../../../../provider/container/dependecies';
import { CreateUserDto } from '../dto/createUser.dto';
import { LoginUserDto } from '../dto/loginUser.dto';

class UserController {
  async create(userDto: CreateUserDto): Promise<IHttpResponse> {
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
    };
  }
}

export default new UserController();
