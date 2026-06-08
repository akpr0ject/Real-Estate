import { createFileRoute } from "@tanstack/react-router";
import { Route as AdminRoute } from "./admin";

const Comp = AdminRoute.options.component!;

export const Route = createFileRoute("/admin/$")({
  head: () => ({ meta: [{ title: "Super Admin — Estate" }] }),
  component: Comp,
});
