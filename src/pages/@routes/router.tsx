import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages/home.page";
import { PrivateLayout } from "../private/@layouts/private.layout";
import UsefullTools from "../private/usefull-tools/usefull-tools.page";
import { AuthenticationLayout } from "../authentication/@layout/authentication.layout";
import LoginPage from "../authentication/login/login.page";
import MagicLinkRedirectPage from "../authentication/magic-link-redirect/magic-link-redirect.page";
import RegisterPage from "../authentication/register/register.page";
import ForgotPasswordPage from "../authentication/forgot-password/forgot-password.page";
import PlanningPokerPage from "../private/planning-poker/pages/planning-poker-root/planning-poker.page";
import { PlanningPokerLayout } from "../private/planning-poker/layouts/planning-poker.layout";
import PlanningPokerRoomPage from "../private/planning-poker/pages/planning-poker-room/planning-poker-room.page";

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
        Component: PlanningPokerLayout,
        children: [
          {
            Component: PlanningPokerPage,
            path: "/planning-poker",
          },
          {
            Component: PlanningPokerRoomPage,
            path: "/planning-poker/room/:roomId",
          },
        ],
      },
    ],
  },
]);
