import { createBrowserRouter } from "react-router";
import { PrivateLayout } from "@/pages/private/_layout/private.layout";
import { HomePage } from "@/pages/home.page";
import { DashboardPage } from "@/pages/private/dashboard/dashboard.page";
import { LoginPage } from "@/pages/authentication/login/login.page";
import { AuthenticationLayout } from "@/pages/authentication/_layout/authentication.layout";
import { RegisterPage } from "@/pages/authentication/register/register.page";
import { MagicLinkRedirectPage } from "../authentication/magic-link-redirect/magic-link-redirect.page";
import { ForgotPasswordPage } from "../authentication/forgot-password/forgot-password.page";

export const router = createBrowserRouter([
  {
    children: [
      {
        Component: HomePage,
        path: '/',
      },
    ]
  },
  {
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
  },
  { 
    Component: PrivateLayout, 
    children: [
      { Component: DashboardPage, path: '/dashboard' }
    ] 
  }
]);