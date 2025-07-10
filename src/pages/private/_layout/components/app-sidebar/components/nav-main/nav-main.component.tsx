import { Bot, ChevronRight, SquareTerminal, type LucideIcon } from "lucide-react"

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
  title: "Playground",
  url: "#",
  icon: SquareTerminal,
  isActive: true,
  items: [
    {
      title: "History",
      url: "#",
    },
    {
      title: "Starred",
      url: "#",
    },
    {
      title: "Settings",
      url: "#",
    },
  ],
},
{
  title: "Models",
  url: "#",
  icon: Bot,
  items: [
    {
      title: "Genesis",
      url: "#",
    },
    {
      title: "Explorer",
      url: "#",
    },
    {
      title: "Quantum",
      url: "#",
    },
  ],
},
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
                <a href={feature.url}>
                  <feature.icon />
                  <span>{feature.title}</span>
                </a>
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
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
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
