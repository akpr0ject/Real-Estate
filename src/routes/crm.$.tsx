import { createFileRoute } from "@tanstack/react-router";
import { Route as CrmRoute } from "./crm";

const Comp = CrmRoute.options.component!;

export const Route = createFileRoute("/crm/$")({
  head: () => ({ meta: [{ title: "CRM — Estate" }] }),
  component: Comp,
});
