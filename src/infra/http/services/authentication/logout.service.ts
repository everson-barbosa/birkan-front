import { api } from "@/lib/axios"
import { LOGOUT_URL } from "../../_constants/endpoints/endpoints"

export async function logoutService() {
  return api.post(LOGOUT_URL)   
}