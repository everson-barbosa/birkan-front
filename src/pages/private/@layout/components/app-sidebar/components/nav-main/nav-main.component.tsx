import { ChevronRight, SchoolIcon, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible/collapsible.component"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar/sidebar.component"
import { Link } from "react-router"

interface Item {
  title: string
  url: string
}

interface Feature {
  title: string
  url: string
  icon: LucideIcon
  isActive?: boolean
  items?: Item[]
}

const FEATURES: Feature[] = [
  {
    title: "School Management",
    url: "/dashboard",
    icon: SchoolIcon,
    isActive: true,
    items: [
      {
        title: "Exam applications",
        url: "/exam-applications",
      },
    ],
  }
]

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {FEATURES.map((feature) => (
          <Collapsible key={feature.title} asChild defaultOpen={feature.isActive}>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={feature.title}>
                <Link to={feature.url}>
                  <feature.icon />
                  <span>{feature.title}</span>
                </Link>
              </SidebarMenuButton>
              {feature.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {feature.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link to={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
