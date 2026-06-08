import { createFileRoute } from "@tanstack/react-router";
import { ListingPage } from "./buy";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "New Projects — Estate" },
      { name: "description", content: "RERA-approved launches from India's most considered developers." },
      { property: "og:title", content: "New Projects — Estate" },
    ],
  }),
  component: () => <ListingPage listing="New Project" title="New launches" subtitle="RERA-approved launches from India's most considered developers." />,
});
