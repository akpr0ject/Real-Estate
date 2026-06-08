import { createFileRoute } from "@tanstack/react-router";
import { Route as AgentRoute } from "./agent";

const Comp = AgentRoute.options.component!;

export const Route = createFileRoute("/agent/$")({
  head: () => ({ meta: [{ title: "Agent Workspace — Estate" }] }),
  component: Comp,
});
