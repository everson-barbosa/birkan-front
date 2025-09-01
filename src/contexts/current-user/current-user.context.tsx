import { RequestStatus } from "@/core/enums/request-status";
import { getCurrentUserService, UserStatus } from "@/services/authentication/get-current-user.service";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface UserPayload {
  id: string
  email: string
  name: string
  status: UserStatus
}

export interface CurrentUserContextProps {
  readonly user: UserPayload | null
  readonly status: RequestStatus
  readonly getCurrentUserData: () => Promise<void>
}

export const CurrentUserContext = createContext({} as CurrentUserContextProps)

interface CurrentUserProviderProps {
  readonly children: ReactNode
}

export function CurrentUserProvider({ children }: CurrentUserProviderProps) {
  const [user, setUser] = useState<UserPayload | null>(null)
  const [status, setStatus] = useState<RequestStatus>(RequestStatus.IDLE)

  const getCurrentUserData = async () => {
    setStatus(RequestStatus.LOADING)
    
    try {
      const user = await getCurrentUserService()

      setUser(user.data)
      setStatus(RequestStatus.SUCCESS)
    } catch (error) {
      console.error(error)

      setStatus(RequestStatus.ERROR)
    }
  }

  useEffect(() => {
    getCurrentUserData()
  }, [])

  return (
    <CurrentUserContext.Provider value={{
      user,
      status,
      getCurrentUserData
    }}>
      {children}
    </CurrentUserContext.Provider>
  )
}