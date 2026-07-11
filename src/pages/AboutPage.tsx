import { useEffect, useState, useRef } from "react";
import {
  Target,
  TrendingUp,
  Heart,
  Award,
  ArrowRight,
  Package,
  Truck,
  BarChart3,
  CreditCard,
  Receipt,
  RotateCcw,
  FileText,
  Store,
  Globe,
  ShoppingCart,
  Users,
  LayoutDashboard,
} from "lucide-react";
import { motion } from "framer-motion";
import { ShieldCheck, FileBadge2 } from "lucide-react";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [offerVisible, setOfferVisible] = useState(false);
  const offerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("section") === "certificates") {
      setTimeout(() => {
        document
          .getElementById("certificates")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, []);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setCardsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOfferVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );
    if (offerRef.current) observer.observe(offerRef.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: Target,
      title: "Mission",
      description:
        "Providing your e-commerce business with the best management services. We connect with businesses and fulfill their needs through innovative solutions.",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-500",
      barColor: "bg-amber-400",
      bottomAccent: "bg-amber-400",
      glowColor: "bg-amber-300",
    },
    {
      icon: TrendingUp,
      title: "Vision",
      description:
        "To become India's most trusted e-commerce enablement platform, empowering businesses of all sizes to achieve their full potential.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      barColor: "bg-purple-400",
      bottomAccent: "bg-purple-400",
      glowColor: "bg-purple-300",
    },
    {
      icon: Heart,
      title: "Values",
      description:
        "Customer-first approach, innovation, integrity, and excellence drive everything we do. We build long-term relationships with our clients.",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-500",
      barColor: "bg-rose-400",
      bottomAccent: "bg-rose-400",
      glowColor: "bg-rose-300",
    },
    {
      icon: Award,
      title: "Achievement",
      description:
        "India's largest e-commerce enablement SaaS platform in transaction processing by revenue for FY ended March 31, 2022.",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-500",
      barColor: "bg-emerald-400",
      bottomAccent: "bg-emerald-400",
      glowColor: "bg-emerald-300",
    },
  ];

  const certificates = [
    {
      title: "ISO/IEC 27001:2022",
      subtitle: "Information Security Management System (ISMS)",
      description:
        "Confirms our commitment to protecting information assets through internationally recognized security controls, risk management practices, cybersecurity measures, and secure operational processes.",
      preview: "/Certifications/ISO_27001_2022.jpeg",
      file: "/Certifications/ISO_27001_2022.jpeg",
      type: "image",
    },
    {
      title: "ISO 37001:2025",
      subtitle: "Anti-Bribery Management System (ABMS)",
      description:
        "Ensures ethical business conduct and robust controls to prevent bribery across sales, procurement, partnerships, and all organizational operations.",
      preview: "/Certifications/ISO 37001 - OMSVISION SOLUTION LLP.jpg",
      file: "/Certifications/ISO 37001 - OMSVISION SOLUTION LLP.pdf",
      type: "pdf",
    },
    {
      title: "ISO/IEC 42001:2023",
      subtitle: "Artificial Intelligence Management System (AIMS)",
      description:
        "Demonstrates our commitment to the responsible development, deployment, monitoring, and governance of AI-powered solutions while ensuring transparency, security, and regulatory compliance.",
      preview: "/Certifications/ISO IEC 42001 - OMSVISION SOLUTION LLP.jpg",
      file: "/Certifications/ISO IEC 42001 - OMSVISION SOLUTION LLP.pdf",
      type: "pdf",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero + Cards — Combined Section */}
      <section className="relative min-h-[calc(100vh-76px)] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Row: Text + Character */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
            {/* LEFT: Heading + Description */}
            <div
              className={`pt-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[56px] leading-tight  mb-6">
                Who <span className="text-[#F4B400]">We</span> Are?
              </h1>
              <div className="space-y-5 leading-[1.7] text-[15px]">
                <p>
                  Incorporated in July 2021, Elitesecom is India's largest
                  e-commerce enablement SaaS platform in transaction processing
                  by revenue for FY 2022. We enable end-to-end management of
                  e-commerce operations for brands, sellers, and logistics
                  service providers.
                </p>
                <p>
                  Our comprehensive suite of SaaS products acts as the nerve
                  center for e-commerce fulfillment — managing inventory across
                  multiple locations, minimizing fulfillment costs, processing
                  orders across channels, handling returns, generating invoices,
                  reconciling payments, and ensuring regulatory compliance.
                </p>
                <p>
                  Our product suite is sector and size-agnostic, designed to
                  meet the needs of various retail and e-commerce enterprises,
                  both online and offline.
                </p>
              </div>
            </div>

            {/* RIGHT: 3D Character with exactly 4 floating glass cards */}
            <div
              className={`relative flex items-end justify-center min-h-[380px] lg:min-h-[440px] -mb-8 lg:-mb-10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              {/* Character */}
              <div className="relative z-10 flex items-end justify-center">
                <img
                  src="/about-character.png"
                  alt="ElitesEcom Business Professional"
                  className="w-auto max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] max-h-[420px] lg:max-h-[480px] object-contain"
                />
              </div>

              {/* 4 Floating Glass Cards Only */}
              {/* Top Left — Analytics / Growth */}
              <div
                className="absolute top-[5%] left-[5%] w-[60px] h-[60px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center z-20 animate-float hidden lg:flex"
                style={{ animationDelay: "0s" }}
              >
                <BarChart3 className="w-7 h-7 text-purple-500" />
              </div>
              {/* Top Right — Marketplace / Shopping */}
              <div
                className="absolute top-[3%] right-[8%] w-[56px] h-[56px] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center z-20 animate-float hidden lg:flex"
                style={{ animationDelay: "0.5s" }}
              >
                <ShoppingCart className="w-6 h-6 text-amber-500" />
              </div>
              {/* Bottom Left — Operations / Dashboard */}
              <div
                className="absolute bottom-[18%] left-[3%] w-[56px] h-[56px] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center z-20 animate-float hidden lg:flex"
                style={{ animationDelay: "1s" }}
              >
                <LayoutDashboard className="w-6 h-6 text-blue-500" />
              </div>
              {/* Bottom Right — Customers / Team */}
              <div
                className="absolute bottom-[14%] right-[4%] w-[56px] h-[56px] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center z-20 animate-float hidden lg:flex"
                style={{ animationDelay: "1.5s" }}
              >
                <Users className="w-6 h-6 text-sky-500" />
              </div>
            </div>
          </div>

          {/* Cards Row — 4 Premium White Cards with bottom accent */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className={`
                  group relative bg-white rounded-[20px] p-6 lg:p-7 pb-8
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:shadow-xl
                  overflow-hidden
                  ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{
                  transitionDelay: cardsVisible ? `${index * 100}ms` : "0ms",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  minHeight: "220px",
                }}
              >
                {/* Icon + Title Row */}
                <div className="flex items-center gap-3.5 mb-4">
                  {/* Circular icon with glow */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`absolute inset-0 w-14 h-14 rounded-full ${card.glowColor} opacity-40 blur-lg`}
                    />
                    <div
                      className={`relative w-14 h-14 rounded-full ${card.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                    >
                      <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{card.title}</h3>
                    <div
                      className={`w-8 h-0.5 ${card.barColor} rounded-full mt-1.5`}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  {card.description}
                </p>

                {/* Bottom colored accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 ${card.bottomAccent} rounded-b-[20px]`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer — kept same */}
      <section
        ref={offerRef}
        className="pb-16 pt-10 bg-slate-50/50 relative overflow-hidden"
      >
        {/* Soft background glow behind center package */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-gold/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`relative text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ease-out ${offerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* 3 Package illustrations */}
            <div className="relative flex items-center justify-center gap-4 sm:gap-6 lg:gap-0 mb-5">
              {/* Left package */}
              <img
                src="/3d-parcel.png?v=3"
                alt=""
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 lg:absolute lg:-left-20 lg:top-4 animate-float-gentle drop-shadow-lg"
                style={{ animationDelay: "0.5s" }}
              />
              {/* Center package — main */}
              <img
                src="/3d-parcel.png?v=3"
                alt="3D Parcel"
                className="w-28 h-28 sm:w-36 sm:h-36 lg:w-56 lg:h-56 mx-auto animate-float-gentle drop-shadow-xl relative z-10"
              />
              {/* Right package */}
              <img
                src="/3d-parcel.png?v=3"
                alt=""
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 lg:absolute lg:-right-20 lg:top-2 animate-float-gentle drop-shadow-lg"
                style={{ animationDelay: "1s" }}
              />
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              What We{" "}
              <span className="bg-gradient-to-r from-gold via-gold-500 to-amber-400 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Comprehensive tools to power your e-commerce operations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Warehouse and inventory management system",
                icon: Package,
              },
              { text: "Multi-channel order management system", icon: Store },
              { text: "Omni-channel retail management system", icon: Globe },
              {
                text: "Seller management panel for marketplaces",
                icon: FileText,
              },
              { text: "Shipment tracking for customers", icon: Truck },
              { text: "Taxation and regulatory compliances", icon: Receipt },
              { text: "Payment reconciliation", icon: CreditCard },
              { text: "Returns management", icon: RotateCcw },
              { text: "Analytics and reporting", icon: BarChart3 },
            ].map((feature, index) => (
              <div
                key={feature.text}
                className={`group flex items-start gap-4 bg-white rounded-2xl p-5 transition-all duration-500 ease-in-out hover:translate-y-[-5px] hover:shadow-xl ${offerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{
                  transitionDelay: offerVisible ? `${index * 100}ms` : "0ms",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-gold-50 to-amber-50 flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:scale-110 group-hover:from-gold-100 group-hover:to-amber-100 border border-gold/10">
                  <feature.icon className="w-[18px] h-[18px] text-gold transition-all duration-300 group-hover:scale-110" />
                </div>
                <p className="text-slate-700 text-sm font-semibold leading-snug pt-2">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="certificates"
        className="py-16 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 mb-6">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-semibold text-amber-600">
                TRUSTED & CERTIFIED
              </span>
            </div>

            <h2 className="font-heading font-bold text-4xl lg:text-5xl">
              Certifications &{" "}
              <span className="text-[#F4B400]">Compliance</span>
            </h2>

            <p className="mt-5 text-slate-500 max-w-5xl mx-auto">
              At <span className="text-[#F4B400]">Elitesecom.ai</span>, we are
              committed to maintaining the highest standards of ethical business
              practices, governance, security, and responsible AI management.
              Our internationally recognized certifications demonstrate our
              dedication to transparency, compliance, and operational
              excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="group relative bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/0 via-amber-100/0 to-amber-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* <div className="overflow-hidden bg-slate-100">
                  <img
                    src={cert.preview}
                    alt={cert.title}
                    className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div> */}

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>

                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 border border-amber-100 mb-4">
                    <span className="text-xs font-semibold text-[#F4B400]">
                      {cert.subtitle}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm leading-7 mb-5">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-[#F4B400] font-semibold">
                      View Certificate
                    </span>

                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                      →
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl  mb-5">
            Join Our Growing{" "}
            <span className="bg-gradient-to-r from-gold to-gold-500 bg-clip-text text-transparent">
              Family
            </span>
          </h2>
          <p className="text-lg text-slate-500 mb-10">
            Be part of India's largest e-commerce enablement platform
          </p>
          <button
            onClick={() => onNavigate("demo")}
            className="group inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-gradient-to-r from-gold to-gold-500  font-bold hover:shadow-[0_0_30px_rgba(245,184,0,0.35)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
}
