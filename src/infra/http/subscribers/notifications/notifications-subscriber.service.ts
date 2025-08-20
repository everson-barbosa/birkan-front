import { NOTIFICATIONS_SUBSCRIBER_URL } from "./@constants/endpoints"

export interface NotificationMessageEvent {
  id: string
  title: string
  content: string
}

export interface NotificationsSubscriberProps {
  readonly onMessage?: (event: MessageEvent<NotificationMessageEvent>) => void
  readonly onError?: (event: Event) => void
}

export function notificationsSubscriber({ onMessage, onError }: NotificationsSubscriberProps = {}) {
  const eventSource = new EventSource(NOTIFICATIONS_SUBSCRIBER_URL, {
    withCredentials: true
  })

  if (onMessage) eventSource.onmessage = onMessage
  if (onError) eventSource.onerror = onError

  return eventSource
}