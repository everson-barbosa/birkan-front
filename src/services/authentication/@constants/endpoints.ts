const BASE_URL = {
  AUTH: 'http://localhost:3334'
}

export const LOGIN_WITH_EMAIL_URL = `${BASE_URL.AUTH}/login/email`
export const LOGIN_WITH_MAGIC_LINK_URL = `${BASE_URL.AUTH}/login/magic-link/verify`
export const LOGOUT_URL = `${BASE_URL.AUTH}/logout`
export const REGISTER_ACCOUNT_URL = `${BASE_URL.AUTH}/users`
export const RESET_PASSWORD_URL = `${BASE_URL.AUTH}/users/reset-password`
export const SEND_MAGIC_LINK_VIA_EMAIL_URL = `${BASE_URL.AUTH}/login/magic-link/email`
export const GET_CURRENT_USER_URL = `${BASE_URL.AUTH}/me`
