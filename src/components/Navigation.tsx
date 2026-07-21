import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AppLink } from "./AppLink";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredPage, setHoveredPage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", page: "home" },
    { name: "Services", page: "services" },
    { name: "Integration", page: "integration" },
    { name: "Customer", page: "customers" },
    { name: "About Us", page: "about" },
    { name: "Our Team", page: "team" },
    { name: "FAQs", page: "faqs" },
    { name: "Blog", page: "blog" },
    { name: "Compare", page: "comparisonsHub" },
    { name: "Pricing", page: "pricing" },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Desktop Navbar Wrapper */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ${
          isScrolled ? "top-4 lg:top-6 px-4" : "top-0 px-0"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className={`w-full pointer-events-auto transition-all duration-500 backdrop-blur-[18px] ${
            isScrolled
              ? "max-w-[1150px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-[40px] px-2 py-2"
              : "max-w-full shadow-none rounded-none px-4 py-3 lg:py-5"
          }`}
        >
          <div
            className={`mx-auto flex items-center justify-between transition-all duration-500 ${
              isScrolled ? "px-4 lg:px-6 max-w-full" : "max-w-[1280px] px-4"
            }`}
          >
            {/* Logo */}
            <AppLink
              page="home"
              onNavigate={handleNavClick}
              aria-label="ElitesEcom home"
              className="flex items-center flex-shrink-0 z-20 outline-none hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              <img
                src="/elitesecom-full-black-logo.png"
                alt="ElitesEcom"
                className="h-6 lg:h-7 w-auto object-contain"
              />
            </AppLink>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div
                className="flex items-center relative"
                onMouseLeave={() => setHoveredPage(null)}
              >
                {navLinks.map((link) => {
                  const isActive =
                    currentPage === link.page ||
                    (currentPage === "blogdetail" && link.page === "blog") ||
                    (link.page === "comparisonsHub" &&
                      (currentPage === "comparisonsHub" ||
                        currentPage.endsWith("Alt")));
                  const isHovered = hoveredPage === link.page;
                  const hasPill = hoveredPage ? isHovered : isActive;

                  return (
                    <AppLink
                      key={link.page}
                      page={link.page}
                      onNavigate={handleNavClick}
                      onMouseEnter={() => setHoveredPage(link.page)}
                      className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 active:scale-95 outline-none ${
                        hasPill
                          ? "text-slate-900"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {hasPill && (
                        <motion.div
                          layoutId="nav-sliding-pill"
                          className="absolute inset-0 rounded-full -z-10 bg-gradient-to-br from-gold to-gold/70 shadow-sm shadow-gold/20"
                          transition={{
                            type: "spring",
                            bounce: 0.35,
                            duration: 1,
                          }}
                        />
                      )}

                      <span className="relative z-10 block">{link.name}</span>
                    </AppLink>
                  );
                })}
              </div>
            </div>

            {/* Desktop Contact */}
            <div className="flex items-center gap-2">
              <AppLink
                page="contact"
                onNavigate={handleNavClick}
                className="site-shell-cta relative px-6 py-2.5 rounded-full bg-slate-900 text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-slate-900/20 hover:bg-gold hover:text-slate-900 outline-none hidden lg:block"
              >
                Contact Us
              </AppLink>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2 rounded-full hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all duration-300"
              >
                <Menu className="w-6 h-6 text-slate-700" />
              </button>
            </div>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-[998] bg-black/30 backdrop-blur-md"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              className="lg:hidden fixed top-0 right-0 h-screen w-full sm:max-w-[420px] bg-white z-[999] shadow-2xl overflow-y-auto overflow-x-hidden"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b px-6 py-5 flex items-center justify-between">
                <motion.img
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  src="/logo.png"
                  alt="ElitesEcom"
                  className="h-7 w-auto"
                />

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Links */}
              <div className="p-6">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.page}
                      initial={{
                        opacity: 0,
                        x: 40,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.1 + index * 0.06,
                      }}
                    >
                      <AppLink
                        page={link.page}
                        onNavigate={handleNavClick}
                        className={`block w-full text-left px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 hover:bg-slate-100 hover:translate-x-2 active:scale-[0.98] ${
                          currentPage === link.page ||
                          (currentPage === "blogdetail" && link.page === "blog") ||
                          (link.page === "comparisonsHub" &&
                            (currentPage === "comparisonsHub" ||
                              currentPage.endsWith("Alt")))
                            ? "bg-gold/10 text-yellow-600"
                            : "text-slate-700"
                        }`}
                      >
                        {link.name}
                      </AppLink>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
