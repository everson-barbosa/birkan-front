import { NetworkStatus } from "@/core/enums/network-status";
import { getCurrentUserService, UserStatus } from "@/infra/http/services/authentication/get-current-user.service";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface UserPayload {
  id: string
  email: string
  name: string
  status: UserStatus
}

export interface CurrentUserContextProps {
  readonly user: UserPayload | null
  readonly status: NetworkStatus
  readonly getCurrentUserData: () => Promise<void>
}

export const CurrentUserContext = createContext({} as CurrentUserContextProps)

interface CurrentUserProviderProps {
  readonly children: ReactNode
}

export function CurrentUserProvider({ children }: CurrentUserProviderProps) {
  const [user, setUser] = useState<UserPayload | null>(null)
  const [status, setStatus] = useState<NetworkStatus>(NetworkStatus.IDLE)

  const getCurrentUserData = async () => {
    setStatus(NetworkStatus.LOADING)
    
    try {
      const user = await getCurrentUserService()

      setUser(user.data)
      setStatus(NetworkStatus.SUCCESS)
    } catch (error) {
      console.error(error)

      setStatus(NetworkStatus.ERROR)
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