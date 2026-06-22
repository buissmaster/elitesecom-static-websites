import { useEffect, useState } from "react";
import {
  ArrowRight,
  Link2,
  Zap,
  ShieldCheck,
  LayoutDashboard,
  GitBranch,
  Sparkles,
} from "lucide-react";

interface IntegrationPageProps {
  onNavigate: (page: string) => void;
}

const integrations = [
  {
    name: "Amazon",
    description:
      "Sync your store to Amazon seller platform and manage inventory with unified dashboard.",
    color: "#FF9900",
    bgColor: "#FFF7ED",
    borderColor: "#FED7AA",
    cardAccent: "bg-orange-400",
    logo: "/logo-amazon.png",
    category: "Marketplace",
  },
  {
    name: "Flipkart",
    description:
      "Indian e-commerce leader. Manage orders and inventory seamlessly.",
    color: "#2874F0",
    bgColor: "#EFF6FF",
    borderColor: "#BFDBFE",
    cardAccent: "bg-blue-400",
    logo: "/logo-flipkart.png",
    category: "Marketplace",
  },
  {
    name: "Myntra",
    description:
      "Leading fashion marketplace. Manage fashion inventory and orders.",
    color: "#FF3F6C",
    bgColor: "#FFF1F2",
    borderColor: "#FECDD3",
    cardAccent: "bg-pink-400",
    logo: "/logo-myntra.png",
    category: "Fashion",
  },
  {
    name: "Shopify",
    description:
      "Manage Shopify inventory, listings, and orders from one dashboard.",
    color: "#96BF48",
    bgColor: "#F0FDF4",
    borderColor: "#BBF7D0",
    cardAccent: "bg-emerald-400",
    logo: "/logo-shopify.png",
    category: "Platform",
  },
  {
    name: "Ajio",
    description: "Fashion-focused e-commerce platform with wide reach.",
    color: "#2C3E50",
    bgColor: "#F8FAFC",
    borderColor: "#E2E8F0",
    cardAccent: "bg-slate-400",
    logo: "/logo-ajio.png",
    category: "Fashion",
  },
  {
    name: "Meesho",
    description: "Social commerce platform with 50+ Lakh SKUs.",
    color: "#F43397",
    bgColor: "#FDF2F8",
    borderColor: "#FBCFE8",
    cardAccent: "bg-fuchsia-400",
    logo: "/logo-meesho.png",
    category: "Social Commerce",
  },
  {
    name: "Snapdeal",
    description: "Massive marketplace with 500K+ sellers across categories.",
    color: "#E74C3C",
    bgColor: "#FEF2F2",
    borderColor: "#FECACA",
    cardAccent: "bg-red-400",
    logo: "/logo-snapdeal.png",
    category: "Marketplace",
  },
  {
    name: "FirstCry",
    description: "Baby care marketplace for products and parenting essentials.",
    color: "#F7941D",
    bgColor: "#FFFBEB",
    borderColor: "#FDE68A",
    cardAccent: "bg-amber-400",
    logo: "/logo-firstcry.png",
    category: "Baby Care",
  },
  {
    name: "Nykaa",
    description: "Beauty and personal care marketplace with video reviews.",
    color: "#FC2779",
    bgColor: "#FFF1F2",
    borderColor: "#FECDD3",
    cardAccent: "bg-rose-400",
    logo: "/logo-nykaa.png",
    category: "Beauty",
  },
  {
    name: "Paytm",
    description: "65M+ products in electronics, fashion, and kitchenware.",
    color: "#00BAF2",
    bgColor: "#F0F9FF",
    borderColor: "#BAE6FD",
    cardAccent: "bg-sky-400",
    logo: "/logo-paytm.png",
    category: "Payments",
  },
  {
    name: "Fynd",
    description: "Multi-platform tech empowering 2,300+ brands.",
    color: "#9B59B6",
    bgColor: "#FAF5FF",
    borderColor: "#E9D5FF",
    cardAccent: "bg-purple-400",
    logo: "/logo-fynd.png",
    category: "Platform",
  },
  {
    name: "Tata CLiQ",
    description: "Luxury marketplace for premium brand experiences.",
    color: "#3498DB",
    bgColor: "#EFF6FF",
    borderColor: "#BFDBFE",
    cardAccent: "bg-blue-400",
    logo: "/logo-tatacliq.png",
    category: "Luxury",
  },
];

