import { Helmet } from "react-helmet-async";
import { ListingPage } from "./buy";

export default function CommercialPage() {
  return (
    <>
      <Helmet>
        <title>Commercial Spaces — Estate</title>
        <meta name="description" content="Premium office floors, retail spaces and warehouses across India's metros." />
      </Helmet>
      <ListingPage listing="Commercial" title="Workspaces that perform" subtitle="Office floors, retail and warehousing across India's growth corridors." />
    </>
  );
}
