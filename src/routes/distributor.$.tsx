import { createFileRoute } from "@tanstack/react-router";
import { Route as DistRoute } from "./distributor";

const Comp = DistRoute.options.component!;

export const Route = createFileRoute("/distributor/$")({
  head: () => ({ meta: [{ title: "Distributor Workspace — Estate" }] }),
  component: Comp,
});
