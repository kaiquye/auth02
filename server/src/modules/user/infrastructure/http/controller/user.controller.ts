import { IHttpResponse } from '../../../../../utils/adapters/httpAdapter';
import { createUserResolver } from '../../../../../provider/container/dependecies';
import { CreateUserDto } from '../dto/createUser.dto';

class UserController {
  async create(userDto: CreateUserDto): Promise<IHttpResponse> {
    const response = await createUserResolver.execute(userDto);

    return {
      status: response.status,
      json: response,
    };
  }

  async login(loginDto: LoginUserDto): Promise<IHttpResponse> {}
}

export default new UserController();
