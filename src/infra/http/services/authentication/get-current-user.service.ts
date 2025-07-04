import { api } from "@/lib/axios";
import { GET_CURRENT_USER_URL } from "../../_constants/endpoints/endpoints";

interface GetCurrentUserServiceResponse {
  id: string
  email: string
  name: string
}

export function getCurrentUserService() {
  return api.get<GetCurrentUserServiceResponse>(GET_CURRENT_USER_URL)
}