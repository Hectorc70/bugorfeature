import { axiosPrivate, axiosPublic } from "@/common/api/base-api";
import { EndpointsApp } from "@/common/api/endpoints";
import type { IUser } from "@/models/user.model";

class AuthService {

  async login({ email, password }: { email: string, password: string }) {
    const data = {
      email,
      password
    }

    const res = await axiosPublic.post(EndpointsApp.auth.login, data);

    return res.data.access_token;

  }

  async refreshToken() {

    const res = await axiosPublic.post(EndpointsApp.auth.refresh);

    return res.data.access_token;

  }
  async createAccount({ email, password, name }: { email: string, password: string, name: string }) {

    const res = await axiosPublic.post(EndpointsApp.auth.users, { email, password, name });
    return res.data.access_token;
  }
  async getUser(signal?: AbortSignal): Promise<IUser> {
    const res = await axiosPrivate.get(
      `${EndpointsApp.auth.users}`,
      { signal }
    )

    return res.data
  }
}

export default new AuthService();