import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { SiteEnhancements } from "./components/SiteEnhancements";
import { SeoHead } from "./components/SeoHead";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { IntegrationPage } from "./pages/IntegrationPage";
import { AboutPage } from "./pages/AboutPage";
import { PricingPage } from "./pages/PricingPage";
import { ContactPage } from "./pages/ContactPage";
import { FAQPage } from "./pages/FAQPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { DemoPage } from "./pages/DemoPage";
import { CustomersPage } from "./pages/CustomersPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { RefundPage } from "./pages/RefundPage";
import { TeamPage } from "./pages/TeamPage";
import { AlternativePage } from "./pages/AlternativePage";
import { ComparisonsHubPage } from "./pages/ComparisonsHubPage";
import { getAlternativeConfigByPageKey } from "./lib/alternativePages";
import { Toaster } from "./components/ui/sonner";
import {
  allBlogEntries,
  findBlogById,
  findBlogBySlug,
  type BlogEntry,
} from "./lib/blogSlugs";
import {
  getBlogSlugFromPath,
  getPageFromPath,
  getPathForPage,
} from "./lib/routes";

function resolveBlogEntry(slug: string | null): BlogEntry | null {
  if (!slug) return null;

  return (
    findBlogBySlug(slug) ??
    findBlogById(slug) ??
    null
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [blogEntry, setBlogEntry] = useState<BlogEntry | null>(null);

  const syncRouteFromLocation = useCallback(() => {
    const page = getPageFromPath(window.location.pathname);
    setCurrentPage(page);

    if (page === "blogdetail") {
      const slug = getBlogSlugFromPath(window.location.pathname);
      setBlogEntry(resolveBlogEntry(slug) ?? allBlogEntries[0] ?? null);
      return;
    }

    setBlogEntry(null);
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", syncRouteFromLocation);
    syncRouteFromLocation();

    return () => {
      window.removeEventListener("popstate", syncRouteFromLocation);
    };
  }, [syncRouteFromLocation]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);

    const path = getPathForPage(page);

    window.history.pushState({}, "", path);
    syncRouteFromLocation();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />;
      case "integration":
        return <IntegrationPage onNavigate={handleNavigate} />;
      case "customers":
        return <CustomersPage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      case "pricing":
        return <PricingPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage onNavigate={handleNavigate} />;
      case "faqs":
        return <FAQPage onNavigate={handleNavigate} />;
      case "blog":
        return <BlogPage onNavigate={handleNavigate} />;
      case "blogdetail":
        return <BlogDetailPage onNavigate={handleNavigate} />;
      case "demo":
        return <DemoPage onNavigate={handleNavigate} />;
      case "terms":
        return <TermsPage />;
      case "privacy":
        return <PrivacyPage />;
      case "refund":
        return <RefundPage />;
      case "team":
        return <TeamPage onNavigate={handleNavigate} />;
      case "comparisonsHub":
        return <ComparisonsHubPage onNavigate={handleNavigate} />;
      default: {
        const alternativeConfig = getAlternativeConfigByPageKey(currentPage);
        if (alternativeConfig) {
          return (
            <AlternativePage
              config={alternativeConfig}
              onNavigate={handleNavigate}
            />
          );
        }
        return <HomePage onNavigate={handleNavigate} />;
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SeoHead page={currentPage} blogEntry={blogEntry} />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
      <Footer currentPage={currentPage} onNavigate={handleNavigate} />
      <SiteEnhancements />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontFamily: "Inter, system-ui, sans-serif",
            borderRadius: "12px",
            fontSize: "13px",
            fontWeight: "500",
          },
          classNames: {
            success:
              "border border-amber-200 bg-amber-50 text-amber-900 [&>[data-icon]]:text-amber-500",
            error:
              "border border-rose-200 bg-rose-50 text-rose-900 [&>[data-icon]]:text-rose-500",
          },
        }}
      />
    </div>
  );
}

export default App;
