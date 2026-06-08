import { createFileRoute } from "@tanstack/react-router";
import { Route as DashRoute } from "./dashboard";

const Comp = DashRoute.options.component!;

export const Route = createFileRoute("/dashboard/$")({
  head: () => ({ meta: [{ title: "Your dashboard — Estate" }] }),
  component: Comp,
});
