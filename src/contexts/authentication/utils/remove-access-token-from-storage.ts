import { ACCESS_TOKEN_KEY } from "../../../constants/local-storage-keys";

export function removeAccessTokenFromStorage() {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}