export interface Topic {
  id: string;
  title: string;
  description: string;
  status: "IDLE" | "RUNNING" | "FINISHED";
}
