import { IHttpRequest, IHttpResponse } from '../../../../../utils/adapters/httpAdapter';
import { createUserResolver } from '../../../../../provider/container/dependecies';

class UserController {
  async create(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const user = httpRequest.body;

    const response = await createUserResolver.execute(user);

    return {
      status: response.status,
      json: response,
    };
  }
}

export default new UserController();
