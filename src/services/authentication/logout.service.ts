import { api } from "@/lib/axios"
import { LOGOUT_URL } from "./@constants/endpoints"

export async function logoutService() {
  return api.post(LOGOUT_URL)   
}