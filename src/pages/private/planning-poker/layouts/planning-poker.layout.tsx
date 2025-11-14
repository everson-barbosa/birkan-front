import { Outlet } from "react-router";
import { PlanningPokerProvider } from "../contexts/planning-poker.context";

export function PlanningPokerLayout() {
  return (
    <PlanningPokerProvider>
      <Outlet />
    </PlanningPokerProvider>
  );
}
