import { lazy } from 'react';
import { AuthenticationLayout } from "../@layout/authentication.layout";
const ForgotPasswordPage = lazy(() => import("../forgot-password/forgot-password.page"));
const LoginPage = lazy(() => import("../login/login.page"));
const MagicLinkRedirectPage = lazy(() => import("../magic-link-redirect/magic-link-redirect.page"));

const RegisterPage = lazy(() => import("../register/register.page"))

export const ROUTER = {
  Component: AuthenticationLayout,
  children: [
    {
      Component: LoginPage,
      path: '/login',
    },
    { 
      Component: MagicLinkRedirectPage,
      path: '/magic-link-redirect'
    },
    {
      Component: RegisterPage,
      path: '/register'
    },
    {
      Component: ForgotPasswordPage,
      path: '/forgot-password'
    },
  ]
}