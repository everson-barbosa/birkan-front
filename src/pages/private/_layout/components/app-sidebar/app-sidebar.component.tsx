import { ComponentProps } from "react"
import { NavMain } from "./components/nav-main/nav-main.component"
import { NavProjects } from "./components/nav-projects/nav-projects.component"
import { NavSecondary } from "./components/nav-secondary/nav-secondary.component"
import { NavUser } from "./components/nav-user/nav-user.component"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar/sidebar.component"

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <NavUser />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavProjects />
        <NavSecondary className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  )
}
