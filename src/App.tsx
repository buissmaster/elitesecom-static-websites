import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { PageTransition } from "./components/PageTransition";
import { SiteEnhancements } from "./components/SiteEnhancements";
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
import { Toaster } from "./components/ui/sonner";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleLocationChange = () => {
      const path =
        window.location.pathname.replace(/\/+$/, "") || "/";

      if (path.startsWith("/Blog/")) {
        setCurrentPage("blogdetail");
        return;
      }

      const pageMap: Record<string, string> = {
        "/": "home",
        "/ourservices": "services",
        "/integration": "integration",
        "/customer": "customers",
        "/aboutus": "about",
        "/faqs": "faqs",
        "/Blog": "blog",
        "/pricing": "pricing",
        "/contactus": "contact",
        "/requestdemo": "demo",
        "/terms": "terms",
        "/privacy": "privacy",
        "/RefundPolicy": "refund",
        "/team": "team",
      };

      setCurrentPage(pageMap[path] || "home");
    };

    window.addEventListener("popstate", handleLocationChange);

    handleLocationChange();

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);

    const pathMap: Record<string, string> = {
      home: "/",
      services: "/ourservices",
      integration: "/integration",
      customers: "/customer",
      about: "/aboutus",
      faqs: "/faqs",
      blog: "/Blog",
      pricing: "/pricing",
      contact: "/contactus",
      demo: "/requestdemo",
      terms: "/terms",
      privacy: "/privacy",
      refund: "/RefundPolicy",
      team: "/team",
    };

    const path = pathMap[page] || "/";

    window.history.pushState({}, "", path);

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
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <AnimatePresence mode="wait">
        {/* <PageTransition pageKey={currentPage}>{renderPage()}</PageTransition> */}
        {renderPage()}
      </AnimatePresence>
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
