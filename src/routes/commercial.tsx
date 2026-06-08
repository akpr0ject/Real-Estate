import { createFileRoute } from "@tanstack/react-router";
import { ListingPage } from "./buy";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Properties — Estate" },
      { name: "description", content: "Grade-A offices, retail and warehousing — leased or sold by India's best commercial brokers." },
      { property: "og:title", content: "Commercial Properties — Estate" },
    ],
  }),
  component: () => <ListingPage listing="Commercial" title="Commercial spaces" subtitle="Grade-A offices, retail and industrial — brokered by professionals you can trust." />,
});