export function IntegrationPage({ onNavigate }: IntegrationPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative min-h-[calc(100vh-76px)] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gold/10">
        {/* Soft floating blur effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[8%] right-[5%] w-96 h-96 bg-gold/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[3%] w-80 h-80 bg-blue-200/15 rounded-full blur-[100px]" />
          <div className="absolute top-[50%] right-[30%] w-60 h-60 bg-gold/20 rounded-full blur-[80px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          {/* Mobile: flex-col with order classes / Desktop: 2-col grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* TEXT — mobile: order-1, desktop: left column */}
            <div
              className={`order-1 lg:order-none text-left space-y-4 lg:space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-700 text-sm font-medium">
                <Link2 className="w-4 h-4 " />
                20+ Platform Integrations
              </div>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl  leading-[1.1]">
                Connect Your <span className="text-gold">Store</span> to Leading{" "}
                <span className="text-gold">Platforms</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Seamlessly integrate with Amazon, Flipkart, Myntra, Shopify and
                more. Manage all your sales channels from one powerful
                dashboard.
              </p>
            </div>

            {/* IMAGE — mobile: order-2 (between text and buttons), desktop: right column */}
            <div
              className={`order-2 lg:order-none lg:row-span-3 flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <img
                src="/integration-hero-transparent.png"
                alt="E-commerce marketplace integration hub"
                className="w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[540px] h-auto object-contain animate-float-3d select-none"
                draggable={false}
              />
            </div>

            {/* BUTTONS — mobile: order-3 (after image), desktop: left column */}
            <div className="order-3 lg:order-none w-full">
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate("demo")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gold  font-bold hover:shadow-lg hover:shadow-gold/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate("pricing")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-slate-200 text-slate-700 font-semibold hover:border-gold/60 hover:text-gold transition-all duration-300 w-full sm:w-auto"
                >
                  View Pricing
                </button>
              </div>
            </div>

            {/* STATS — mobile: order-4, desktop: left column */}
            <div className="order-4 lg:order-none">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-2">
                <div>
                  <div className="text-xl sm:text-2xl font-bold ">12+</div>
                  <div className="text-xs sm:text-sm text-slate-500">
                    Marketplaces
                  </div>
                </div>
                <div className="w-px h-10 bg-slate-200 hidden sm:block" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold ">50M+</div>
                  <div className="text-xs sm:text-sm text-slate-500">
                    Orders Synced
                  </div>
                </div>
                <div className="w-px h-10 bg-slate-200 hidden sm:block" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold ">99.9%</div>
                  <div className="text-xs sm:text-sm text-slate-500">
                    Uptime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INTEGRATIONS GRID ═══ */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[5%] right-[10%] w-72 h-72 bg-slate-200/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-[10%] left-[5%] w-64 h-64 bg-blue-100/20 rounded-full blur-[70px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className={`group relative rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 60}ms`,
                  backgroundColor: integration.bgColor,
                  borderColor: integration.borderColor,
                }}
              >
                {/* Card content — flex-1 pushes accent line to bottom */}
                <div className="p-6 pb-5 flex-1 flex flex-col">
                  {/* Logo + Name row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img
                        src={integration.logo}
                        alt={`${integration.name} logo`}
                        className="w-[82%] h-[82%] object-contain"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-base ">
                        {integration.name}
                      </h3>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/70 text-slate-500">
                        {integration.category}
                      </span>
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
                    {integration.description}
                  </p>
                </div>
                {/* Bottom colored accent line — always at the bottom edge */}
                <div
                  className="h-[3px] w-full"
                  style={{ backgroundColor: integration.color, opacity: 0.5 }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ═══ FEATURES SECTION — Why Choose Us ═══ */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#FAF9F6] relative overflow-hidden">
        {/* Subtle yellow radial glow behind heading */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-[-60px] left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: 500,
              height: 300,
              background:
                "radial-gradient(ellipse, rgba(245,184,0,0.10) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        {/* Light dotted patterns on sides */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {/* Left side dots */}
          <div className="absolute top-[20%] left-[3%] w-1.5 h-1.5 rounded-full bg-gold/15" />
          <div className="absolute top-[35%] left-[5%] w-1 h-1 rounded-full bg-gold/12" />
          <div className="absolute top-[50%] left-[2%] w-1 h-1 rounded-full bg-gold/10" />
          <div className="absolute top-[65%] left-[6%] w-1.5 h-1.5 rounded-full bg-gold/14" />
          <div className="absolute top-[80%] left-[4%] w-1 h-1 rounded-full bg-gold/10" />
          {/* Right side dots */}
          <div className="absolute top-[25%] right-[4%] w-1 h-1 rounded-full bg-gold/12" />
          <div className="absolute top-[40%] right-[2%] w-1.5 h-1.5 rounded-full bg-gold/15" />
          <div className="absolute top-[55%] right-[5%] w-1 h-1 rounded-full bg-gold/10" />
          <div className="absolute top-[70%] right-[3%] w-1.5 h-1.5 rounded-full bg-gold/13" />
          <div className="absolute top-[85%] right-[6%] w-1 h-1 rounded-full bg-gold/10" />
        </div>

        {/* Minimal dashed connector lines */}
        <svg
          className="absolute top-[30%] left-[4%] pointer-events-none hidden lg:block"
          width="60"
          height="2"
          style={{ opacity: 0.1 }}
        >
          <line
            x1="0"
            y1="1"
            x2="60"
            y2="1"
            stroke="#F5B800"
            strokeWidth="1"
            strokeDasharray="6 4"
          />
        </svg>
        <svg
          className="absolute top-[60%] right-[4%] pointer-events-none hidden lg:block"
          width="60"
          height="2"
          style={{ opacity: 0.1 }}
        >
          <line
            x1="0"
            y1="1"
            x2="60"
            y2="1"
            stroke="#F5B800"
            strokeWidth="1"
            strokeDasharray="6 4"
          />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Eyebrow */}
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#F5B800" }}
            >
              Why Choose Us
            </span>

            {/* Heading with sparkles */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-gold/60 hidden sm:block" />
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl ">
                Powerful Integration Features
              </h2>
              <Sparkles className="w-5 h-5 text-gold/60 hidden sm:block" />
            </div>

            {/* Subheading */}
            <p className="text-lg text-slate-600">
              Everything you need to manage multiple sales channels efficiently.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Real-time Sync",
                description:
                  "Instant synchronization across all your connected platforms.",
              },
              {
                icon: ShieldCheck,
                title: "99.9% Uptime",
                description:
                  "Reliable connections powered by enterprise-grade infrastructure.",
              },
              {
                icon: LayoutDashboard,
                title: "One Dashboard",
                description:
                  "Manage every marketplace and sales channel from a single interface.",
              },
              {
                icon: GitBranch,
                title: "Smart Routing",
                description:
                  "Automatically route orders to the best fulfillment location.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group bg-white rounded-[24px] p-7 text-center transition-all duration-300"
                style={{
                  boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 45px rgba(15,42,68,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 24px rgba(0,0,0,0.04)";
                }}
              >
                {/* Icon container */}
                <div
                  className="rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300"
                  style={{
                    width: 84,
                    height: 84,
                    background: "#FFF9E6",
                    boxShadow: "0 0 30px rgba(244,180,0,0.12)",
                  }}
                >
                  <feature.icon
                    className="w-9 h-9"
                    style={{ color: "#E3A900" }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg  mb-2">{feature.title}</h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FEF9E7]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl  mb-6">
            Ready to Connect <span className="text-gold">Your Channels?</span>
          </h2>
          <p className="text-lg text-slate-700/80 mb-10 max-w-2xl mx-auto">
            Start integrating your sales channels today and watch your business
            grow exponentially
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate("demo")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-300"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-slate-900/30  font-semibold hover:bg-slate-900/10 transition-all duration-300"
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
