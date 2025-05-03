import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { getAuthenticationStatus } from "./utils/get-authentication-status";
import { setAccessTokenOnStorage } from "./utils/set-access-token-on-storage";
import { removeAccessTokenFromStorage } from "./utils/remove-access-token-from-storage";

export enum AuthenticationStatus {
  IDLE,
  UNAUTHENTICATED,
  AUTHENTICATED,
  EXPIRED
}

interface AuthenticateProps {
  readonly accessToken: string
}

export interface AuthenticationContextProps {
  readonly status: AuthenticationStatus
  readonly authenticate: (props: AuthenticateProps) => void
  readonly clearAuthenticationStorage: () => void
}

export const AuthenticationContext = createContext({} as AuthenticationContextProps)

interface AuthenticationProviderProps {
  readonly children: ReactNode
}

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [status, setStatus] = useState(AuthenticationStatus.IDLE)

  const validateAuthenticationStatus = useCallback(() => {
    const newAuthenticationStatus = getAuthenticationStatus()

    setStatus(newAuthenticationStatus)
  }, [])

  const authenticate = useCallback(({ accessToken }: AuthenticateProps) => {
    setAccessTokenOnStorage(accessToken)    
  }, [])

  const clearAuthenticationStorage = useCallback(() => {
    removeAccessTokenFromStorage()

    setStatus(AuthenticationStatus.IDLE)
  }, [])
  
  useEffect(() => {
    validateAuthenticationStatus()
  }, [validateAuthenticationStatus])

  const contextValue = useMemo((): AuthenticationContextProps => (
    { 
      status, 
      authenticate, 
      clearAuthenticationStorage, 
    }
  ), [status, authenticate, clearAuthenticationStorage])

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  )
}

