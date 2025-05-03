import { ACCESS_TOKEN_KEY } from "../../../constants/local-storage-keys";

export function getAccessTokenFromStorage(): string | null {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)

  return accessToken
}