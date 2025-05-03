import { AuthenticationStatus } from "../authentication.context"
import { checkIfAccessTokenIsExpired } from "./check-if-access-token-is-expired"
import { getAccessTokenFromStorage } from "./get-access-token-from-storage"

type GetAuthenticationStatusResponse = 
  AuthenticationStatus.AUTHENTICATED | 
  AuthenticationStatus.UNAUTHENTICATED | 
  AuthenticationStatus.EXPIRED

export function getAuthenticationStatus(): GetAuthenticationStatusResponse {
  const accessToken = getAccessTokenFromStorage()
  
  if (!accessToken) {
    return AuthenticationStatus.UNAUTHENTICATED
  }

  const isAccessTokenExpired = checkIfAccessTokenIsExpired(accessToken)

  if (isAccessTokenExpired) {
    return AuthenticationStatus.EXPIRED
  }

  return AuthenticationStatus.AUTHENTICATED
}