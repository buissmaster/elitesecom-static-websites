import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Clock,
  ChevronRight,
  ShoppingCart,
  Store,
  Package,
  BarChart3,
  Settings,
  RefreshCw,
  TrendingUp,
  Award,
  Zap,
  ChevronLeft,
  Tag,
  LayoutGrid,
  Calculator,
} from "lucide-react";
import { getCategoryArticles, allBlogEntries } from "../lib/blogSlugs";
import { getBlogDetailPath } from "../lib/routes";
import { TopicClusterHub } from "@/components/TopicClusterHub";

interface BlogPageProps {
  onNavigate?: (page: string) => void;
}

function LazyBlogImage({ src, alt }: { src: string; alt: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || shouldLoad) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "160px 0px" },
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={wrapperRef} className="absolute inset-0 bg-slate-100">
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      )}
    </div>
  );
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const catRef = useRef<HTMLDivElement>(null);
  const [canCatLeft, setCanCatLeft] = useState(false);
  const [canCatRight, setCanCatRight] = useState(true);

  const checkCatScroll = () => {
    if (catRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = catRef.current;
      setCanCatLeft(scrollLeft > 0);
      setCanCatRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  const scrollCategories = (dir: "left" | "right") => {
    if (catRef.current) {
      catRef.current.scrollBy({
        left: dir === "left" ? -200 : 200,
        behavior: "smooth",
      });
      setTimeout(checkCatScroll, 300);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    const savedCategory = sessionStorage.getItem("blogCategory");
    if (savedCategory) {
      setActiveCategory(savedCategory);
    }
    setTimeout(checkCatScroll, 200);
  }, []);

  /* ── Categories ── */
  const categories = [
    { name: "All", icon: LayoutGrid },
    { name: "Seller Problems", icon: ShoppingCart },
    { name: "Marketplaces", icon: Store },
    { name: "Shopify & D2C", icon: Tag },
    { name: "Warehouse", icon: Package },
    { name: "Inventory", icon: BarChart3 },
    { name: "OMS", icon: Settings },
    { name: "Returns", icon: RefreshCw },
    { name: "Reconciliation", icon: Calculator },
    { name: "Growth", icon: TrendingUp },
    { name: "Comparisons", icon: Award },
  ];

  const catColors: Record<string, { color: string; bg: string }> = {
    "Seller Problems": { color: "#EA580C", bg: "#bddaf2" },
    Marketplaces: { color: "#2563EB", bg: "#d0e3d6" },
    "Shopify & D2C": { color: "#16A34A", bg: "#d0b8ea" },
    Warehouse: { color: "#EA580C", bg: "#e9e8e9" },
    Inventory: { color: "#16A34A", bg: "#fbefe0" },
    OMS: { color: "#9333EA", bg: "#837e8d" },
    Returns: { color: "#DB2777", bg: "#a6cbc3" },
    Reconciliation: { color: "#059669", bg: "#d4d9db" },
    Growth: { color: "#F5B800", bg: "#ccc2c0" },
    Comparisons: { color: "#0891B2", bg: "#b1c2e3" },
  };

  const catImages: Record<string, string> = {
    "Seller Problems": "/blog-cat-seller.jpg",
    Marketplaces: "/blog-cat-market.jpg",
    "Shopify & D2C": "/blog-cat-shopify.jpg",
    Warehouse: "/blog-cat-warehouse.jpg",
    Inventory: "/blog-cat-inventory.jpg",
    OMS: "/blog-cat-oms.jpg",
    Returns: "/blog-cat-returns.jpg",
    Growth: "/blog-cat-growth.jpg",
    Comparisons: "/blog-cat-compare.jpg",
  };

  /* ── Filtered articles ── */
  const filteredArticles =
    activeCategory === "All"
      ? allBlogEntries
      : getCategoryArticles(activeCategory);

  const featuredPost = allBlogEntries[0];
  const featuredColor = catColors[featuredPost.category] || {
    color: "#2563EB",
    bg: "#EFF6FF",
  };

  const goToBlog = (
    event: React.MouseEvent<HTMLAnchorElement>,
    slug: string,
  ) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    sessionStorage.setItem("blogCategory", activeCategory);
    sessionStorage.setItem("blogScroll", String(window.scrollY));
    window.history.pushState({}, "", getBlogDetailPath(slug));
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  /* ═══════════════════════════════════════════════════════════ */
  return (
    <>
    <Helmet>
      <title>eCommerce & OMS Blog | Elitesecom</title>

      <meta
        name="description"
        content="Read the latest blogs on ecommerce growth, Order Management Systems, inventory management, warehouse operations, payment reconciliation and marketplace selling from Elitesecom."
      />

      <link
        rel="canonical"
        href="https://www.elitesecom.ai/Blog"
      />
    </Helmet>

    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-76px)] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gold/10">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-[10%] w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-[10%] w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div
              className={`space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-700 text-sm font-medium">
                <Zap className="w-4 h-4" /> E-Commerce Knowledge Hub
              </div>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[56px]  leading-tight">
                OMS, Reconciliation &{" "}
                <span className="text-gold-500">Operations Guides</span>
              </h1>
              <p className="text-slate-500 text-lg max-w-md leading-relaxed">
                Expert content on order management systems, payment
                reconciliation, warehouse management, and multichannel inventory
                for Indian marketplace sellers.
              </p>
            </div>
            <div
              className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <a
                href={getBlogDetailPath(featuredPost.slug)}
                onClick={(event) => goToBlog(event, featuredPost.slug)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-pointer block"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Scaled overlay: copy of the small-card left black panel (2×) */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Logo: equal padding from top and left */}
                    <img
                      src="/logo-white.png"
                      alt="Elitesecom"
                      className="absolute w-28 left-4 top-4"
                      style={{
                        // keep image rendering untouched
                      }}
                    />

                    {/* Badge: directly below the logo with consistent spacing */}
                    <span
                      className="absolute inline-flex items-center rounded-full px-4 py-2 text-[13px] font-semibold"
                      style={{
                        left: 16,
                        top: 60,
                        backgroundColor: "#DBEAFE",
                        color: "#1E3A8A",
                      }}
                    >
                      Feature Guide
                    </span>

                    {/* Headline block: exact 4-line layout, left-aligned, constrained from diagonal edge */}
                    <div
                      className="absolute font-bold text-white text-left"
                      style={{
                        left: 16,
                        top: 110, // moved upward to sit ~16-20px below the badge
                        right: 50, // maintain 40-50px padding from diagonal edge
                        fontSize: "22px",
                        lineHeight: 1.22,
                        whiteSpace: "normal",
                        display: "block",
                      }}
                    >
                      <div>Manage Multi-</div>
                      <div>Channel Orders</div>
                      <div>from One</div>
                      <div>Dashboard</div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-slate-500 text-xs leading-5 line-clamp-3 pr-2">
                      {featuredPost.subtitle}
                    </p>
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-slate-300 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <TopicClusterHub
        activeCategory={activeCategory}
        onSelectCategory={(category) => {
          setActiveCategory(category);
          sessionStorage.setItem("blogCategory", category);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* CATEGORY PILLS */}
      <section className="py-3 border-y border-slate-100 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3">
          <button
            onClick={() => scrollCategories("left")}
            disabled={!canCatLeft}
            className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${canCatLeft ? "border-slate-200 hover:bg-gold hover:border-gold text-slate-600 hover:" : "border-slate-100 opacity-30 text-slate-300"}`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div
            ref={catRef}
            onScroll={checkCatScroll}
            className="flex-1 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex gap-2 justify-start">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border flex-shrink-0 ${isActive ? "bg-gold  border-gold shadow-sm" : "bg-slate-50 text-slate-600 border-slate-100 hover:bg-gold/10 hover:border-gold/30"}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            onClick={() => scrollCategories("right")}
            disabled={!canCatRight}
            className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${canCatRight ? "border-slate-200 hover:bg-gold hover:border-gold text-slate-600 hover:" : "border-slate-100 opacity-30 text-slate-300"}`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-16 data-page-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading font-bold text-2xl ">
              {activeCategory === "All" ? "All Articles" : `${activeCategory}`}
            </h2>
            <span className="text-slate-400 text-sm">
              {filteredArticles.length} articles
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">
                No articles found in this category.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              {filteredArticles.map((post, idx) => {
                const c = catColors[post.category] || {
                  color: "#2563EB",
                  bg: "#EFF6FF",
                };
                // const img = catImages[post.category] || "/blog-hero-new.jpg";
                const img = post?.image || "/blog-hero-new.jpg";
                const useOverlayLayout = true;

                return (
                  <a
                    key={post.slug}
                    href={getBlogDetailPath(post.slug)}
                    onClick={(event) => goToBlog(event, post.slug)}
                    className={`flex flex-col group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: `${Math.min(idx * 50, 300)}ms` }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <LazyBlogImage
                          src={img}
                          alt={post.title}
                        />
           {useOverlayLayout && (
  <div className="absolute inset-0">

    {/* Logo */}
    <img
      src="/logo-white.png"
      alt="Elitesecom"
      className="absolute w-14 left-2 top-5"
    />

    {/* Category Pill */}
   <span
  className="absolute rounded-full px-2 py-[2px] text-[8px] font-semibold text-slate-900"
  style={{
    backgroundColor: c.bg,
    left: "8px",
    top: "50px",
  }}
>
  {post.category}
</span>

    {/* Heading */}
    <h3
      className="absolute text-white font-bold leading-tight"
      style={{
        left: "12px",
        top: "76px",
        fontSize: "11px",
        maxWidth: "82px",
      }}
    >
      {post.title}
    </h3>

  </div>
)}
            {/* <span
                          className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-white/90"
                          style={{ color: c.color }}
                        >
                          {post.category}
                        </span> */}
                      </div>
                    <div className="p-4">
                       {!useOverlayLayout && (
                    <span
                     className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold mb-3"
                     style={{
                       color: c.color,
                       backgroundColor: c.bg,
                     }}
                   >
                     {post.category}
                   </span>
                  )}

                      {!useOverlayLayout && (
                        <h3 className="font-bold mb-2 group-hover:text-gold-600 transition-colors text-sm line-clamp-2">
                         {post.title}
                        </h3>
                      )}
                      <p className="text-slate-500 text-xs line-clamp-2 mb-1">
                        {post.subtitle}
                      </p>
                      <div className="flex justify-end">
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 lg:p-14">
            <h2 className="font-heading font-bold text-3xl text-white mb-4">
              Ready to Simplify Your Operations?
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Manage orders, inventory, warehouses, and returns from one
              platform.
            </p>
            <button
              onClick={() => onNavigate?.("contact")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold  font-semibold hover:shadow-[0_8px_30px_rgba(245,158,11,0.3)] transition-all hover:-translate-y-0.5"
            >
              Book Demo
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
   </> 
  );
}
