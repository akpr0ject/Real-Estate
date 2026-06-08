import { createFileRoute } from "@tanstack/react-router";
import { Route as CrmRoute } from "./crm";

export const Route = createFileRoute("/crm/$")({
  head: CrmRoute.options.head,
  component: CrmRoute.options.component!,
});
