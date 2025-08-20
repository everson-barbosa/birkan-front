import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages/home.page";
import { ROUTER as AUTHENTICATION_ROUTER } from "../authentication/@routes/router";
import { ROUTER as PRIVATE_ROUTER } from '../private/@routes/router'

export const router = createBrowserRouter([
  {
    children: [
      {
        Component: HomePage,
        path: '/',
      },
    ]
  },
  AUTHENTICATION_ROUTER,
  PRIVATE_ROUTER
]);