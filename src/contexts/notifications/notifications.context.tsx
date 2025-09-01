import { createContext, ReactNode } from "react";

interface NotificationsContextProps {
  eventSource: number
}

export const NotificationsContext = createContext({} as NotificationsContextProps)

interface NotificationsProviderProps {
  readonly children: ReactNode
}

export function NotificationsProvider({ children }: NotificationsProviderProps) {


  return (
    <NotificationsContext.Provider value={{
      eventSource: 1 
    }}>
      {children}
    </NotificationsContext.Provider>
  )
}