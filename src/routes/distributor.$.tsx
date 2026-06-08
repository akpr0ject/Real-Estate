import { createFileRoute } from "@tanstack/react-router";
import { Route as DistRoute } from "./distributor";

export const Route = createFileRoute("/distributor/$")({
  head: DistRoute.options.head,
  component: DistRoute.options.component!,
});
