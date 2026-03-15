import { baseApi } from "@/common/constants";

const versionApi = 'v1';
export const EndpointsApp = {
  auth: {
    login: `${baseApi}/${versionApi}/auth/login`,
    refresh: `${baseApi}/${versionApi}/auth/refresh`,
    users: `${baseApi}/${versionApi}/users/users/`,
  },
}

