import { Helmet } from "react-helmet-async";
import { ListingPage } from "./buy";

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>New Projects — Estate</title>
        <meta name="description" content="Ground-up new launches from RERA-verified developers across India." />
      </Helmet>
      <ListingPage listing="New Project" title="Ground-up new launches" subtitle="From RERA-verified developers, shaping the next decade of Indian living." />
    </>
  );
}
