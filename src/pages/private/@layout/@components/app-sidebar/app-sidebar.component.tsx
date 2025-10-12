import { ComponentProps } from "react";
import { NavMain } from "./@components/nav-main/nav-main.component";
import { NavProjects } from "./@components/nav-projects/nav-projects.component";
import { Footer } from "./@components/footer/footer.component";
import { NavUser } from "./@components/nav-user/nav-user.component";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar/sidebar.component";

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <NavUser />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavProjects />
        <Footer className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  );
}
