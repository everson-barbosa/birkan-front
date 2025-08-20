import { AppSidebar } from "./components/app-sidebar/app-sidebar.component"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb/breadcrumb.component"
import { Separator } from "@/components/ui/separator/separator.component"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar/sidebar.component"
import { CurrentUserGuard } from "@/contexts/current-user/components/current-user-guard/current-user-guard.component"
import { CurrentUserProvider } from "@/contexts/current-user/current-user.context"
import { NotificationsProvider } from "@/contexts/notifications/notifications.context"
import { Outlet } from "react-router"

export function PrivateLayout() {
  return (
    <CurrentUserProvider>
      <CurrentUserGuard>
        <NotificationsProvider>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                  />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">
                          Building Your Application
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </header>
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <Outlet />
              </div>
            </SidebarInset>
          </SidebarProvider>
        </NotificationsProvider>
      </CurrentUserGuard>
    </CurrentUserProvider>
  )
}
