import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages/home.page";
import { PrivateLayout } from "../private/@layout/private.layout";
import UsefullTools from "../private/usefull-tools/usefull-tools.page";
import { AuthenticationLayout } from "../authentication/@layout/authentication.layout";
import LoginPage from "../authentication/login/login.page";
import MagicLinkRedirectPage from "../authentication/magic-link-redirect/magic-link-redirect.page";
import RegisterPage from "../authentication/register/register.page";
import ForgotPasswordPage from "../authentication/forgot-password/forgot-password.page";
import PlanningPokerPage from "../private/usefull-tools/@pages/planning-poker/planning-poker.page";

export const router = createBrowserRouter([
  {
    children: [
      {
        Component: HomePage,
        path: "/",
      },
    ],
  },
  {
    Component: AuthenticationLayout,
    children: [
      {
        Component: LoginPage,
        path: "/login",
      },
      {
        Component: MagicLinkRedirectPage,
        path: "/magic-link-redirect",
      },
      {
        Component: RegisterPage,
        path: "/register",
      },
      {
        Component: ForgotPasswordPage,
        path: "/forgot-password",
      },
    ],
  },
  {
    Component: PrivateLayout,
    children: [
      { Component: UsefullTools, path: "/usefull-tools" },
      {
        Component: PlanningPokerPage,
        path: "/planning-poker",
      },
    ],
  },
]);
