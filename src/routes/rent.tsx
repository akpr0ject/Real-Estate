import { createFileRoute } from "@tanstack/react-router";
import { ListingPage } from "./buy";

export const Route = createFileRoute("/rent")({
  head: () => ({
    meta: [
      { title: "Rent Homes — Estate" },
      { name: "description", content: "Premium rentals across India's best neighbourhoods, from furnished lofts to family villas." },
      { property: "og:title", content: "Rent Homes — Estate" },
    ],
  }),
  component: () => <ListingPage listing="Rent" title="Homes for rent" subtitle="Move-in ready rentals with verified landlords and zero brokerage on select listings." />,
});
