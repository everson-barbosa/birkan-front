import { ACCESS_TOKEN_KEY } from "../../../constants/local-storage-keys";

export function setAccessTokenOnStorage(accessToken: string): void {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
}