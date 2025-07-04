const BASE_URL = {
  AUTH: 'http://localhost:3333'
}

export const LOGIN_WITH_EMAIL_URL = `${BASE_URL.AUTH}/login/email`
export const LOGIN_WITH_MAGIC_LINK_URL = `${BASE_URL.AUTH}/login/magic-link/verify`
export const LOGOUT_URL = `${BASE_URL.AUTH}/logout`
export const REGISTER_ACCOUNT_URL = `${BASE_URL.AUTH}/register-account`
export const FORGOT_PASSWORD_URL = `${BASE_URL.AUTH}/forgot-password`
export const CHANGE_PASSWORD_URL = `${BASE_URL.AUTH}/change-password`
export const GET_CURRENT_USER_URL = `${BASE_URL.AUTH}/me`

export const NOTIFICATIONS_SUBSCRIBER_URL = 'http://localhost:3333/sse/notifications'