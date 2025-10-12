import { Separator } from "@/components/ui/separator/separator.component";
import { SidebarTrigger } from "@/components/ui/sidebar/sidebar.component";
import { ReactNode } from "react";

interface HeaderProps {
  readonly children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        {children}
      </div>
    </header>
  );
}
