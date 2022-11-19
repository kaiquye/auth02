import { IServicesStructure } from "../structure/services.structure";
import axios from "axios";

class UserServices extends IServicesStructure {
  constructor(Token) {
    super("http://localhost:3001/v1/develop/user");
  }

  async refreshToken() {
    const body = undefined;
    const params = undefined;
    const headers = undefined;

    try {
      const data = await this.Post("/refresh-token", body, params, headers);

      return data.data.value;
    } catch (e) {
      console.log(e);
    }
  }

  async login(email, password) {
    const data = { email, password };
    const params = undefined;
    const headers = undefined;

    try {
      const response = await this.Post("/login", data, params, headers);

      return response.data.value;
    } catch (e) {
      console.log(e);
    }
  }

  async register(token, fist_name, last_name, email, password) {
    const data = { token, fist_name, last_name, email, password };
    const params = undefined;
    const headers = undefined;

    try {
      const response = await this.Post("/create", data, params, headers);

      return response.data.value;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new UserServices();
