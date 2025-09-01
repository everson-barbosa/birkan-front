import { LOGIN_WITH_EMAIL_URL } from "@/services/authentication/@constants/endpoints";
import { navigate } from "@/utils/navigate.util";
import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  withCredentials: true
})

api.interceptors.response.use(
    response => response,
    error => {
      const isLoginWithEmailRequest = error.config?.url === LOGIN_WITH_EMAIL_URL
      const isUnauthorizedError = error.response?.status === 401

      if (!isLoginWithEmailRequest && isUnauthorizedError) {
        navigate('/login')
      }

      return Promise.reject(error);
    }
  )

export { api }