import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Zap,
  Package,
  TrendingUp,
  BarChart3,
  Shield,
  Truck,
  FileText,
  Smartphone,
  Layers,
  Calculator,
  ShoppingCart,
  ShoppingBag,
  Store,
  Tag,
  Heart,
  Box,
  Gift,
  Star,
  Sparkles,
  ShieldCheck,
  Server,
} from "lucide-react";

import { motion } from "framer-motion";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

interface Feature {
  icon: any;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Package,
    title: "Multichannel Order Management",
    description:
      "Manage orders across all sales channels from one platform. Track shipments, sync inventory, and ensure timely deliveries with centralized processing.",
  },
  {
    icon: Layers,
    title: "Inventory Management",
    description:
      "Track and optimize inventory in real time. Reduce stockouts, minimize waste, and keep procurement seamless with smart automation.",
  },
  {
    icon: Truck,
    title: "Warehouse Management",
    description:
      "Streamline warehouse operations end-to-end. Improve picking efficiency, reduce errors, and maximize space utilization.",
  },
  {
    icon: FileText,
    title: "One Click Label Generation",
    description:
      "Generate shipping labels instantly across all platforms. Compatible with every major courier — one click, zero hassle.",
  },
  {
    icon: Calculator,
    title: "Accounting & Reconciliation",
    description:
      "Automate financial tracking, reporting, and payment reconciliation. Keep your books accurate with minimal effort.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Make better decisions with real-time insights and comprehensive reports. Spot growth opportunities at a glance.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description:
      "Run your business from anywhere with our powerful mobile app. Access key features and stay connected on the go.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with 99.9% uptime. Your data stays protected with full regulatory compliance.",
  },
  {
    icon: Server,
    title: "Dedicated Server Infrastructure",
    description:
      "Powered by 20+ dedicated AWS servers to ensure high uptime, fast processing, enterprise-grade security, and reliable performance for your growing ecommerce business.",
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHoveredFeatures, setIsHoveredFeatures] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [integrationVisible, setIntegrationVisible] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const integrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // Auto-cycle features accordion every 3.5 seconds when visible and not hovered
  useEffect(() => {
    if (!featuresVisible || isHoveredFeatures) return;
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev >= features.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [featuresVisible, isHoveredFeatures, features.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntegrationVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (integrationRef.current) {
      observer.observe(integrationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const integrations = [
    {
      name: "Amazon",
      subtitle: "Global Marketplace",
      logo: "/logo-amazon.png",
      bg: "#FFF7ED",
      border: "#FED7AA",
      text: "#EA580C",
      deco: [
        { Icon: Package, t: "10%", l: "6%", s: 28 },
        { Icon: ShoppingCart, b: "12%", r: "8%", s: 22 },
        { Icon: Box, t: "55%", r: "6%", s: 18 },
        { Icon: Truck, b: "10%", l: "12%", s: 16 },
      ],
    },
    {
      name: "Flipkart",
      subtitle: "India's Favorite",
      logo: "/logo-flipkart.png",
      bg: "#EFF6FF",
      border: "#BFDBFE",
      text: "#2563EB",
      deco: [
        { Icon: ShoppingCart, t: "10%", r: "8%", s: 26 },
        { Icon: Tag, b: "14%", l: "8%", s: 20 },
        { Icon: Package, t: "52%", l: "10%", s: 18 },
        { Icon: Star, b: "10%", r: "12%", s: 16 },
      ],
    },
    {
      name: "Myntra",
      subtitle: "Fashion Destination",
      logo: "/logo-myntra.png",
      bg: "#FFF1F2",
      border: "#FECDD3",
      text: "#DB2777",
      deco: [
        { Icon: ShoppingBag, t: "10%", r: "8%", s: 24 },
        { Icon: Heart, b: "14%", l: "10%", s: 20 },
        { Icon: Sparkles, t: "54%", l: "8%", s: 18 },
        { Icon: Tag, b: "10%", r: "10%", s: 16 },
      ],
    },
    {
      name: "Shopify",
      subtitle: "Build Your Store",
      logo: "/logo-shopify.png",
      bg: "#F0FDF4",
      border: "#BBF7D0",
      text: "#16A34A",
      deco: [
        { Icon: Store, t: "10%", l: "8%", s: 26 },
        { Icon: ShoppingBag, b: "14%", r: "8%", s: 20 },
        { Icon: Box, t: "54%", r: "10%", s: 18 },
        { Icon: Gift, b: "10%", l: "12%", s: 16 },
      ],
    },
    {
      name: "Ajio",
      subtitle: "Trendy Fashion",
      logo: "/logo-ajio.png",
      bg: "#F0F9FF",
      border: "#BAE6FD",
      text: "#0891B2",
      deco: [
        { Icon: Tag, t: "10%", l: "10%", s: 24 },
        { Icon: ShoppingBag, b: "14%", r: "8%", s: 20 },
        { Icon: Sparkles, t: "52%", r: "10%", s: 18 },
        { Icon: Heart, b: "10%", l: "10%", s: 16 },
      ],
    },
    {
      name: "Meesho",
      subtitle: "Reseller Platform",
      logo: "/logo-meesho.png",
      bg: "#FAF5FF",
      border: "#E9D5FF",
      text: "#9333EA",
      deco: [
        { Icon: ShoppingCart, t: "10%", l: "8%", s: 24 },
        { Icon: Package, b: "14%", r: "10%", s: 20 },
        { Icon: Store, t: "54%", r: "8%", s: 18 },
        { Icon: Tag, b: "10%", l: "12%", s: 16 },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ═══════════════ Hero Section ═══════════════ */}
      <section
        className="relative min-h-[calc(100vh-76px)] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gold/10"
        id="hero-home"
      >
        {/* Decorative blurred orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-lavender-200/30 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          {/* Desktop: side-by-side grid  |  Mobile: stacked flex */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16">
            {/* ═════ LEFT COLUMN: Badge / Heading / Description / Buttons / Trust ═════ */}
            <div className="flex flex-col justify-center space-y-5 lg:space-y-6">
              {/* Badge */}
              <div
                className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-700 text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  #1 Order Management System in India
                </div>
              </div>

              {/* Heading */}
              <div
                className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] ">
                  Your Entire{" "}
                  <span className="text-gold-500">Order Workflow</span> is
                  Managed In <span className="text-gold-500">One Place</span>
                </h1>
              </div>

              {/* Description */}
              <div
                className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <p className="text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed">
                  Streamline your inventory tracking with ElitesEcom's
                  multichannel order and warehouse management system. Manage
                  your entire order workflow in one place.
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className={`hidden lg:flex transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => onNavigate("demo")}
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold  font-semibold hover:shadow-glow-lg transition-all duration-300 hover:scale-105 animate-pulse-glow w-full sm:w-auto"
                  >
                    Request Demo
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={() => onNavigate("services")}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-semibold hover:border-gold hover:text-gold-600 transition-all duration-300 w-full sm:w-auto"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Trust Badge — directly under buttons */}
              <div
                className={`hidden lg:flex transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="flex items-center gap-6 pt-2 justify-center lg:justify-start">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={`/team-${i}.jpg`}
                        alt={`User ${i}`}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-gold fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-slate-600">
                      Trusted by <span className="font-semibold ">2500+</span>{" "}
                      businesses
                    </p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => {
                  window.history.pushState(
                    {},
                    "",
                    "/aboutus?section=certificates",
                  );
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }}
                className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 cursor-pointer hover:shadow-md transition-all w-fit"
              >
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold text-slate-800">
                  Certifications & Compliance
                </span>
              </div>
            </div>

            {/* ═════ RIGHT COLUMN: Character + Floating Cards ═════ */}
            <div
              className={`relative flex items-center justify-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
            >
              {/* Character wrapper — sized to image, no background, no box */}
              <div className="relative mx-auto" style={{ maxWidth: "100%" }}>
                <img
                  src="/Hero-final.png"
                  alt="ElitesEcom Character"
                  className="w-full max-w-[320px] sm:max-w-[370px] lg:max-w-[430px] xl:max-w-[500px] 2xl:max-w-[550px] animate-float"
                  style={{ display: "block" }}
                />

                {/* Top Floating Card: +47% Efficiency — near upper-right of character, ~24px gap */}
                <div
                  className="absolute z-20 bg-white rounded-2xl shadow-lg p-3 lg:p-3.5 animate-float hidden lg:flex items-center gap-2.5"
                  style={{
                    top: "16px",
                    right: "-12px",
                    animationDelay: "0.5s",
                    boxShadow:
                      "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-[18px] h-[18px] lg:w-5 lg:h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-base lg:text-lg font-bold  leading-none">
                      +47%
                    </p>
                    <p className="text-[11px] text-slate-500">Efficiency</p>
                  </div>
                </div>

                {/* Bottom Floating Card: 50M+ Orders — near lower-right of character, ~24px gap */}
                <div
                  className="absolute z-20 bg-white rounded-2xl shadow-lg p-3 lg:p-3.5 animate-float hidden lg:flex items-center gap-2.5"
                  style={{
                    bottom: "20px",
                    right: "-8px",
                    animationDelay: "1.5s",
                    boxShadow:
                      "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 lg:w-6 lg:h-6 text-gold-600" />
                  </div>
                  <div>
                    <p className="text-lg lg:text-xl font-bold  leading-none">
                      50M+
                    </p>
                    <p className="text-xs text-slate-500">Orders Processed</p>
                  </div>
                </div>
              </div>
            </div>
            {/* CTA Buttons */}
            <div
              className={`lg:hidden transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate("demo")}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold  font-semibold hover:shadow-glow-lg transition-all duration-300 hover:scale-105 animate-pulse-glow w-full sm:w-auto"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onNavigate("services")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-semibold hover:border-gold hover:text-gold-600 transition-all duration-300 w-full sm:w-auto"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Trust Badge — directly under buttons */}
            <div
              className={`lg:hidden transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="flex items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`/team-${i}.jpg`}
                      alt={`User ${i}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-gold fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600">
                    Trusted by <span className="font-semibold ">2500+</span>{" "}
                    businesses
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  window.history.pushState(
                    {},
                    "",
                    "/aboutus?section=certificates",
                  );
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }}
                className="mt-4 flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 cursor-pointer hover:shadow-md transition-all w-fit justify-self-center"
              >
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold text-slate-800">
                  Certifications & Compliance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-14 overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl  mb-6">
              Elites Your E-Commerce In{" "}
              <span className="text-gold-500">Just One Click</span>
            </h2>
            <p className="text-lg text-slate-600">
              Strong e-commerce API interfaces with all major marketplaces and
              platforms. Connect once, sell everywhere.
            </p>
          </div>

          {/* Infinite Scroll Carousel */}
          {/* <div className="relative mb-12" ref={integrationRef}> */}
          <div className="relative mb-12" ref={integrationRef}>
            {/* Gradient overlays to fade the integration cards out at the edges */}
            <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden">
              <div
                className={`flex gap-6 animate-marquee hover:[animation-play-state:paused] ${integrationVisible ? "" : "opacity-0"}`}
              >
                {/* First set */}
                {integrations.map((i) => (
                  <div key={`a-${i.name}`} className="flex-shrink-0 w-[200px]">
                    <div className="flex flex-col items-center">
                      {/* Logo Badge — ~25% outside, ~75% inside */}
                      <div className="w-[60px] h-[60px] bg-white rounded-2xl flex items-center justify-center shadow-[0_6px_24px_rgba(0,0,0,0.10)] border border-slate-100/80 z-10 -mb-[32px] p-1.5">
                        <img
                          src={i.logo}
                          alt={i.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          draggable={false}
                        />
                      </div>
                      {/* Card */}
                      <div
                        className="w-full rounded-3xl pt-12 pb-5 px-4 text-center shadow-sm border transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden"
                        style={{ backgroundColor: i.bg, borderColor: i.border }}
                      >
                        {/* Decorative background icons */}
                        <div className="absolute inset-0 pointer-events-none">
                          {i.deco.map((d, idx) => (
                            <d.Icon
                              key={idx}
                              className="absolute"
                              style={{
                                top: d.t,
                                left: d.l,
                                bottom: d.b,
                                right: d.r,
                                width: d.s,
                                height: d.s,
                                color: i.text,
                                opacity: 0.06,
                              }}
                            />
                          ))}
                        </div>
                        <h3
                          className="relative font-bold text-lg mb-1"
                          style={{ color: i.text }}
                        >
                          {i.name}
                        </h3>
                        <p className="relative text-slate-500 text-sm">
                          {i.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicated set for seamless loop */}
                {integrations.map((i) => (
                  <div key={`b-${i.name}`} className="flex-shrink-0 w-[200px]">
                    <div className="flex flex-col items-center">
                      {/* Logo Badge — ~25% outside, ~75% inside */}
                      <div className="w-[60px] h-[60px] bg-white rounded-2xl flex items-center justify-center shadow-[0_6px_24px_rgba(0,0,0,0.10)] border border-slate-100/80 z-10 -mb-[32px] p-1.5">
                        <img
                          src={i.logo}
                          alt={i.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          draggable={false}
                        />
                      </div>
                      {/* Card */}
                      <div
                        className="w-full rounded-3xl pt-12 pb-5 px-4 text-center shadow-sm border transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden"
                        style={{ backgroundColor: i.bg, borderColor: i.border }}
                      >
                        {/* Decorative background icons */}
                        <div className="absolute inset-0 pointer-events-none">
                          {i.deco.map((d, idx) => (
                            <d.Icon
                              key={idx}
                              className="absolute"
                              style={{
                                top: d.t,
                                left: d.l,
                                bottom: d.b,
                                right: d.r,
                                width: d.s,
                                height: d.s,
                                color: i.text,
                                opacity: 0.06,
                              }}
                            />
                          ))}
                        </div>
                        <h3
                          className="relative font-bold text-lg mb-1"
                          style={{ color: i.text }}
                        >
                          {i.name}
                        </h3>
                        <p className="relative text-slate-500 text-sm">
                          {i.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Browse All Button */}
          <div className="text-center">
            <button
              onClick={() => onNavigate("integration")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold  font-semibold hover:bg-gold-400 transition-all duration-300 hover:scale-105"
            >
              Browse All Integrations
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className=" bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6">
              Why Choose <span className="text-gold-500">ElitesEcom?</span>
            </h2>
            <p className="text-lg text-slate-600">
              Powerful features designed to transform your e-commerce operations
            </p>
          </div>

          <div ref={featuresRef}>
            {/* Desktop: Accordion Cards Row */}
            <div className="hidden lg:flex flex-row gap-2 lg:gap-3 items-stretch justify-center h-[300px]">
              {features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                const isExpanded = activeFeature === index;

                return (
                  <div
                    key={feature.title}
                    onClick={() => setActiveFeature(isExpanded ? -1 : index)}
                    className={`relative cursor-pointer rounded-xl border border-slate-100 overflow-hidden ${featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{
                      transitionDelay: `${200 + index * 60}ms`,
                      flex: isExpanded ? "0 0 30%" : "1 1 0%",
                      minWidth: isExpanded ? "220px" : "50px",
                      maxWidth: isExpanded ? "260px" : "100px",
                      zIndex: isExpanded ? 20 : 10 - index,
                      backgroundColor: "white",
                      boxShadow: isExpanded
                        ? "0 20px 40px -10px rgba(0, 0, 0, 0.2)"
                        : "0 2px 4px -1px rgba(0, 0, 0, 0.08)",
                      transition:
                        "flex 0.35s cubic-bezier(0.4, 0, 0.2, 1), min-width 0.35s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-3">
                      <div className="flex flex-col items-center justify-center text-center">
                        <div
                          className={`rounded-lg bg-gold-100 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isExpanded ? "w-12 h-12 bg-gradient-to-br from-gold to-gold-500" : "w-8 h-8"}`}
                        >
                          <FeatureIcon
                            className={`transition-all duration-300 ${isExpanded ? "w-6 h-6 text-slate-900" : "w-4 h-4 text-gold-600"}`}
                          />
                        </div>

                        <div
                          className={`mt-3 transition-opacity duration-100 ${isExpanded ? "opacity-0 pointer-events-none absolute" : "opacity-100"}`}
                        >
                          <h4
                            className="font-bold text-slate-900 text-xs text-center leading-tight"
                            style={{
                              writingMode: "vertical-rl",
                              textOrientation: "mixed",
                              transform: "rotate(180deg)",
                              letterSpacing: "0.02em",
                            }}
                          >
                            {feature.title}
                          </h4>
                        </div>

                        <div
                          className={`flex flex-col items-center justify-center text-center mt-3 transition-opacity duration-150 ${isExpanded ? "opacity-100" : "opacity-0 pointer-events-none absolute"}`}
                          style={{
                            transitionDelay: isExpanded ? "0.15s" : "0s",
                          }}
                        >
                          <h4 className="font-bold text-slate-900 text-xl text-center">
                            {feature.title}
                          </h4>
                          <p className="text-slate-500 text-[13px] text-center leading-snug px-3 max-w-[210px] mt-3">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Grid */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              {features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`relative rounded-xl border border-slate-100 overflow-hidden bg-white p-4 shadow-sm ${featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{
                      transitionDelay: `${200 + index * 60}ms`,
                      transition: "all 0.5s ease",
                    }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center mb-2">
                        <FeatureIcon className="w-5 h-5 text-gold-600" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Mobile: single column with explicit order / Desktop: 2-col grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* TEXT — mobile: order-1, desktop: col 1 row 1 */}
            <div className="order-1 lg:order-none text-center lg:text-left">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  mb-4 lg:mb-6">
                Stop Wasting Time On Stubborn Management
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Sign Up With ElitesEcom & Elites Your E-Commerce Business. Get
                started today and see the difference.
              </p>
            </div>

            {/* IMAGE — mobile: order-2 (between text and buttons), desktop: col 2 rows 1-2 */}
            <div className="relative flex items-center justify-center">
              <div
                className="
      absolute
      inset-0
      rounded-full
      scale-90
      animate-pulse
    "
              />

              <img
                src="/cta-3d-clean.png"
                alt=""
                className="relative z-10 animate-float-breath"
              />
            </div>

            {/* BUTTONS — mobile: order-3 (after image), desktop: col 1 row 2 */}
            <div className="order-3 lg:order-none">
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate("contact")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold  font-semibold hover:bg-gold-400 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate("demo")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-300 text-slate-700 font-semibold hover:border-gold hover:text-gold-600 transition-all duration-300 w-full sm:w-auto"
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
