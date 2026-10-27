import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

interface ServiceCardData {
  title: string;
  description: string;
  features: string[];
  hero: string;
  color: string;
  glowColor: string;
}

const serviceCards: ServiceCardData[] = [
  {
    title: "Multichannel Order Management",
    description:
      "Bring orders from supported marketplaces and ecommerce stores into a shared workflow. Review order status and coordinate fulfillment without checking each channel separately.",
    features: [
      "Centralized order view",
      "Order status tracking",
      "Fulfillment coordination",
      "Supported channel connections",
    ],
    hero: "/services-1.webp",
    color: "#F5B800",
    glowColor: "rgba(245,184,0,0.15)",
  },
  {
    title: "Inventory Management",
    description:
      "Review stock across connected sales channels and coordinate inventory updates. Shared inventory visibility helps teams investigate mismatches before acting on availability.",
    features: [
      "Stock visibility",
      "Connected-channel inventory",
      "Inventory status review",
      "Inventory synchronization",
    ],
    hero: "/services-2.webp",
    color: "#8B5CF6",
    glowColor: "rgba(139,92,246,0.15)",
  },
  {
    title: "Warehouse Management System",
    description:
      "Coordinate warehouse tasks with order fulfillment, from receiving and picking through packing and dispatch. A connected workflow helps teams follow orders as they move through the warehouse.",
    features: [
      "Receiving and dispatch workflows",
      "Pick and pack workflows",
      "Warehouse stock visibility",
      "Order-to-fulfillment handoffs",
    ],
    hero: "/services-3.webp",
    color: "#10B981",
    glowColor: "rgba(16,185,129,0.15)",
  },
  {
    title: "Shipping & Label Generation",
    description:
      "Generate shipping labels through supported marketplace and courier integrations. Keeping label processing with order workflows can reduce repeated data entry during dispatch.",
    features: [
      "Supported courier connections",
      "Bulk label workflows",
      "Label generation",
      "Shipment status coordination",
    ],
    hero: "/1label.webp",
    color: "#3B82F6",
    glowColor: "rgba(59,130,246,0.15)",
  },
  {
    title: "Payment & Return Reconciliation",
    description:
      "Compare marketplace settlements with order records and review return or refund differences. This gives finance teams a shared place to identify records that need follow-up.",
    features: [
      "Settlement-to-order matching",
      "Payment reconciliation",
      "Return and refund review",
    ],
    hero: "/services-5.webp",
    color: "#EC4899",
    glowColor: "rgba(236,72,153,0.15)",
  },
  {
    title: "Smart Analytics & Reports",
    description:
      "Use dashboards and reports to review sales, inventory, and channel performance. These views help operations teams find the information they need for routine decisions.",
    features: [
      "Sales analytics",
      "Inventory reports",
      "Channel performance",
      "Custom dashboards",
    ],
    hero: "/analytics.webp",
    color: "#A78BFA",
    glowColor: "rgba(167,139,250,0.15)",
  },
  {
    title: "Mobile App",
    description:
      "Access key ecommerce order and inventory information through the mobile application when away from a desktop workspace.",
    features: [
      "Mobile order access",
      "Inventory visibility",
      "Operational information",
      "Access while away from a desktop",
    ],
    hero: "/phone.webp",
    color: "#F97316",
    glowColor: "rgba(249,115,22,0.15)",
  },
  {
    title: "Listing Management",
    description:
      "Manage product listings across supported marketplaces from a shared workflow. Centralizing listing tasks helps teams maintain product information without repeating edits in every seller panel.",
    features: [
      "Bulk listing creation and updates",
      "Marketplace listing workflows",
      "Product information management",
      "Supported listing synchronization",
    ],
    hero: "/listing.webp",
    color: "#F5B800",
    glowColor: "rgba(245,184,0,0.15)",
  },
  {
    title: "Security & Compliance",
    description:
      "Review Elitesecom's documented security controls, data handling practices, and certifications on the Security & Compliance page.",
    features: [
      "Security control information",
      "Data handling practices",
      "Published certifications",
      "Security documentation",
    ],
    hero: "/shield.webp",
    color: "#14B8A6",
    glowColor: "rgba(20,184,166,0.15)",
  },
];

