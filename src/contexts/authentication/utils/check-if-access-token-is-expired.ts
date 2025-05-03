import { jwtDecode } from "jwt-decode";

export function checkIfAccessTokenIsExpired(accessToken: string) {
  const accessTokenDecoded = jwtDecode(accessToken)

  const isMissingAccessTokenExpiredAt = !accessTokenDecoded?.exp

  if (isMissingAccessTokenExpiredAt) {
    return true
  }

  const accessTokenExpirationTimeInMilliseconds = Number(accessTokenDecoded.exp) * 1000
  const currentTimeInMilliseconds = Date.now()

  if (accessTokenExpirationTimeInMilliseconds < currentTimeInMilliseconds) {
    return true
  }

  return false
}