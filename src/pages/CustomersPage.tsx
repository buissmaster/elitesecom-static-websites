import { useEffect, useState } from "react";
import {
  Quote,
  Star,
  Users,
  Package,
  Smile,
  Zap,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

interface CustomersPageProps {
  onNavigate: (page: string) => void;
}

const allLogos = [
  "/client-logos/Aarohi.jpeg",
  "/client-logos/Brandsoon.jpeg",
  "/client-logos/asha_fashion.jpeg",
  "/client-logos/Hari_krishna.jpeg",
  "/client-logos/vishwas_syn.jpeg",
  "/client-logos/swamil_creation.png",
  "/client-logos/sp_fashion.png",
  "/client-logos/Kriska.png",
  "/client-logos/tilton_fab.jpeg",
  "/client-logos/glass_bunnymannu.jpeg",
  "/client-logos/RV_Trendz.jpeg",
  "/client-logos/rv_trend_2.jpeg",
  "/client-logos/naviforce.png",
  "/client-logos/orna.jpeg",
  "/client-logos/FAST-FASHIONS.png",
  "/client-logos/RC_imitation.jpeg",
  "/client-logos/Nirva.jpeg",
  "/client-logos/adina.jpeg",
  "/client-logos/koshin.png",
  "/client-logos/Jeevat.png",
  "/client-logos/adina1.jpeg",
  "/client-logos/ugaan.jpg",
  "/client-logos/shinisha.jpg",
  "/client-logos/piludi.jpg",
  "/client-logos/PARROT_CREATION_logo.jpg",
  "/client-logos/dbf.png",
  "/client-logos/bandhani.jpeg",
  "/client-logos/brado_jewellery.png",
  "/client-logos/VH_brother.jpeg",
  "/client-logos/Alix_logo.png",
  "/client-logos/akzone.jpg",
  "/client-logos/akshar-fashion.jpg",
  "/client-logos/silakiva.jpeg",
];

export function CustomersPage({ onNavigate: _onNavigate }: CustomersPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  const [activeStatIndex, setActiveStatIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // Auto-cycle the active stat card highlighted state every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const testimonials2 = [
    {
      name: "Rahul Sharma",
      company: "FashionHub India",
      role: "CEO",
      image: "/team-1.jpg",
      content:
        "ElitesEcom transformed our order management. We reduced processing time by 60% and eliminated stockouts completely. The multi-channel integration is seamless.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      company: "TechMart",
      role: "Operations Director",
      image: "/team-2.jpg",
      content:
        "We manage Amazon, Flipkart, and our Shopify store from one dashboard. The analytics helped us identify our top-performing channels and optimize accordingly.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      company: "HomeStyle Store",
      role: "Founder",
      image: "/team-3.jpg",
      content:
        "Best investment for our e-commerce business. The automated reconciliation saved us countless hours every month. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sneha Gupta",
      company: "BeautyBliss",
      role: "CEO",
      image: "/team-4.jpg",
      content:
        "The inventory management feature is a game-changer. We never run out of stock now, and our customers are happier than ever.",
      rating: 5,
    },
    {
      name: "Vikram Mehta",
      company: "ElectroWorld",
      role: "COO",
      image: "/team-1.jpg",
      content:
        "From warehouse management to order fulfillment, ElitesEcom handles everything. Our efficiency has increased by 40%.",
      rating: 5,
    },
    {
      name: "Anjali Desai",
      company: "KidsKorner",
      role: "Founder",
      image: "/team-2.jpg",
      content:
        "The mobile app lets me manage my business from anywhere. I can track orders, check inventory, and stay on top of everything.",
      rating: 5,
    },
  ];

  const testimonials = [
    {
      name: "Vishal Chopra",
      company: "vishwas synthetics",
      role: "CEO",
      image: "/team-1.jpg",
      content:
        "The reconciliation module helped us catch billing issues we missed before and Easy to train new staff. Very user-friendly interface.",
      rating: 5,
    },
    {
      name: "Jignesh Malaviya",
      company: "ZENITH TROVE",
      role: "Operations Director",
      image: "/team-2.jpg",
      content:
        "We now download 500+ courier labels in one click. Incredible! or Easy to train new staff. Very user-friendly interface.",
      rating: 5,
    },
    {
      name: "	Manish Chabhadiya",
      company: "Shiv Creation",
      role: "Founder",
      image: "/team-3.jpg",
      content:
        "Now I don't have to assign tasks manually — OMS auto-assigns orders and syncs courier partners instantly and Everything is visible in one place — pending orders, inventory, returns — which saves us a lot of manual work.",
      rating: 5,
    },
    {
      name: "Alpesh Bhai Polra",
      company: "Vd Impex",
      role: "CEO",
      image: "/team-4.jpg",
      content:
        "The inventory management feature is a game-changer. We never run out of stock now, and our customers are happier than ever.",
      rating: 5,
    },
    {
      name: "milan maganbhai Bavaseeya",
      company: "mahadev enterprise",
      role: "COO",
      image: "/team-1.jpg",
      content:
        "All couriers and platforms in one tool — love it! and It’s flexible and works how we want to work.",
      rating: 5,
    },
    {
      name: "Alpeshbhai Akbari",
      company: "Fashion2wear",
      role: "Founder",
      image: "/team-2.jpg",
      content:
        "This system is truly built for modern eCommerce and We save 2+ hours daily since switching to Elitesecom OMS.",
      rating: 5,
    },
  ];

  // Split logos into two sets and double them for a seamless looping marquee
  const row1 = [...allLogos.slice(0, 17), ...allLogos.slice(0, 17)];
  const row2 = [...allLogos.slice(17), ...allLogos.slice(17)];

  return (
    <div className="">
      {/* ═══════════════════════════════════════════ */}
      {/* ═══ OUR CLIENTS — Premium Visual System ═══ */}
      {/* ═══════════════════════════════════════════ */}
      {/* ════════════════════════════════════════════════════════════ */}
      {/* ═══ OUR CLIENTS — Reference Image Exact Replica ═══ */}
      {/* ════════════════════════════════════════════════════════════ */}
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
                  <Users className="w-4 h-4" />
                  Trusted by 2500+ E-commerce Businesses
                </div>
              </div>

              {/* Heading */}
              <div
                className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight mb-6">
                  <span style={{ color: "#0F2A44" }}>Our Clients,</span>
                  <br />
                  <span style={{ color: "#0F2A44" }}>Their </span>
                  <span style={{ color: "#E3A900" }}>Success</span>
                  <span style={{ color: "#0F2A44" }}> Story</span>
                </h1>
              </div>

              {/* Description */}
              <div
                className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <p className="text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed">
                  Serving sellers across Amazon, Flipkart, Shopify, Meesho and
                  leading D2C brands with reliable order management, inventory
                  sync, analytics and operational excellence.
                </p>
              </div>
            </div>

            {/* ═════ RIGHT COLUMN: Character + Floating Cards ═════ */}
            <div
              className={`relative order-2 flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              {/* Desktop: Group container (character + 3 cards) centered in right column */}
              <div
                className="relative hidden md:flex items-center justify-center"
                style={{ width: 500, height: 480 }}
              >
                {/* Background effects (outside the group) */}
                <div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 380,
                    height: 380,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background:
                      "radial-gradient(circle, rgba(227,169,0,0.05) 0%, rgba(245,235,210,0.07) 50%, transparent 72%)",
                  }}
                />
                <div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 100,
                    height: 100,
                    top: 60,
                    left: 40,
                    background:
                      "radial-gradient(circle, rgba(227,169,0,0.04) 0%, transparent 70%)",
                    filter: "blur(28px)",
                  }}
                />
                <div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 90,
                    height: 90,
                    bottom: 80,
                    right: 20,
                    background:
                      "radial-gradient(circle, rgba(139,126,216,0.035) 0%, transparent 70%)",
                    filter: "blur(22px)",
                  }}
                />
                <svg
                  className="absolute pointer-events-none"
                  style={{ top: 0, left: 0 }}
                  width="500"
                  height="480"
                  viewBox="0 0 500 480"
                >
                  <circle
                    cx="50"
                    cy="90"
                    r="2"
                    fill="#D4A96C"
                    fillOpacity="0.25"
                  />
                  <circle
                    cx="450"
                    cy="55"
                    r="1.5"
                    fill="#D4A96C"
                    fillOpacity="0.18"
                  />
                  <circle
                    cx="470"
                    cy="220"
                    r="2"
                    fill="#E3A900"
                    fillOpacity="0.10"
                  />
                  <circle
                    cx="35"
                    cy="340"
                    r="1.5"
                    fill="#8B7ED8"
                    fillOpacity="0.14"
                  />
                  <circle
                    cx="430"
                    cy="410"
                    r="2"
                    fill="#D4A96C"
                    fillOpacity="0.20"
                  />
                </svg>

                {/* ══ INNER GROUP: Character + Cards as ONE component ══ */}
                <div className="relative" style={{ width: 420, height: 440 }}>
                  {/* 3D CHARACTER — centered at 50%/50%, fills the group */}
                  <img
                    src="/customer-hero-char.png"
                    alt="Person working on laptop"
                    className="absolute z-10 animate-float"
                    style={{
                      width: "100%",
                      height: "100%",
                      top: "30%",
                      left: "35%",
                      transform: "translate(-50%, -50%)",
                      objectFit: "contain",
                      filter: "drop-shadow(0 18px 44px rgba(15,42,68,0.09))",
                    }}
                  />

                  {/* ─── 3 STAT CARDS — triangular composition around character ─── */}

                  {/* 4.9/5 — Top-right, above character head, ~30px gap */}
                  <div
                    className="absolute z-20 flex items-center gap-3 transition-all duration-500"
                    style={{
                      top: 10,
                      right: 15,
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(10px)",
                      borderRadius: 28,
                      padding: "14px 18px",
                      boxShadow:
                        activeStatIndex === 0
                          ? "0 0 25px rgba(245, 184, 0, 0.4), 0 8px 36px rgba(0,0,0,0.06)"
                          : "0 8px 36px rgba(0,0,0,0.06), 0 2px 10px rgba(0,0,0,0.03)",
                      border:
                        activeStatIndex === 0
                          ? "2px solid rgba(245, 184, 0, 0.8)"
                          : "1px solid rgba(227,169,0,0.06)",
                      transform:
                        activeStatIndex === 0 ? "scale(1.08)" : "scale(1)",
                      animation: "heroFloatCard 7s ease-in-out infinite",
                      animationDelay: "0.3s",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "#FFF8E8" }}
                    >
                      <Star
                        className="w-5 h-5"
                        style={{ color: "#F4BE00" }}
                        fill="#F4BE00"
                      />
                    </div>
                    <div>
                      <span
                        className="text-base font-extrabold leading-tight block"
                        style={{ color: "#0F2A44" }}
                      >
                        4.9/5
                      </span>
                      <span
                        className="text-[11px] font-medium"
                        style={{ color: "#6B7B94" }}
                      >
                        Average Rating
                      </span>
                    </div>
                  </div>

                  {/* 50M+ — Bottom-left, below-left of character, ~30px gap */}
                  <div
                    className="absolute z-20 flex items-center gap-3 transition-all duration-500"
                    style={{
                      // bottom: 150,
                      bottom: 20,
                      left: 5,
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(10px)",
                      borderRadius: 28,
                      padding: "14px 18px",
                      boxShadow:
                        activeStatIndex === 1
                          ? "0 0 25px rgba(245, 184, 0, 0.4), 0 8px 36px rgba(0,0,0,0.06)"
                          : "0 8px 36px rgba(0,0,0,0.06), 0 2px 10px rgba(0,0,0,0.03)",
                      border:
                        activeStatIndex === 1
                          ? "2px solid rgba(245, 184, 0, 0.8)"
                          : "1px solid rgba(227,169,0,0.06)",
                      transform:
                        activeStatIndex === 1 ? "scale(1.08)" : "scale(1)",
                      animation: "heroFloatCard 8s ease-in-out infinite",
                      animationDelay: "1s",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "#F0EDF7" }}
                    >
                      <Package
                        className="w-5 h-5"
                        style={{ color: "#8B7ED8" }}
                      />
                    </div>
                    <div>
                      <span
                        className="text-base font-extrabold leading-tight block"
                        style={{ color: "#0F2A44" }}
                      >
                        50M+
                      </span>
                      <span
                        className="text-[11px] font-medium"
                        style={{ color: "#6B7B94" }}
                      >
                        Orders Processed
                      </span>
                    </div>
                  </div>

                  {/* 99.9% — Bottom-right, below-right of character, ~30px gap */}
                  <div
                    className="absolute z-20 flex items-center gap-3 transition-all duration-500"
                    style={{
                      // bottom: -45,
                      // right: -90,
                      bottom: 20,
                      right: 10,
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(10px)",
                      borderRadius: 28,
                      padding: "14px 18px",
                      boxShadow:
                        activeStatIndex === 2
                          ? "0 0 25px rgba(245, 184, 0, 0.4), 0 8px 36px rgba(0,0,0,0.06)"
                          : "0 8px 36px rgba(0,0,0,0.06), 0 2px 10px rgba(0,0,0,0.03)",
                      border:
                        activeStatIndex === 2
                          ? "2px solid rgba(245, 184, 0, 0.8)"
                          : "1px solid rgba(227,169,0,0.06)",
                      transform:
                        activeStatIndex === 2 ? "scale(1.08)" : "scale(1)",
                      animation: "heroFloatCard 9s ease-in-out infinite",
                      animationDelay: "1.7s",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "#E8F5EE" }}
                    >
                      <Smile className="w-5 h-5" style={{ color: "#10B981" }} />
                    </div>
                    <div>
                      <span
                        className="text-base font-extrabold leading-tight block"
                        style={{ color: "#0F2A44" }}
                      >
                        99.9%
                      </span>
                      <span
                        className="text-[11px] font-medium"
                        style={{ color: "#6B7B94" }}
                      >
                        Customer Satisfaction
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile: Character + 3 stat cards */}
              <div className="md:hidden flex flex-col items-center gap-5 py-6">
                {/* Character — no box, floats freely */}
                <div
                  className="relative w-60 h-60"
                  style={{
                    animation: "heroCharFloatMobile 7s ease-in-out infinite",
                  }}
                >
                  {/* Subtle glow behind */}
                  <div
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      width: 180,
                      height: 180,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background:
                        "radial-gradient(circle, rgba(227,169,0,0.05) 0%, transparent 65%)",
                    }}
                  />
                  <img
                    src="/customer-hero-char.png"
                    alt="Person working on laptop"
                    className="w-full h-full object-contain relative z-10"
                    style={{
                      filter: "drop-shadow(0 12px 28px rgba(15,42,68,0.10))",
                    }}
                  />
                </div>
                {/* Stat cards row */}
                <div className="flex gap-2.5 flex-wrap justify-center">
                  {[
                    {
                      i: Star,
                      v: "4.9/5",
                      l: "Avg Rating",
                      b: "#FFF8E8",
                      c: "#F4BE00",
                    },
                    {
                      i: Package,
                      v: "50M+",
                      l: "Orders",
                      b: "#F0EDF7",
                      c: "#8B7ED8",
                    },
                    {
                      i: Smile,
                      v: "99.9%",
                      l: "Satisfaction",
                      b: "#E8F5EE",
                      c: "#10B981",
                    },
                  ].map((s, index) => (
                    <div
                      key={s.v}
                      className="flex items-center gap-2 transition-all duration-500"
                      style={{
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(8px)",
                        borderRadius: 20,
                        padding: "10px 14px",
                        boxShadow:
                          activeStatIndex === index
                            ? "0 0 15px rgba(245, 184, 0, 0.35), 0 3px 14px rgba(0,0,0,0.05)"
                            : "0 3px 14px rgba(0,0,0,0.05)",
                        border:
                          activeStatIndex === index
                            ? "2px solid rgba(245, 184, 0, 0.8)"
                            : "1px solid rgba(227,169,0,0.06)",
                        transform:
                          activeStatIndex === index
                            ? "scale(1.06)"
                            : "scale(1)",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: s.b }}
                      >
                        <s.i className="w-4 h-4" style={{ color: s.c }} />
                      </div>
                      <div>
                        <span
                          className="text-sm font-bold"
                          style={{ color: "#0F2A44" }}
                        >
                          {s.v}
                        </span>
                        <div
                          className="text-[9px]"
                          style={{ color: "#6B7B94" }}
                        >
                          {s.l}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 3. JOIN OUR HAPPY CUSTOMERS + Logo Wall (was 4th, now 3rd) ═══════ */}
      <section className="py-10 bg-[#F8F4EC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl  mb-4">
            Join Our Happy Customers
          </h2>
          <p className="text-base sm:text-lg font-medium text-slate-500 mb-14 tracking-wide">
            Trusted by Brands Across India
          </p>

          {/* Logo Wall — Premium Double-Row Infinite Scrolling Marquee with edge fades */}
          <div className="relative w-full overflow-hidden flex flex-col gap-6 py-4">
            {/* Gradient overlays to fade the logos out at the edges */}
            <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8F4EC] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8F4EC] to-transparent z-10 pointer-events-none" />

            {/* Row 1: Left moving marquee */}
            <div className="flex w-full overflow-hidden">
              <div className="flex gap-6 animate-marquee-left hover:[animation-play-state:paused]">
                {row1.map((src, i) => (
                  <div
                    key={`marquee-r1-${i}`}
                    className="flex-shrink-0 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-[140px] h-20 sm:h-24 px-2 py-3"
                  >
                    <img
                      src={src}
                      alt=""
                      className="max-w-full max-h-full object-contain filter grayscale-0 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Right moving marquee */}
            <div className="flex w-full overflow-hidden">
              <div className="flex gap-6 animate-marquee-right hover:[animation-play-state:paused]">
                {row2.map((src, i) => (
                  <div
                    key={`marquee-r2-${i}`}
                    className="flex-shrink-0 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-[140px] h-20 sm:h-24 px-2 py-3"
                  >
                    <img
                      src={src}
                      alt=""
                      className="max-w-full max-h-full object-contain filter grayscale-0 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 4. TESTIMONIALS — What Our Clients Say (was 3rd, now 4th) ═══════ */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl  mb-6">
              What Our <span className="text-gold">Clients Say</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Quote className="w-8 h-8 text-gold-200 mb-4" />
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  {/* <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  /> */}
                  <div className="flex-1">
                    <p className="font-semibold ">{t.name}</p>
                    <p className="text-sm text-slate-500">
                      {/* {t.role}, {t.company} */}
                      {t.company}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 text-gold fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
