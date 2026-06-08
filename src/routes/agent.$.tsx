import { createFileRoute } from "@tanstack/react-router";
import { Route as AgentRoute } from "./agent";

export const Route = createFileRoute("/agent/$")({
  head: AgentRoute.options.head,
  component: AgentRoute.options.component!,
});
