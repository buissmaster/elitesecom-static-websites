import { useEffect, useState, useRef } from "react";
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
    "Seller Problems": { color: "#EA580C", bg: "#FFF7ED" },
    Marketplaces: { color: "#2563EB", bg: "#EFF6FF" },
    "Shopify & D2C": { color: "#16A34A", bg: "#F0FDF4" },
    Warehouse: { color: "#EA580C", bg: "#FFF7ED" },
    Inventory: { color: "#16A34A", bg: "#F0FDF4" },
    OMS: { color: "#9333EA", bg: "#FAF5FF" },
    Returns: { color: "#DB2777", bg: "#FFF1F2" },
    Reconciliation: { color: "#059669", bg: "#ECFDF5" },
    Growth: { color: "#F5B800", bg: "#FFFBEB" },
    Comparisons: { color: "#0891B2", bg: "#F0F9FF" },
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
                href={getBlogDetailPath(allBlogEntries[0].slug)}
                onClick={(event) => goToBlog(event, allBlogEntries[0].slug)}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border border-slate-100 block"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src="/blog main.png"
                    alt="Featured"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold  text-xs font-bold">
                    Featured Guide
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg  mb-2 group-hover:text-gold-600 transition-colors">
                    How to Manage Amazon, Flipkart, Meesho & Shopify Orders from
                    One Dashboard
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />8 Min Read
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-gold group-hover:gap-2 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredArticles.map((post, idx) => {
                const c = catColors[post.category] || {
                  color: "#2563EB",
                  bg: "#EFF6FF",
                };
                // const img = catImages[post.category] || "/blog-hero-new.jpg";
                const img = post?.image || "/blog-hero-new.jpg";
                return (
                  <a
                    key={post.slug}
                    href={getBlogDetailPath(post.slug)}
                    onClick={(event) => goToBlog(event, post.slug)}
                    className={`flex flex-col justify-between group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: `${Math.min(idx * 50, 300)}ms` }}
                  >
                    <div className="">
                      <div className="relative h-40 overflow-hidden">
                        <LazyBlogImage
                          src={img}
                          alt={post.title}
                        />
                        <span
                          className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-white/90"
                          style={{ color: c.color }}
                        >
                          {post.category}
                        </span>
                      </div>
                    <div className="p-4">
                      <h3 className="font-bold  mb-2 group-hover:text-gold-600 transition-colors text-sm line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-xs line-clamp-2 mb-3">
                        {post.subtitle}
                      </p>
                    </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-end pt-2 border-t border-slate-100">
                        {/* <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span> */}
                        <ChevronRight className="float-right w-4 h-4 text-slate-300 group-hover:text-gold group-hover:translate-x-1 transition-all" />
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
  );
}
