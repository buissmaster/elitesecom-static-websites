import { useState } from "react";
import {
  Briefcase,
  Package,
  Users,
  Info,
  Rss,
  MessageCircle,
  Mail,
  Phone,
  Monitor,
  Headphones,
  Tag,
  Shield,
  FileText,
  ChevronDown,
  ArrowLeftRight,
} from "lucide-react";
import { AppLink } from "./AppLink";
import { FOOTER_SOCIAL_LINKS } from "@/lib/brandProfiles";
import { Linkedin } from "lucide-react";

interface FooterProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Footer({ currentPage, onNavigate }: FooterProps) {
  // Track open state for collapsible mobile categories
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    product: false,
    contact: false,
    legal: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-shell-footer bg-black text-slate-300 w-full border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* LEFT — Brand Branding & Description */}
          <div className="lg:col-span-5 flex flex-col items-start w-full">
            <AppLink
              page="home"
              onNavigate={handleNavClick}
              aria-label="ElitesEcom home"
              className="mb-5 focus:outline-none opacity-90 hover:opacity-100 transition-opacity"
            >
              <img
                src="/elitesecom-full-white-logo.png"
                alt="ElitesEcom"
                className="h-10 w-auto object-contain"
              />
            </AppLink>
            {/* Removed max-w-[340px] so it spans nicely */}
            <h3 className="text-white font-semibold text-lg md:text-xl leading-snug mb-3 w-full">
              Order Management System (OMS) for ecommerce sellers
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed w-full">
              Elitesecom OMS simplifies multichannel order management, payment
              reconciliation, return reconciliation, inventory sync, and
              warehouse operations — so you can scale without operational chaos.
            </p>
          </div>

          {/* RIGHT — Collapsible Content Blocks */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Product Category */}
              <div className="border-b border-slate-900 sm:border-none pb-4 sm:pb-0">
                <button
                  onClick={() => toggleSection("product")}
                  className="w-full flex items-center justify-between sm:cursor-default focus:outline-none mb-0 sm:mb-6"
                >
                  <h4 className="text-gold font-semibold text-xs uppercase tracking-widest py-2 sm:py-0">
                    Product
                  </h4>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 sm:hidden ${
                      openSections.product ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <ul
                  className={`space-y-3.5 mt-3 sm:mt-0 sm:block ${openSections.product ? "block" : "hidden"}`}
                >
                  {[
                    { name: "Services", page: "services", icon: Briefcase },
                    { name: "Integration", page: "integration", icon: Package },
                    { name: "Our Clients", page: "customers", icon: Users },
                    { name: "About us", page: "about", icon: Info },
                    { name: "Blog", page: "blog", icon: Rss },
                    { name: "Faqs", page: "faqs", icon: MessageCircle },
                    {
                      name: "OMS Comparisons",
                      page: "comparisonsHub",
                      icon: ArrowLeftRight,
                    },
                  ].map((item) => (
                    <li key={item.page}>
                      <AppLink
                        page={item.page}
                        onNavigate={handleNavClick}
                        className="group flex items-center gap-3 text-sm text-slate-400 hover:text-gold transition-colors duration-200 w-full text-left"
                      >
                        <item.icon className="w-4 h-4 text-slate-500 group-hover:text-gold transition-colors duration-200 shrink-0" />
                        <span>{item.name}</span>
                      </AppLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Category */}
              <div className="border-b border-slate-900 sm:border-none pb-4 sm:pb-0">
                <button
                  onClick={() => toggleSection("contact")}
                  className="w-full flex items-center justify-between sm:cursor-default focus:outline-none mb-0 sm:mb-6"
                >
                  <h4 className="text-gold font-semibold text-xs uppercase tracking-widest py-2 sm:py-0">
                    Contact
                  </h4>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 sm:hidden ${
                      openSections.contact ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <ul
                  className={`space-y-3.5 mt-3 sm:mt-0 sm:block ${openSections.contact ? "block" : "hidden"}`}
                >
                  <li>
                    <a
                      href="mailto:contact@elitesecom.ai"
                      className="group flex items-center gap-3 text-sm text-slate-400 hover:text-gold transition-colors duration-200 break-all"
                    >
                      <Mail className="w-4 h-4 text-slate-500 group-hover:text-gold transition-colors duration-200 shrink-0" />
                      <span>contact@elitesecom.ai</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+919403893414"
                      className="group flex items-center gap-3 text-sm text-slate-400 hover:text-gold transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4 text-slate-500 group-hover:text-gold transition-colors duration-200 shrink-0" />
                      <span>+91 94038 93414</span>
                    </a>
                  </li>
                  <li>
                    <AppLink
                      page="demo"
                      onNavigate={handleNavClick}
                      className="group flex items-center gap-3 text-sm text-slate-400 hover:text-gold transition-colors duration-200 w-full text-left"
                    >
                      <Monitor className="w-4 h-4 text-slate-500 group-hover:text-gold transition-colors duration-200 shrink-0" />
                      <span>Request a Demo</span>
                    </AppLink>
                  </li>
                  <li>
                    <AppLink
                      page="contact"
                      onNavigate={handleNavClick}
                      className="group flex items-center gap-3 text-sm text-slate-400 hover:text-gold transition-colors duration-200 w-full text-left"
                    >
                      <Headphones className="w-4 h-4 text-slate-500 group-hover:text-gold transition-colors duration-200 shrink-0" />
                      <span>Talk to Us</span>
                    </AppLink>
                  </li>
                </ul>
              </div>

              {/* Legal Category */}
              <div className="pb-2 sm:pb-0">
                <button
                  onClick={() => toggleSection("legal")}
                  className="w-full flex items-center justify-between sm:cursor-default focus:outline-none mb-0 sm:mb-6"
                >
                  <h4 className="text-gold font-semibold text-xs uppercase tracking-widest py-2 sm:py-0">
                    Legal
                  </h4>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 sm:hidden ${
                      openSections.legal ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <ul
                  className={`space-y-3.5 mt-3 sm:mt-0 sm:block ${openSections.legal ? "block" : "hidden"}`}
                >
                  {[
                    { name: "Terms & conditions", page: "terms", icon: Tag },
                    { name: "Privacy & Policy", page: "privacy", icon: Shield },
                    { name: "Refund Policy", page: "refund", icon: FileText },
                  ].map((item) => (
                    <li key={item.page}>
                      <AppLink
                        page={item.page}
                        onNavigate={handleNavClick}
                        className={`group flex items-center gap-3 text-sm hover:text-gold transition-all duration-300 ${
                          currentPage === item.page
                            ? "text-gold"
                            : "text-slate-400"
                        }`}
                      >
                        <item.icon
                          className={`w-4 h-4 group-hover:text-gold transition-colors duration-200 shrink-0 ${
                            currentPage === item.page
                              ? "text-gold"
                              : "text-slate-500"
                          }`}
                        />
                        <span>{item.name}</span>
                      </AppLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar — Sub-footer with Copyright & Socials */}
      <div className="border-t border-slate-900 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 tracking-wide text-center sm:text-left">
            Copyright &copy; 2026{" "}
            <span className="text-gold font-medium">Elitesecom.ai</span>. All
            Rights Reserved.
          </p>

          <div className="flex items-center gap-5">
            {FOOTER_SOCIAL_LINKS.map((social) => (
              <a
                key={social.key}
                href={social.href}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="hover:-translate-y-0.5 transition-transform duration-200 text-slate-400 hover:text-gold"
              >
                {social.key === "linkedin" ? (
                  <Linkedin className="w-6 h-6" />
                ) : (
                  <img
                    src={
                      social.key === "youtube"
                        ? "/social-yt-v2.png"
                        : social.key === "instagram"
                          ? "/social-ig-v2.png"
                          : "/social-fb-v2.png"
                    }
                    alt={social.label}
                    className="w-6 h-6 object-contain"
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
