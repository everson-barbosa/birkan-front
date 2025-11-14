import { AppSidebar } from "./@components/app-sidebar/app-sidebar.component";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar/sidebar.component";
import { SESSION_STORAGE_LAST_ROUTE_KEY } from "@/constants/session-storage-key";
import { CurrentUserGuard } from "@/contexts/current-user/components/current-user-guard/current-user-guard.component";
import { CurrentUserProvider } from "@/contexts/current-user/current-user.context";
import { NotificationsProvider } from "@/contexts/notifications/notifications.context";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

export function PrivateLayout() {
  const location = useLocation();

  useEffect(() => {
    sessionStorage.setItem(
      SESSION_STORAGE_LAST_ROUTE_KEY,
      JSON.stringify(location)
    );
  }, [location]);

  return (
    <CurrentUserProvider>
      <CurrentUserGuard>
        <NotificationsProvider>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <Outlet />
              </div>
            </SidebarInset>
          </SidebarProvider>
        </NotificationsProvider>
      </CurrentUserGuard>
    </CurrentUserProvider>
  );
}
