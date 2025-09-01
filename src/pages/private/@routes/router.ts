import { lazy } from "react";
import { PrivateLayout } from "../@layout/private.layout";
const DashboardPage = lazy(() => import("../dashboard/dashboard.page"))
const ExamApplicationsPage = lazy(() => import("../exam-applications/exam-applications.page"))

export const ROUTER = { 
  Component: PrivateLayout, 
  children: [
    { Component: DashboardPage, path: '/dashboard' },
    { Component: ExamApplicationsPage, path: '/exam-applications' },
  ] 
}