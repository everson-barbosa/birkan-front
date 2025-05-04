import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

export type LucideReactIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>