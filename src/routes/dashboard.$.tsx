import { createFileRoute } from "@tanstack/react-router";
import { Route as DashRoute } from "./dashboard";

export const Route = createFileRoute("/dashboard/$")({
  head: DashRoute.options.head,
  component: DashRoute.options.component!,
});
