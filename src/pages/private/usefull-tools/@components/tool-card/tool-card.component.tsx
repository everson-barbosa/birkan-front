import { Button } from "@/components/ui/button/button.component";
import { LucideReactIcon } from "@/core/types/lucide-react";
import { ClubIcon as PlanningPokerIcon } from "lucide-react";
import { Link } from "react-router";

type Tool = "planning-poker";

const Icons: Record<Tool, LucideReactIcon> = {
  "planning-poker": PlanningPokerIcon,
};

interface ToolCardProps {
  readonly title: string;
  readonly icon: Tool;
  readonly text: string;
  readonly link?: {
    readonly text: string;
    readonly to: string;
  };
}

export function ToolCard({ title, icon, text, link }: ToolCardProps) {
  const Icon = Icons[icon];

  return (
    <div className="border flex flex-col gap-2 bg-primary-foreground p-4 rounded-xl">
      <div className="flex flex-row justify-between gap-2">
        <h3 className="text-md">{title}</h3>

        <Icon />
      </div>

      <p className="text-xs">{text}</p>

      {link && (
        <Button variant="outline" size="sm" asChild>
          <Link to={link.to}>{link.text}</Link>
        </Button>
      )}
    </div>
  );
}