/* ─── Individual Service Card ─── */
function ServiceCard({
  card,
  index,
  onNavigate,
}: {
  card: ServiceCardData;
  index: number;
  onNavigate: (page: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`feature-card group relative bg-white rounded-2xl border border-slate-100/80 overflow-hidden transition-all duration-500 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 2) * 120}ms` }}
    >
      {/* Full-card centered ambient glow — fills entire card, fades to edges */}
      <div
        className="absolute inset-0 pointer-events-none card-center-glow"
        style={{
          background: `radial-gradient(ellipse at 55% 45%, ${card.glowColor} 0%, ${card.glowColor.replace("0.15", "0.08")} 35%, transparent 65%)`,
        }}
      />

      <div className="relative flex flex-col lg:flex-row h-full z-10">
        {/* LEFT: Text Content (60%) */}
        <div className="flex-1 p-6 sm:p-7 lg:p-8 flex flex-col justify-center min-w-0">
          {/* Label */}
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] mb-3"
            style={{ color: card.color }}
          >
            <span
              className="w-6 h-[2px] rounded-full"
              style={{ backgroundColor: card.color }}
            />
            Feature 0{index + 1}
          </span>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold  mb-3 leading-snug">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-5 line-clamp-4">
            {card.description}
          </p>

          {/* Features list */}
          <ul className="space-y-2 mb-6">
            {card.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2.5 text-sm text-slate-600"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke={card.color}
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M5 8L7 10L11 6"
                    stroke={card.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-medium">{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => onNavigate("demo")}
            className="inline-flex items-center gap-2 text-sm font-bold group/btn transition-all hover:gap-3 mt-auto"
            style={{ color: card.color }}
          >
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>

        {/* RIGHT: Big Visual */}
        <div className="relative flex items-center justify-center lg:w-[46%] min-h-[280px] sm:min-h-[340px] lg:min-h-0 overflow-hidden">
          {/* 3D Icon — large and dominant */}
          <img
            src={card.hero}
            alt={card.title}
            className="card-visual relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain transition-transform duration-500 ease-out group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
   <>
    <div className="">
      {/* ═══ Hero ═══ */}
      <section className="relative min-h-[calc(100vh-76px)] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gold/10">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gold-50/30" />

        {/* Floating blur circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-[10%] w-72 h-72 bg-purple-200/20 rounded-full blur-[80px] animate-float-slow" />
          <div
            className="absolute top-[40%] right-[5%] w-96 h-96 bg-blue-200/15 rounded-full blur-[100px] animate-float-slow"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-[10%] left-[30%] w-64 h-64 bg-gold-200/20 rounded-full blur-[70px] animate-float-slow"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="absolute top-[60%] right-[25%] w-48 h-48 bg-emerald-200/15 rounded-full blur-[60px] animate-float-slow"
            style={{ animationDelay: "1s" }}
          />

          {/* Small decorative dots */}
          {/* <div className="absolute top-[35%] left-[15%] w-1.5 h-1.5 rounded-full bg-purple-300/40" />
          <div className="absolute bottom-[25%] right-[15%] w-2 h-2 rounded-full bg-blue-300/40" />
          <div className="absolute top-[55%] left-[8%] w-1 h-1 rounded-full bg-emerald-300/40" /> */}
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1000 ease-out ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Label */}
            <span
              className={`inline-block text-xs font-bold uppercase tracking-[0.25em] mb-6 transition-all duration-700 delay-100 ${
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ color: "#94a3b8" }}
            >
              Our OMS Services
            </span>

            {/* Main Heading */}
            <h1
              className={`font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl  mb-6 leading-[1.1] tracking-tight transition-all duration-700 delay-200 ${
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Order Management System{" "}
              <span className="text-gold">Features</span> &{" "}
              <br className="hidden sm:block" />
              Reconciliation Tools
            </h1>

            {/* Subheading */}
            <p
              className={`text-base sm:text-lg lg:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-300 ${
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Elitesecom OMS helps marketplace sellers, D2C brands, and ecommerce
              operations teams coordinate orders, inventory, warehouse
              workflows, shipping, listings, reconciliation, and reports across
              supported sales channels.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Feature Cards Grid ═══ */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {serviceCards.map((card, index) => (
              <ServiceCard
                key={card.title}
                card={card}
                index={index}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
   </> 
  );
}
