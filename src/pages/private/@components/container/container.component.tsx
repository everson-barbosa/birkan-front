import { ReactNode } from "react";

interface ContainerProps {
  readonly children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className="p-4">{children}</div>;
}
