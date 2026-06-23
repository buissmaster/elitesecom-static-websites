import React, { useState, useEffect, useRef, Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

import {
  Linkedin,
  ArrowRight,
  Users,
  Package,
  ShoppingCart,
  UserPlus,
  CheckSquare,
  Headphones,
  Laptop,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 text-red-500 bg-red-100 min-h-screen z-50 relative">
          <h1 className="text-2xl font-bold">Runtime Error in TeamPage</h1>
          <pre className="mt-4 whitespace-pre-wrap">
            {this.state.error?.stack || this.state.error?.toString()}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

// ═══════════════════════════════════════════
//   TYPES & INTERFACES
// ═══════════════════════════════════════════
interface TeamPageProps {
  onNavigate: (page: string) => void;
}

interface Leader {
  id: number;
  name: string;
  role: string;
  tag: string;
  badgeBg: string;
  image: string;
  bio: string;
  linkedin: string;
  gradient: string;
}

const leadersData: Leader[] = [
  {
    id: 1,
    name: "Meet Vaghasiya",
    role: "Chief Executive Officer & Founder",
    tag: "Founder",
    badgeBg: "bg-emerald-500",
    image: "/ceo-portrait-original.png",
    bio: "Meet Vaghasiya is the visionary Founder and CEO of ElitesEcom, bringing over 10 years of expertise in e-commerce, marketplace operations, and SaaS technology. He has successfully helped thousands of brands streamline and scale their online businesses across leading platforms such as Amazon, Flipkart, Myntra, Ajio, and Meesho. With a strong focus on automation, strategic growth, and operational excellence, his mission is to simplify e-commerce operations and empower businesses with scalable, technology-driven solutions.",
    linkedin: "https://www.linkedin.com/in/meet-vaghasiya-a44610226/",
    gradient: "from-amber-400 via-purple-600 to-indigo-600",
  },
  {
    id: 2,
    name: "Harmit Vaghasiya",
    role: "Co-Founder",
    tag: "Co-Founder",
    badgeBg: "bg-indigo-500",
    image: "/co-founder.png",
    bio: "Harmit directs strategic scale and automation platforms within ElitesEcom. Specializing in high-volume operations across Myntra, Ajio, and Meesho, his focus centers on crafting scalable infrastructure designed for modern enterprise growth.",
    linkedin: "https://www.linkedin.com/in/harmit-vaghasiya-033bb1348/",
    gradient: "from-indigo-600 via-purple-600 to-amber-400",
  },
];

// No longer needed — replaced with AnimatePresence-based approach

export function TeamPage({ onNavigate }: TeamPageProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  // Wheel-driven card switching: only fires when section is in view
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Only intercept when the section occupies most of the viewport
      if (rect.top > 100 || rect.bottom < 100) return;

      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;

      if (goingDown && activeIndex < leadersData.length - 1) {
        e.preventDefault();
        setDirection(1);
        setActiveIndex((prev) => Math.min(prev + 1, leadersData.length - 1));
      } else if (goingUp && activeIndex > 0) {
        e.preventDefault();
        setDirection(-1);
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex]);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    },
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-50 w-full overflow-x-hidden font-sans">
        {/* ═══════════════════════════════════════════ */}
        {/* ═══ HERO SECTION                          ═══ */}
        {/* ═══════════════════════════════════════════ */}
        <section className="relative min-h-[calc(100vh-76px)] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-500/10">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Yellow orb */}
            <div
              className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(circle, #f4b400 0%, transparent 70%)",
                filter: "blur(100px)",
                animation: "heroOrbFloat 12s ease-in-out infinite",
              }}
            />
            {/* Purple orb */}
            <div
              className="absolute top-1/3 -left-32 w-[450px] h-[450px] rounded-full opacity-25"
              style={{
                background:
                  "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
                filter: "blur(110px)",
                animation: "heroOrbFloat 14s ease-in-out infinite reverse",
              }}
            />
            {/* Blue orb */}
            <div
              className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
                filter: "blur(90px)",
                animation: "heroOrbFloat 16s ease-in-out infinite",
                animationDelay: "3s",
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col  py-12 lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* LEFT: Text Content */}
              <div
                className={`order-1 text-left lg:-mt-14 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-700 text-sm font-medium">
                  <Users className="w-4 h-4" />
                  Meet the People Behind ElitesEcom
                </div>

                {/* Headline */}
                <h1 className="font-heading font-bold mt-5 text-4xl sm:text-5xl lg:text-[56px]  mb-6 leading-[1.08] tracking-tight">
                  The Team That{" "}
                  <span className="inline-block text-gold">
                    Makes It Happen
                  </span>
                </h1>

                {/* Supporting text */}
                <p className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
                  A passionate team of innovators, strategists, and e-commerce
                  experts helping brands scale across India and beyond.
                </p>

                {/* Desktop CTA — hidden on mobile */}
                <div className="hidden lg:flex flex-wrap gap-4">
                  <button
                    onClick={() => onNavigate("contact")}
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gold  font-bold text-sm shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Schedule a demo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={() => onNavigate("contact")}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50/50 transition-all duration-300"
                  >
                    Contact Us
                  </button>
                </div>
              </div>

              {/* RIGHT: 3D CEO Character with Floating Business Cards */}
              <div
                className={`relative flex items-center justify-center order-2 h-[400px] sm:h-[480px] lg:h-[580px] transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                {/* Soft branded glow behind CEO */}
                <div
                  className="absolute w-96 h-[480px] rounded-full opacity-20"
                  style={{
                    background:
                      "radial-gradient(ellipse, #f4b400 0%, #8b5cf6 60%, transparent 80%)",
                    filter: "blur(80px)",
                    animation: "heroOrbFloat 14s ease-in-out infinite",
                  }}
                />

                {/* 3D CEO Character — Pixar quality, navy suit, yellow tie, tablet */}
                <div
                  className="relative z-10 scale-110 sm:scale-100"
                  style={{
                    animation: "ceoFloat 6s ease-in-out infinite",
                    filter:
                      "drop-shadow(0 30px 60px rgba(139, 92, 246, 0.2)) drop-shadow(0 15px 30px rgba(244, 180, 0, 0.1))",
                  }}
                >
                  <img
                    src="/ceo-v3.png"
                    alt="Meet Vaghasiya — CEO of ElitesEcom with analytics tablet"
                    className="h-[360px] sm:h-[400px] lg:h-[500px] w-auto object-contain"
                  />
                </div>

                {/* Soft glow behind top cards */}
                <div className="absolute top-[0%] left-[0%] w-32 h-24 rounded-full bg-purple-400/[0.08] blur-2xl pointer-events-none" />
                <div className="absolute top-[3%] right-[0%] w-28 h-20 rounded-full bg-purple-400/[0.08] blur-2xl pointer-events-none" />

                {/* Soft glow behind bottom cards */}
                <div className="absolute bottom-[14%] left-[0%] w-28 h-20 rounded-full bg-gold/[0.08] blur-2xl pointer-events-none" />
                <div className="absolute bottom-[10%] right-[4%] w-28 h-20 rounded-full bg-gold/[0.08] blur-2xl pointer-events-none" />

                {/* TOP LEFT: 20+ Tech Experts */}
                <div
                  className="absolute top-[4%] sm:left-[-30%] lg:left-[2%] left-[-10%]  rounded-[14px] lg:rounded-[16px] px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-3.5 z-20 hover:scale-105 transition-transform duration-300 w-[90px] sm:w-auto"
                  style={{
                    animation: "heroFloatCard 7s ease-in-out infinite",
                    animationDelay: "0.3s",
                    background: "rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    boxShadow:
                      "inset 0 1px 1px rgba(255,255,255,0.35), 0 10px 35px rgba(31,38,135,0.12)",
                    border: "1px solid rgba(255,255,255,0.28)",
                  }}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="text-base sm:text-lg lg:text-xl font-extrabold ">
                      20+
                    </div>
                    <Laptop
                      className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
                    Tech Experts
                  </div>
                </div>

                {/* TOP RIGHT: 10+ Support Staff */}
                <div
                  className="absolute top-[2%] sm:top-[5%] sm:right-[-30%] lg:right-[2%] right-[-10%] rounded-[14px] lg:rounded-[16px] px-3 py-2 sm:px-4 sm:py-3 lg:px-4 lg:py-3 z-20 hover:scale-105 transition-transform duration-300 w-[90px] sm:w-auto"
                  style={{
                    animation: "heroFloatCard 8s ease-in-out infinite",
                    animationDelay: "1s",
                    background: "rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    boxShadow:
                      "inset 0 1px 1px rgba(255,255,255,0.35), 0 10px 35px rgba(31,38,135,0.12)",
                    border: "1px solid rgba(255,255,255,0.28)",
                  }}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="text-base sm:text-lg font-extrabold ">
                      10+
                    </div>
                    <Headphones
                      className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
                    Support Staff
                  </div>
                </div>

                {/* MIDDLE LEFT: 4+ Reconciliation Ops */}
                <div
                  className="absolute top-[35%] sm:top-[35%] sm:left-[-40%] lg:left-[2%] left-[-20%] rounded-[14px] lg:rounded-[16px] px-3 py-2 sm:px-4 sm:py-3 lg:px-4 lg:py-3 z-20 hover:scale-105 transition-transform duration-300 w-[90px] sm:w-auto"
                  style={{
                    animation: "heroFloatCard 9s ease-in-out infinite",
                    animationDelay: "2s",
                    background: "rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    boxShadow:
                      "inset 0 1px 1px rgba(255,255,255,0.35), 0 10px 35px rgba(31,38,135,0.12)",
                    border: "1px solid rgba(255,255,255,0.28)",
                  }}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="text-base sm:text-lg font-extrabold ">
                      4+
                    </div>
                    <CheckSquare
                      className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
                    Reconciliation Ops
                  </div>
                </div>

                {/* MIDDLE RIGHT: 2+ Onboarding Specialists */}
                <div
                  className="absolute top-[42%] sm:top-[40%] sm:right-[-50%] lg:right-[-5%] right-[-15%] rounded-[14px] lg:rounded-[16px] px-3 py-2 sm:px-4 sm:py-3 lg:px-4 lg:py-3 z-20 hover:scale-105 transition-transform duration-300 w-[80px] sm:w-auto"
                  style={{
                    animation: "heroFloatCard 7s ease-in-out infinite",
                    animationDelay: "2.5s",
                    background: "rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    boxShadow:
                      "inset 0 1px 1px rgba(255,255,255,0.35), 0 10px 35px rgba(31,38,135,0.12)",
                    border: "1px solid rgba(255,255,255,0.28)",
                  }}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="text-base sm:text-lg font-extrabold ">
                      2+
                    </div>
                    <UserPlus
                      className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
                    Onboarding Specialists
                  </div>
                </div>

                {/* BOTTOM LEFT: 5+ E-commerce Ops */}
                <div
                  className="absolute bottom-[14%] sm:bottom-[18%] sm:left-[-30%] lg:left-[2%] left-[-15%] rounded-[14px] lg:rounded-[16px] px-3 py-2 sm:px-4 sm:py-3 lg:px-4 lg:py-3 z-20 hover:scale-105 transition-transform duration-300 w-[90px] sm:w-auto"
                  style={{
                    animation: "heroFloatCard 8s ease-in-out infinite",
                    animationDelay: "1.5s",
                    background: "rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    boxShadow:
                      "inset 0 1px 1px rgba(255,255,255,0.35), 0 10px 35px rgba(31,38,135,0.12)",
                    border: "1px solid rgba(255,255,255,0.28)",
                  }}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="text-base sm:text-lg font-extrabold ">
                      5+
                    </div>
                    <ShoppingCart
                      className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
                    E-commerce Ops
                  </div>
                </div>

                {/* BOTTOM RIGHT: 5+ Warehouse Ops */}
                <div
                  className="absolute bottom-[10%] sm:right-[-26%] lg:right-[2%] right-[-10%] rounded-[14px] lg:rounded-[16px] px-3 py-2 sm:px-4 sm:py-3 lg:px-4 lg:py-3 z-20 hover:scale-105 transition-transform duration-300 w-[72px] sm:w-auto"
                  style={{
                    animation: "heroFloatCard 6s ease-in-out infinite",
                    animationDelay: "3s",
                    background: "rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    boxShadow:
                      "inset 0 1px 1px rgba(255,255,255,0.35), 0 10px 35px rgba(31,38,135,0.12)",
                    border: "1px solid rgba(255,255,255,0.28)",
                  }}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="text-base sm:text-lg font-extrabold ">
                      5+
                    </div>
                    <Package
                      className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
                    Warehouse Ops
                  </div>
                </div>
              </div>

              {/* Mobile CTA buttons — below character on mobile/tablet */}
              <div className="order-3 lg:hidden flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate("contact")}
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gold  font-bold text-sm shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Schedule a demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onNavigate("contact")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50/50 transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* ═══ LEADERSHIP STACK SECTION              ═══ */}
        {/* ═══════════════════════════════════════════ */}
        <section
          id="leadership"
          ref={sectionRef}
          className="relative bg-slate-50/50 py-16 sm:py-24"
        >
          {/* Background blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/40 to-indigo-200/20 rounded-full blur-[120px]" />
            <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-full blur-[130px]" />
          </div>

          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center gap-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl">
              <span className="inline-block text-xs font-bold text-purple-600 uppercase tracking-[0.3em] mb-3">
                Our Leadership
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-950 mb-4 tracking-tight">
                Meet the{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Visionaries
                </span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Driving digital transformation, streamlining marketplace
                operations, and empowering businesses with next-generation
                technology solutions.
              </p>
            </div>

            {/* Card viewport — fixed height, one card visible at a time */}
            <div
              className="relative w-full max-w-4xl mx-auto"
              style={{ height: "420px" }}
            >
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                {leadersData.map((leader, idx) =>
                  idx === activeIndex ? (
                    // Find this inside your leadersData.map block:
                    <motion.div
                      key={leader.id}
                      custom={direction}
                      initial={(dir: number) => ({
                        opacity: 0,
                        y: dir > 0 ? 40 : -40,
                        scale: 0.97,
                        filter: "blur(4px)",
                      })}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                      }}
                      exit={(dir: number) => ({
                        opacity: 0,
                        y: dir > 0 ? -24 : 24,
                        scale: 0.94,
                        filter: "blur(3px)",
                      })}
                      transition={{
                        duration: 0.35, // ⚡ Speed up from 0.65s
                        ease: "backOut", // ⚡ Or use [0.25, 1, 0.5, 1] for a clean, fast slide
                      }}
                      className="absolute inset-0 flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-[0_8px_32px_rgba(139,92,246,0.08),0_24px_64px_rgba(15,23,42,0.06)]"
                    >
                      {/* Image — springs in with slight extra delay */}
                      <motion.div
                        className="w-full sm:w-2/5 h-52 sm:h-full relative overflow-hidden bg-slate-100 flex-shrink-0"
                        initial={{ opacity: 0, x: direction > 0 ? -16 : 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.7,
                          ease: [0.16, 1, 0.3, 1],
                          delay: 0.08,
                        }}
                      >
                        <img
                          src={leader.image}
                          alt={`${leader.name} — ${leader.role}`}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/5 via-transparent to-white/5" />
                        {/* Badge */}
                        <motion.div
                          className="absolute top-4 left-5 z-20"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.22,
                          }}
                        >
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-purple-700 text-xs font-bold shadow-sm">
                            <span
                              className={`w-2 h-2 rounded-full ${leader.badgeBg} animate-pulse`}
                            />
                            {leader.tag}
                          </span>
                        </motion.div>
                      </motion.div>

                      {/* Content — staggered storytelling sequence */}
                      <div className="w-full sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between bg-white">
                        <div>
                          {/* Name */}
                          <motion.h3
                            className="font-heading font-bold text-2xl text-slate-900 mb-1"
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.55,
                              ease: [0.16, 1, 0.3, 1],
                              delay: 0.1,
                            }}
                          >
                            {leader.name}
                          </motion.h3>

                          {/* Role */}
                          <motion.p
                            className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              ease: [0.16, 1, 0.3, 1],
                              delay: 0.18,
                            }}
                          >
                            {leader.role}
                          </motion.p>

                          {/* Bio */}
                          <motion.p
                            className="text-slate-600 text-sm leading-relaxed"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.55,
                              ease: [0.16, 1, 0.3, 1],
                              delay: 0.26,
                            }}
                          >
                            {leader.bio}
                          </motion.p>
                        </div>

                        {/* Footer */}
                        <motion.div
                          className="flex items-center justify-between pt-4 border-t border-slate-100 mt-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.36,
                          }}
                        >
                          <span className="text-xs text-slate-400 font-medium">
                            Get in touch
                          </span>
                          <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-sm"
                            aria-label={`${leader.name} LinkedIn`}
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </motion.div>
                      </div>
                    </motion.div>
                  ) : null,
                )}
              </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-3 items-center">
              {leadersData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-6 h-2.5 bg-purple-600"
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-purple-300"
                  }`}
                  aria-label={`View ${leadersData[idx].name}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}
