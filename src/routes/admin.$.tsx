import { createFileRoute } from "@tanstack/react-router";
import { Route as AdminRoute } from "./admin";

export const Route = createFileRoute("/admin/$")({
  head: AdminRoute.options.head,
  component: AdminRoute.options.component!,
});
