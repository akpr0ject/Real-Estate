import { Helmet } from "react-helmet-async";
import { ListingPage } from "./buy";

export default function RentPage() {
  return (
    <>
      <Helmet>
        <title>Rent Properties — Estate</title>
        <meta name="description" content="Verified rental homes across India — apartments, villas and serviced residences." />
      </Helmet>
      <ListingPage listing="Rent" title="Rentals you'll want to call home" subtitle="Verified rental listings, transparent agreements, zero fluff." />
    </>
  );
}
