import { lazy } from "react";
import { PrivateLayout } from "../@layout/private.layout";
const DashboardPage = lazy(() => import("../dashboard/dashboard.page"))

export const ROUTER = { 
  Component: PrivateLayout, 
  children: [
    { Component: DashboardPage, path: '/dashboard' }
  ] 
}