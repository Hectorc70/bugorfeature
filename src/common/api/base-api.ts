import axios from "axios";
import { baseApi } from "../constants";
import { getAccessToken, setAccessToken } from "./token-store";
import AuthService from "@/modules/auth/services/auth.service";

export const axiosPublic = axios.create({
  baseURL: baseApi,
  withCredentials: true
});

export const axiosPrivate = axios.create({
  baseURL: baseApi,
  withCredentials: true
});


axiosPrivate.interceptors.request.use((config) => {

  const token = getAccessToken();

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;

});


axiosPrivate.interceptors.response.use(

  response => response,

  async (error) => {

    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true;

      try {

        const newToken = await AuthService.refreshToken();

        setAccessToken(newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return axiosPrivate(originalRequest);

      } catch {

        setAccessToken(null);
        window.location.href = "/login";
      }

    }
    return Promise.reject(error);
  }

);