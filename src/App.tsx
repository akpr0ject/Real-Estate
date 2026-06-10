import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/index";
import BuyPage from "./pages/buy";
import RentPage from "./pages/rent";
import CommercialPage from "./pages/commercial";
import ProjectsPage from "./pages/projects";
import PropertyPage from "./pages/property.$id";
import AgentsPage from "./pages/agents";
import BuildersPage from "./pages/builders";
import BlogPage from "./pages/blog";
import ContactPage from "./pages/contact";
import LoginPage from "./pages/login";
import DashboardPage from "./pages/dashboard";
import AgentPage from "./pages/agent";
import CrmPage from "./pages/crm";
import AdminPage from "./pages/admin";
import DistributorPage from "./pages/distributor";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/rent" element={<RentPage />} />
      <Route path="/commercial" element={<CommercialPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/property/:id" element={<PropertyPage />} />
      <Route path="/agents" element={<AgentsPage />} />
      <Route path="/builders" element={<BuildersPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard/*" element={<DashboardPage />} />
      <Route path="/agent/*" element={<AgentPage />} />
      <Route path="/crm/*" element={<CrmPage />} />
      <Route path="/admin/*" element={<AdminPage />} />
      <Route path="/distributor/*" element={<DistributorPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
