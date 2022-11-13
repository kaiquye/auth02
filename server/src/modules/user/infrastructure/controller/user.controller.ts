import {
  IHttpRequest,
  IHttpResponse,
} from "../../../../utils/adapters/httpAdapter";

class UserController {
  create(httpRequest: IHttpRequest): Promise<IHttpResponse> {}
}

export default new UserController();
