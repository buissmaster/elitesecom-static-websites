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
import { TeamPage } from "./pages/TeamPage";
import { SecurityPage } from "./pages/SecurityPage";
import { AmazonSpApiSecurityPage } from "./pages/AmazonSpApiSecurityPage";
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

  const heroImagePreload = (() => {
    switch (currentPage) {
      case "home":
        return {
          href: "/hero-homepage-800w.webp",
          imagesrcset: "/hero-homepage-400w.webp 400w, /hero-homepage-800w.webp 800w, /hero-homepage-1600w.webp 1600w",
          imagesizes: "(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px",
        };
      case "integration":
        return {
          href: "/integration-hero-800w.webp",
          imagesrcset: "/integration-hero-400w.webp 400w, /integration-hero-800w.webp 800w, /integration-hero-1600w.webp 1600w",
          imagesizes: "(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px",
        };
      case "customers":
        return {
          href: "/customer-hero-800w.webp",
          imagesrcset: "/customer-hero-400w.webp 400w, /customer-hero-800w.webp 800w, /customer-hero-1600w.webp 1600w",
          imagesizes: "(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px",
        };
      case "faqs":
        return {
          href: "/faq-hero-800.webp",
          imagesrcset: "/faq-hero-400.webp 400w, /faq-hero-800.webp 800w, /faq-hero-1600.webp 1600w",
          imagesizes: "(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px",
        };
      case "team":
        return {
          href: "/team-hero-800.webp",
          imagesrcset: "/team-hero-400.webp 400w, /team-hero-800.webp 800w, /team-hero-1600.webp 1600w",
          imagesizes: "(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px",
        };
      case "about":
        return {
          href: "/about-character-800w.webp",
          imagesrcset: "/about-character-400w.webp 400w, /about-character-800w.webp 800w, /about-character-1600w.webp 1600w",
          imagesizes: "(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px",
        };
      case "blog":
        return {
          href: "/blog-main-800.webp",
          imagesrcset: "/blog-main-400.webp 400w, /blog-main-800.webp 800w, /blog-main-1600.webp 1600w",
          imagesizes: "(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px",
        };
      default:
        return null;
    }
  })();

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
        return <PrivacyPage onNavigate={handleNavigate} />;
      // case "refund":
      //   return <RefundPage />;
    
      case "team":
        return <TeamPage onNavigate={handleNavigate} />;
      case "security":
        return <SecurityPage onNavigate={handleNavigate} />;
      case "amazon-sp-api-security":
        return <AmazonSpApiSecurityPage onNavigate={handleNavigate} />;
      // case "comparisonsHub":
      //   return <ComparisonsHubPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      <SeoHead page={currentPage} blogEntry={blogEntry} heroImagePreload={heroImagePreload} />
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
