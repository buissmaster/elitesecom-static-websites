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
      company: "Vishwas Synthetics",
      role: "CEO",
      image: "/company logo/Vishwas synthetics.png",
      content:
        "The reconciliation module helped us catch billing issues we missed before and Easy to train new staff. Very user-friendly interface.",
      rating: 5,
    },
    {
      name: "Jignesh Malaviya",
      company: "Zenith Trove",
      role: "Operations Director",
      image: "/company logo/Zenith Trove.png",
      content:
        "We now download 500+ courier labels in one click. Incredible! or Easy to train new staff. Very user-friendly interface.",
      rating: 5,
    },
    {
      name: "Alpeshbhai Akbari",
      company: "Fashion2wear",
      role: "Founder",
      image: "/company logo/Fashion2wear.png",
      content:
        "This system is truly built for modern eCommerce and We save 2+ hours daily since switching to Elitesecom OMS.",
      rating: 5,
    },
    {
      name: "Manish Chabhadiya",
      company: "Shiv Creation",
      role: "Founder",
      image: "/company logo/Shiv Creation.png",
      content:
        "Now I don't have to assign tasks manually — OMS auto-assigns orders and syncs courier partners instantly and Everything is visible in one place — pending orders, inventory, returns — which saves us a lot of manual work.",
      rating: 5,
    },
    {
      name: "Akshay Harkhani",
      company: "Spense Clothing",
      role: "CEO",
      image: "/company logo/Spense Clothing.png",
      content:
        "We now download 500+ courier labels in one click. Incredible! and Custom label downloads per marketplace is a brilliant feature.",
      rating: 5,
    },
    {
      name: "Shakir Shaikh",
      company: "Shakir Textile",
      role: "CEO",
      image: "/company logo/Shakir Textile.png",
      content:
        "Since switching to EliteSecom OMS, our order processing speed improved by 60%. No more order overlaps or delays during flash sales",
      rating: 5,
    },
    {
      name: "Pratik Pathak",
      company: "Shinisha",
      role: "Founder",
      image: "/company logo/Shinisha.png",
      content:
        "We've been using this e-commerce order management platform for a while and it's been a game-changer for our business. It helps us to Orders process and manage inventory seamlessly across marketplaces. The dashboard is user-friendly and most importantly their customer support is very responsive and helpful. Highly recommend it to anyone who looking to streamline their online operations.",
      rating: 5,
    },
    // {
    //   name: "Alpesh Bhai Polra",
    //   company: "Vd Impex",
    //   role: "CEO",
    //   image: "/company logo/Vd Impex.png",
    //   content:
    //     "The inventory management feature is a game-changer. We never run out of stock now, and our customers are happier than ever.",
    //   rating: 5,
    // },
    // {
    //   name: "Milan Maganbhai Bavaseeya",
    //   company: "Mahadev Enterprise",
    //   role: "CEO",
    //   image: "/company logo/Mahadev Enterprise.png",
    //   content:
    //     "All couriers and platforms in one tool — love it! and It’s flexible and works how we want to work.",
    //   rating: 5,
    // },
  ];

  // Split logos into two sets and double them for a seamless looping marquee
  const row1 = [...allLogos.slice(0, 17), ...allLogos.slice(0, 17)];
  const row2 = [...allLogos.slice(17), ...allLogos.slice(17)];

  return (
    <div className="">
      <section
        className="relative min-h-[calc(100vh-76px)] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50/30"
        id="hero-home"
      >
        {/* Decorative blurred orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl animate-pulse duration-4000" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse duration-6000"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Layout grid */}
          <div className="flex flex-col py-12 lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* ═════ LEFT COLUMN: Badge / Heading / Description ═════ */}
            <div className="flex flex-col justify-center space-y-5 lg:space-y-6 lg:col-span-5 xl:col-span-6 w-full">
              {/* Badge */}
              <div
                className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E3A900]/10 text-[#A67C00] text-sm font-medium">
                  <Users className="w-4 h-4" />
                  Trusted by 2500+ E-commerce Businesses
                </div>
              </div>

              {/* Heading */}
              <div
                className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight mb-4">
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
              className={`relative flex items-center justify-center order-2 lg:col-span-7 xl:col-span-6 w-full h-[450px] sm:h-[520px] lg:h-[580px] transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              {/* Desktop Layout: Character + Absolute Floating Cards (Adjusted coordinates to completely fix clipping layout edge issues) */}
              <div className="relative hidden md:flex items-center justify-center w-[450px] h-[450px] lg:w-[500px] lg:h-[500px]">
                {/* Ambient Lighting Gradients */}
                <div
                  className="absolute rounded-full pointer-events-none w-[320px] h-[320px] lg:w-[400px] lg:h-[400px]"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background:
                      "radial-gradient(circle, rgba(227,169,0,0.06) 0%, rgba(245,235,210,0.08) 50%, transparent 72%)",
                  }}
                />

                {/* Background Vector Dots */}
                <svg
                  className="absolute pointer-events-none top-0 left-0 w-full h-full"
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
                    cx="440"
                    cy="55"
                    r="1.5"
                    fill="#D4A96C"
                    fillOpacity="0.18"
                  />
                  <circle
                    cx="460"
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
                    cx="420"
                    cy="410"
                    r="2"
                    fill="#D4A96C"
                    fillOpacity="0.20"
                  />
                </svg>

                {/* Central Character Asset */}
                <div
                  className="relative z-10 scale-95 lg:scale-100 transition-transform duration-300"
                  style={{
                    animation: "ceoFloat 6s ease-in-out infinite",
                    filter:
                      "drop-shadow(0 25px 50px rgba(15, 42, 68, 0.08)) drop-shadow(0 15px 30px rgba(227, 169, 0, 0.05))",
                  }}
                >
                  <img
                    src="/customer-hero-char.png"
                    alt="Person working on laptop"
                    className="h-[320px] lg:h-[420px] xl:h-[460px] w-auto object-contain"
                  />
                </div>

                {/* Card 1: 4.9/5 — Top-Right */}
                <div
                  className="absolute z-20 flex items-center gap-3 transition-all duration-500 top-[10%] -right-4 lg:-right-8 xl:-right-12"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(12px)",
                    borderRadius: 24,
                    padding: "12px 18px",
                    boxShadow:
                      activeStatIndex === 0
                        ? "0 12px 40px rgba(244, 190, 0, 0.25), 0 4px 12px rgba(0,0,0,0.03)"
                        : "0 10px 30px rgba(15,42,68,0.06), 0 2px 8px rgba(0,0,0,0.02)",
                    border:
                      activeStatIndex === 0
                        ? "2px solid rgba(244, 190, 0, 0.8)"
                        : "1px solid rgba(15,42,68,0.06)",
                    transform:
                      activeStatIndex === 0 ? "scale(1.06)" : "scale(1)",
                    animation: "heroFloatCard 7s ease-in-out infinite",
                    animationDelay: "0.2s",
                  }}
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#FFF8E8]">
                    <Star className="w-4 h-4 text-[#F4BE00]" fill="#F4BE00" />
                  </div>
                  <div>
                    <span className="text-sm lg:text-base font-extrabold leading-none block text-[#0F2A44]">
                      4.9/5
                    </span>
                    <span className="text-[11px] font-medium text-[#6B7B94] mt-0.5 block whitespace-nowrap">
                      Average Rating
                    </span>
                  </div>
                </div>

                {/* Card 2: 50M+ — Bottom-Left */}
                <div
                  className="absolute z-20 flex items-center gap-3 transition-all duration-500 bottom-[12%] -left-6 lg:-left-10"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(12px)",
                    borderRadius: 24,
                    padding: "12px 18px",
                    boxShadow:
                      activeStatIndex === 1
                        ? "0 12px 40px rgba(139, 126, 216, 0.25), 0 4px 12px rgba(0,0,0,0.03)"
                        : "0 10px 30px rgba(15,42,68,0.06), 0 2px 8px rgba(0,0,0,0.02)",
                    border:
                      activeStatIndex === 1
                        ? "2px solid rgba(139, 126, 216, 0.8)"
                        : "1px solid rgba(15,42,68,0.06)",
                    transform:
                      activeStatIndex === 1 ? "scale(1.06)" : "scale(1)",
                    animation: "heroFloatCard 8s ease-in-out infinite",
                    animationDelay: "0.8s",
                  }}
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F0EDF7]">
                    <Package className="w-4 h-4 text-[#8B7ED8]" />
                  </div>
                  <div>
                    <span className="text-sm lg:text-base font-extrabold leading-none block text-[#0F2A44]">
                      50M+
                    </span>
                    <span className="text-[11px] font-medium text-[#6B7B94] mt-0.5 block whitespace-nowrap">
                      Orders Processed
                    </span>
                  </div>
                </div>

                {/* Card 3: 99.9% — Bottom-Right */}
                <div
                  className="absolute z-20 flex items-center gap-3 transition-all duration-500 bottom-[15%] -right-6 lg:-right-10 xl:-right-14"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(12px)",
                    borderRadius: 24,
                    padding: "12px 18px",
                    boxShadow:
                      activeStatIndex === 2
                        ? "0 12px 40px rgba(16, 185, 129, 0.25), 0 4px 12px rgba(0,0,0,0.03)"
                        : "0 10px 30px rgba(15,42,68,0.06), 0 2px 8px rgba(0,0,0,0.02)",
                    border:
                      activeStatIndex === 2
                        ? "2px solid rgba(16, 185, 129, 0.8)"
                        : "1px solid rgba(15,42,68,0.06)",
                    transform:
                      activeStatIndex === 2 ? "scale(1.06)" : "scale(1)",
                    animation: "heroFloatCard 9s ease-in-out infinite",
                    animationDelay: "1.4s",
                  }}
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#E8F5EE]">
                    <Smile className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <div>
                    <span className="text-sm lg:text-base font-extrabold leading-none block text-[#0F2A44]">
                      99.9%
                    </span>
                    <span className="text-[11px] font-medium text-[#6B7B94] mt-0.5 block whitespace-nowrap">
                      Customer Satisfaction
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Layout Layout: Clean Stacked Setup */}
              <div className="md:hidden flex flex-col items-center gap-6 py-4 w-full">
                <div
                  className="relative w-64 h-64 flex items-center justify-center"
                  style={{
                    animation: "heroCharFloatMobile 6s ease-in-out infinite",
                  }}
                >
                  <div
                    className="absolute rounded-full pointer-events-none w-48 h-48"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(227,169,0,0.08) 0%, transparent 70%)",
                    }}
                  />
                  <img
                    src="/customer-hero-char.png"
                    alt="Person working on laptop"
                    className="w-full h-full object-contain relative z-10"
                    style={{
                      filter: "drop-shadow(0 12px 24px rgba(15,42,68,0.08))",
                    }}
                  />
                </div>

                {/* Stat Badges Row */}
                <div className="flex gap-2.5 flex-wrap justify-center px-2">
                  {[
                    {
                      i: Star,
                      v: "4.9/5",
                      l: "Avg Rating",
                      b: "#FFF8E8",
                      c: "#F4BE00",
                      fill: "#F4BE00",
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
                      className="flex items-center gap-2.5 transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.95)",
                        backdropFilter: "blur(8px)",
                        borderRadius: 20,
                        padding: "10px 14px",
                        boxShadow:
                          activeStatIndex === index
                            ? "0 8px 20px rgba(15,42,68,0.1)"
                            : "0 4px 12px rgba(15,42,68,0.04)",
                        border:
                          activeStatIndex === index
                            ? `1.5px solid ${s.c}`
                            : "1px solid rgba(15,42,68,0.06)",
                        transform:
                          activeStatIndex === index
                            ? "scale(1.04)"
                            : "scale(1)",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: s.b }}
                      >
                        <s.i
                          className="w-4 h-4"
                          style={{ color: s.c }}
                          fill={s.fill || "none"}
                        />
                      </div>
                      <div>
                        <span className="text-sm font-extrabold block text-[#0F2A44] leading-none">
                          {s.v}
                        </span>
                        <span className="text-[10px] font-medium text-[#6B7B94] mt-0.5 block whitespace-nowrap">
                          {s.l}
                        </span>
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
                className={`flex flex-col justify-between bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className=" ">
                  <Quote className="w-8 h-8 text-gold-200 mb-4" />
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    "{t.content}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold ">{t.company}</p>
                    <p className="text-sm text-slate-500">
                      {/* {t.role}, {t.company} */}
                      {t.name}
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
