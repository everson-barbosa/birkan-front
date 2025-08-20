import { notificationsSubscriber } from "@/infra/http/subscribers/notifications/notifications-subscriber.service";
import { createContext, ReactNode } from "react";

interface NotificationsContextProps {
  eventSource: EventSource
}

export const NotificationsContext = createContext({} as NotificationsContextProps)

interface NotificationsProviderProps {
  readonly children: ReactNode
}

export function NotificationsProvider({ children }: NotificationsProviderProps) {
  const eventSource = notificationsSubscriber({
    onMessage: (message) => console.log(message)
  })

  return (
    <NotificationsContext.Provider value={{eventSource}}>
      {children}
    </NotificationsContext.Provider>
  )
}