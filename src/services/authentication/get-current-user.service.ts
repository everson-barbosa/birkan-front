import { GET_CURRENT_USER_URL } from "./@constants/endpoints";
import { api } from "@/lib/axios";

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  REQUIRE_CHANGE_PASSWORD = 'REQUIRE_CHANGE_PASSWORD',
}

export interface GetCurrentUserServiceResponse {
  id: string
  email: string
  name: string
  status: UserStatus
}

export function getCurrentUserService() {
  return api.get<GetCurrentUserServiceResponse>(GET_CURRENT_USER_URL)
}