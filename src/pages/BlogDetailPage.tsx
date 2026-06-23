import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Clock,
  Calendar,
  Tag,
  User,
  ChevronLeft,
  Lightbulb,
  CheckCircle,
  BookOpen,
  Share2,
} from "lucide-react";
import {
  findBlogBySlug,
  findBlogById,
  allBlogEntries,
  type BlogEntry,
} from "../lib/blogSlugs";

interface BlogDetailProps {
  onNavigate?: (page: string) => void;
}

/* ── Category images ── */
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

const catColors: Record<string, string> = {
  "Seller Problems": "#EA580C",
  Marketplaces: "#2563EB",
  "Shopify & D2C": "#16A34A",
  Warehouse: "#EA580C",
  Inventory: "#16A34A",
  OMS: "#9333EA",
  Returns: "#DB2777",
  Growth: "#F5B800",
  Comparisons: "#0891B2",
};

/* ── Unique text sections per article ── */
function getArticleContent(entry: BlogEntry) {
  // console.log(entry);
  const { title, category } = entry;
  /* Category-specific section text */
  const contentLibrary: Record<
    string,
    Record<
      string,
      {
        sections: { title: string; text: string }[];
        proTip: string;
        takeaways: string[];
      }
    >
  > = {
    "Solution for Growing Businesses": {
      "solution-for-growing-businesses": {
        sections: [
          {
            title: "Introduction",
            text: `
              <p>Managing an ecommerce business today is more complex than ever. Sellers are no longer limited to a single marketplace or website. Most growing brands sell across multiple channels such as Amazon, Flipkart, Meesho, Shopify, and other ecommerce platforms to maximize their reach and revenue.</p>

              <p>While multi-channel selling creates more opportunities, it also introduces operational challenges. Orders come from different platforms, inventory needs to be synchronized, returns must be tracked accurately, payments need reconciliation, and warehouse operations must run efficiently.</p>

              <p>When these processes are handled through separate systems, businesses often face delays, errors, overselling issues, and increased operational costs.</p>

              <p>Elitesecom solves these challenges by centralizing ecommerce operations into one unified platform. From order management and inventory control to warehouse operations, reconciliation, and analytics, Elitesecom provides complete visibility and control over your business.</p>
            `,
          },

          {
            title: "Why Centralized Ecommerce Operations Matter",
            text: `
              <p>As order volumes grow, managing operations through multiple dashboards becomes inefficient.</p>

              <h4>Common challenges include:</h4>

              <ul>
                <li>Switching between different seller panels</li>
                <li>Manually updating inventory across channels</li>
                <li>Tracking payments from multiple marketplaces</li>
                <li>Managing returns and refunds separately</li>
                <li>Handling warehouse operations through disconnected systems</li>
                <li>Generating reports from scattered data sources</li>
              </ul>

              <p>These inefficiencies consume valuable time and limit business growth.</p>

              <p>A centralized system eliminates these issues by bringing all critical ecommerce functions into one platform.</p>
            `,
          },

          {
            title: "1. Multi-channel Order Management",
            text: `
              <p>One of the biggest challenges for ecommerce sellers is managing orders from multiple sales channels.</p>

              <p>Elitesecom automatically consolidates orders from Amazon, Flipkart, Meesho, Shopify, and other connected platforms into a single dashboard.</p>

              <p>Instead of logging into multiple seller accounts, businesses can manage every order from one place.</p>

              <h4>Key Benefits</h4>

              <ul>
                <li>Unified order processing</li>
                <li>Real-time order synchronization</li>
                <li>Faster fulfillment workflows</li>
                <li>Improved operational visibility</li>
                <li>Reduced manual effort</li>
              </ul>
            `,
          },

          {
            title: "2. Warehouse Management System (WMS)",
            text: `
              <p>Efficient warehouse operations are critical for delivering orders accurately and on time.</p>

              <p>Elitesecom includes a powerful Warehouse Management System designed to streamline fulfillment processes.</p>

              <h4>The system helps businesses manage:</h4>

              <ul>
                <li>Stock allocation</li>
                <li>Picking operations</li>
                <li>Packing workflows</li>
                <li>Inventory movement</li>
                <li>Dispatch management</li>
              </ul>

              <h4>Key Benefits</h4>

              <ul>
                <li>Faster order fulfillment</li>
                <li>Improved warehouse accuracy</li>
                <li>Reduced picking errors</li>
                <li>Better inventory control</li>
                <li>Enhanced operational efficiency</li>
              </ul>
            `,
          },

          {
            title: "3. Centralized Inventory Management System",
            text: `
              <p>Inventory management becomes increasingly difficult when selling across multiple channels.</p>

              <p>Elitesecom provides a centralized inventory management system that keeps stock synchronized across all connected sales channels.</p>

              <h4>Features</h4>

              <ul>
                <li>Real-time inventory updates</li>
                <li>SKU-level stock tracking</li>
                <li>Multi-channel inventory synchronization</li>
                <li>Multi-warehouse visibility</li>
                <li>Automated stock adjustments</li>
              </ul>

              <h4>Key Benefits</h4>

              <ul>
                <li>Prevent overselling</li>
                <li>Reduce stock mismatches</li>
                <li>Improve inventory accuracy</li>
                <li>Minimize cancellations</li>
                <li>Increase customer satisfaction</li>
              </ul>
            `,
          },

          {
            title: "4. Return Reconciliation",
            text: `
              <p>Returns are an unavoidable part of ecommerce operations.</p>

              <p>Elitesecom simplifies return reconciliation by centralizing return management and tracking.</p>

              <h4>Features</h4>

              <ul>
                <li>Return order tracking</li>
                <li>Return status monitoring</li>
                <li>Inventory updates after returns</li>
                <li>Marketplace return reconciliation</li>
                <li>Refund visibility</li>
              </ul>
            `,
          },

          {
            title: "5. Payment Reconciliation",
            text: `
              <p>Tracking payments from multiple marketplaces can become complicated as order volumes increase.</p>

              <p>Elitesecom automates payment reconciliation by matching settlements with actual order data.</p>

              <h4>Features</h4>

              <ul>
                <li>Settlement tracking</li>
                <li>Order-to-payment matching</li>
                <li>Fee and deduction visibility</li>
                <li>Marketplace payout monitoring</li>
                <li>Financial reconciliation reports</li>
              </ul>
            `,
          },

          {
            title: "6. Advanced Dashboard & Reports",
            text: `
              <p>Elitesecom provides advanced dashboards and reporting tools that bring all business data into one centralized view.</p>

              <h4>Monitor Key Metrics</h4>

              <ul>
                <li>Order performance</li>
                <li>Revenue trends</li>
                <li>Inventory status</li>
                <li>Return rates</li>
                <li>Warehouse efficiency</li>
                <li>Payment reconciliation</li>
                <li>Channel-wise sales performance</li>
              </ul>
            `,
          },

          {
            title: "7. One-Click All Platform Label Download",
            text: `
              <p>Shipping label management can become a repetitive and time-consuming task when handling orders from multiple marketplaces.</p>

              <h4>Features</h4>

              <ul>
                <li>Bulk label generation</li>
                <li>Marketplace label consolidation</li>
                <li>Centralized shipping workflow</li>
                <li>Faster fulfillment processing</li>
              </ul>
            `,
          },

          {
            title: "8. iOS & Android Mobile App",
            text: `
              <p>Elitesecom offers dedicated iOS and Android mobile applications that allow business owners and teams to stay connected wherever they are.</p>

              <h4>Mobile Access To</h4>

              <ul>
                <li>Order management</li>
                <li>Inventory tracking</li>
                <li>Sales performance</li>
                <li>Shipment monitoring</li>
                <li>Business reports</li>
                <li>Operational updates</li>
              </ul>
            `,
          },

          {
            title: "The Elitesecom Advantage",
            text: `
              <ul>
                <li>✓ Multi-channel Order Management</li>
                <li>✓ Warehouse Management System</li>
                <li>✓ Centralized Inventory Management</li>
                <li>✓ Return Reconciliation</li>
                <li>✓ Payment Reconciliation</li>
                <li>✓ Advanced Dashboard & Reports</li>
                <li>✓ One-Click All Platform Label Download</li>
                <li>✓ iOS & Android Mobile App</li>
              </ul>

              <p>Instead of relying on disconnected tools and manual processes, businesses can manage everything through a single integrated platform.</p>
            `,
          },

          {
            title: "Conclusion",
            text: `
              <p>As ecommerce businesses scale, operational complexity grows rapidly.</p>

              <p>Elitesecom centralizes every critical ecommerce function into one powerful platform, helping businesses streamline operations, improve accuracy, increase productivity, and make smarter decisions.</p>

              <p>By bringing your entire ecommerce workflow into one dashboard, Elitesecom helps you focus less on managing systems and more on growing your business.</p>
            `,
          },
        ],
        proTip:
          "Centralizing order management, inventory, warehouse operations, and reconciliation into a single platform significantly improves operational efficiency and reduces manual errors.",

        takeaways: [
          "Manage orders from all channels in one dashboard",
          "Synchronize inventory across marketplaces",
          "Automate payment reconciliation",
          "Track returns from a centralized system",
          "Monitor business performance through advanced dashboards",
          "Improve fulfillment with WMS",
          "Download shipping labels in one click",
          "Manage operations from mobile apps",
        ],
      },
    },
    "Seller Problems": {
      "why-sellers-lose-orders-during-sale-events": {
        sections: [
          {
            title: "The Sale Event Challenge",
            text: "Sale events like Big Billion Days and Prime Day bring massive traffic spikes. Without proper preparation, sellers lose 15-30% of potential orders due to inventory sync delays, website crashes, and manual processing bottlenecks.",
          },
          {
            title: "Common Order Loss Reasons",
            text: "Orders are lost primarily through stockouts, listing errors, delayed order acceptance, and payment gateway failures. Each of these has preventable root causes that can be addressed with proper planning and technology.",
          },
          {
            title: "Pre-Sale Preparation",
            text: "Successful sellers begin preparation 4-6 weeks before major sales. This includes inventory buffer stocking, system stress testing, staff training, and setting up automated order processing workflows.",
          },
        ],
        proTip:
          "Sellers who pre-buffer inventory by 40% before major sales see 85% fewer stockouts during peak periods.",
        takeaways: [
          "Pre-buffer inventory by 40% before major sales",
          "Test all systems under simulated peak load",
          "Set up automated order acceptance",
          "Monitor stock levels in real-time",
          "Have backup payment gateways ready",
        ],
      },
      "how-to-handle-1000-orders-per-day-without-hiring-more-staff": {
        sections: [
          {
            title: "The Scaling Problem",
            text: "Many sellers believe handling 1000+ daily orders requires a proportionally larger team. However, leading sellers process 5x more orders per employee by leveraging automation, batch processing, and intelligent workflow design.",
          },
          {
            title: "Automation-First Approach",
            text: "Start by automating repetitive tasks: order import, label generation, inventory updates, and customer notifications. Each automated task frees up 2-3 hours of daily manual work.",
          },
          {
            title: "Workflow Optimization",
            text: "Organize warehouse operations using zone picking, batch processing, and smart packing stations. Combine pick lists by zone to reduce walking time by up to 60%.",
          },
        ],
        proTip:
          "One trained employee with proper automation can process 300+ orders per day compared to 80-100 with manual methods.",
        takeaways: [
          "Automate order import and label generation",
          "Use zone picking to reduce walking time",
          "Implement batch processing for similar orders",
          "Set up auto-rules for common scenarios",
          "Measure and optimize daily processing metrics",
        ],
      },
    },
    Inventory: {
      "inventory-forecasting-for-ecommerce": {
        sections: [
          {
            title: "What is Inventory Forecasting",
            text: "Inventory forecasting is the process of predicting future inventory needs based on historical sales data, market trends, and seasonal patterns. Accurate forecasting helps businesses maintain optimal stock levels, reducing both stockouts and excess inventory.",
          },
          {
            title: "Why It Matters",
            text: "Poor inventory forecasting costs ecommerce businesses billions annually. Overstocking ties up capital and increases storage costs, while stockouts lead to lost sales and dissatisfied customers.",
          },
          {
            title: "Best Practices",
            text: "Start by analyzing at least 12 months of sales data across all channels. Factor in marketplace-specific events like Amazon Prime Day and Flipkart Big Billion Days. Use safety stock formulas to buffer against demand variability.",
          },
        ],
        proTip:
          "Brands using real-time inventory synchronization can reduce overselling risks by up to 95% while improving stock availability across all channels simultaneously.",
        takeaways: [
          "Analyze 12+ months of sales data across all channels",
          "Factor in marketplace-specific events and seasonality",
          "Use safety stock formulas to buffer demand variability",
          "Integrate forecasting with your OMS for real-time adjustments",
          "Review and adjust forecasts based on actual performance monthly",
        ],
      },
      "safety-stock-what-it-is-and-why-it-matters": {
        sections: [
          {
            title: "Understanding Safety Stock",
            text: "Safety stock is extra inventory kept beyond expected demand to protect against uncertainty. It acts as a buffer against demand fluctuations, supplier delays, and forecast errors.",
          },
          {
            title: "Calculating Safety Stock",
            text: "The standard formula considers average daily sales, maximum daily sales, lead time, and maximum lead time. More sophisticated approaches use statistical methods based on desired service levels.",
          },
          {
            title: "When to Adjust",
            text: "Safety stock levels should be reviewed monthly and adjusted based on actual demand patterns, supplier reliability changes, and seasonal factors. Over time, better data leads to lower safety stock requirements.",
          },
        ],
        proTip:
          "Most ecommerce businesses maintain safety stock equal to 15-25% of average monthly sales for their top 20% of products.",
        takeaways: [
          "Calculate safety stock based on demand variability and lead time",
          "Review safety stock levels monthly",
          "Focus safety stock investment on top-selling products",
          "Track service level metrics to validate safety stock levels",
          "Reduce safety stock as forecast accuracy improves",
        ],
      },
    },
    OMS: {
      "advanced-oms-features-every-growing-business-needs": {
        sections: [
          {
            title: "Essential OMS Features",
            text: "A modern OMS must handle multi-channel order aggregation, intelligent order routing, real-time inventory sync, automated fulfillment rules, and comprehensive analytics. These features form the backbone of scalable ecommerce operations.",
          },
          {
            title: "Intelligent Routing",
            text: "Smart order routing considers inventory availability, warehouse proximity, shipping costs, and carrier capacity to automatically assign each order to the optimal fulfillment location.",
          },
          {
            title: "Automation Engine",
            text: "Rule-based automation handles routine decisions like order approval, carrier selection, and customer communication. This reduces manual intervention by 80% while improving accuracy.",
          },
        ],
        proTip:
          "Sellers who fully utilize OMS automation report 3x faster order processing and 50% fewer errors.",
        takeaways: [
          "Implement multi-channel order aggregation",
          "Use intelligent order routing",
          "Set up rule-based automation",
          "Enable real-time inventory synchronization",
          "Leverage analytics for continuous improvement",
        ],
      },
      "ai-in-order-management-systems": {
        sections: [
          {
            title: "AI in Modern OMS",
            text: "Artificial intelligence is transforming order management through demand forecasting, fraud detection, intelligent routing, and predictive analytics. AI-powered systems learn from patterns to make better decisions over time.",
          },
          {
            title: "Key AI Applications",
            text: "Machine learning models predict demand spikes, identify fraudulent orders, optimize shipping routes, and personalize customer communication. Natural language processing enables conversational interfaces for order queries.",
          },
          {
            title: "Implementation Strategy",
            text: "Start with one AI use case that addresses your biggest pain point. Most sellers begin with demand forecasting or fraud detection, then expand to other applications as they see results.",
          },
        ],
        proTip:
          "AI-powered demand forecasting can improve accuracy by 30-40% compared to traditional statistical methods.",
        takeaways: [
          "Identify your biggest operational pain point",
          "Start with one AI use case",
          "Ensure data quality before implementing AI",
          "Measure ROI before expanding to other use cases",
          "Choose cloud-based AI for easier integration",
        ],
      },
    },
    Warehouse: {
      "what-is-warehouse-management": {
        sections: [
          {
            title: "Warehouse Management Basics",
            text: "Warehouse management encompasses the processes and systems used to control and administer warehouse operations from the time inventory enters until it leaves. It includes receiving, storage, picking, packing, and shipping.",
          },
          {
            title: "Key Components",
            text: "A complete warehouse management system covers inventory tracking, space optimization, labor management, equipment utilization, and performance measurement. Each component must work together for efficient operations.",
          },
          {
            title: "Technology Role",
            text: "Modern warehouse management relies on barcode scanning, mobile devices, WMS software, and automation equipment. Technology transforms warehouses from cost centers into competitive advantages.",
          },
        ],
        proTip:
          "Companies that implement a formal WMS see an average 25% improvement in warehouse productivity within the first year.",
        takeaways: [
          "Map your complete warehouse workflow",
          "Implement barcode scanning for accuracy",
          "Use WMS software for visibility and control",
          "Define KPIs for continuous improvement",
          "Plan for automation as volumes grow",
        ],
      },
      "oms-vs-wms-key-differences": {
        sections: [
          {
            title: "What is WMS",
            text: "A Warehouse Management System (WMS) focuses on optimizing warehouse operations including receiving, put-away, picking, packing, and shipping. It manages bin locations and tracks inventory movements within the warehouse.",
          },
          {
            title: "What is OMS",
            text: "An Order Management System handles the broader order lifecycle across all sales channels. It decides which warehouse should fulfill an order and coordinates inventory across locations.",
          },
          {
            title: "How They Work Together",
            text: "When an order arrives, the OMS determines the optimal warehouse. It then sends the order to the WMS, which handles physical picking, packing, and shipping. The WMS updates the OMS with fulfillment status.",
          },
        ],
        proTip:
          "Integrated WMS and OMS systems reduce order processing time by up to 60% and improve inventory accuracy to 99.9%.",
        takeaways: [
          "WMS optimizes physical warehouse operations",
          "OMS orchestrates orders across channels and warehouses",
          "Integration enables intelligent order routing",
          "Combined visibility improves customer service",
          "Start with OMS and add WMS as warehouse operations grow",
        ],
      },
    },
    Returns: {
      "how-to-reduce-product-returns": {
        sections: [
          {
            title: "Understanding Return Reasons",
            text: "The first step in reducing returns is understanding why customers return products. Common reasons include wrong size (25%), product not as described (22%), damaged in transit (18%), and changed mind (15%).",
          },
          {
            title: "Product Page Optimization",
            text: "Detailed product descriptions, accurate sizing guides, and high-quality images from multiple angles can reduce size-related returns by up to 40%. Include customer reviews with photos.",
          },
          {
            title: "Quality Control",
            text: "Implement thorough quality checks before products leave your warehouse. Partner with reliable suppliers and conduct regular quality audits.",
          },
        ],
        proTip:
          "Companies that implement comprehensive return prevention strategies see average return rate reductions of 35%.",
        takeaways: [
          "Analyze return data to identify primary causes",
          "Optimize product pages with detailed descriptions",
          "Implement thorough quality control",
          "Invest in durable packaging",
          "Include clear sizing guides and fit information",
        ],
      },
    },
    Growth: {
      "how-to-scale-from-100-orders-to-10000-orders-monthly": {
        sections: [
          {
            title: "The Scaling Roadmap",
            text: "Scaling from 100 to 10,000 orders per month requires systematic improvements across inventory management, order processing, warehouse operations, and team structure. Each 10x milestone demands different capabilities.",
          },
          {
            title: "Phase-Based Approach",
            text: "Phase 1 (100-500): Fix basics with inventory sync and automation. Phase 2 (500-2000): Add warehouse systems and team structure. Phase 3 (2000-10000): Full automation with AI-powered optimization.",
          },
          {
            title: "Technology Investment",
            text: "At each phase, different technology investments become critical. Early investments in OMS and inventory sync pay dividends as volume grows.",
          },
        ],
        proTip:
          "Sellers who invest in OMS before reaching 500 daily orders scale 2x faster than those who wait until they hit operational crises.",
        takeaways: [
          "Invest in OMS before hitting 500 daily orders",
          "Build team structure for each growth phase",
          "Automate inventory sync from day one",
          "Design processes for 10x current volume",
          "Measure and optimize at each milestone",
        ],
      },
    },
    Comparisons: {
      "oms-vs-erp-complete-comparison-guide": {
        sections: [
          {
            title: "What is an OMS",
            text: "An Order Management System (OMS) is a specialized platform designed to handle the complete order lifecycle from receipt to delivery. It manages order routing, inventory allocation, and fulfillment coordination across multiple sales channels.",
          },
          {
            title: "What is an ERP",
            text: "An Enterprise Resource Planning (ERP) system is a comprehensive business management platform that integrates finance, HR, manufacturing, supply chain, and other core functions.",
          },
          {
            title: "Key Differences",
            text: "OMS focuses specifically on order orchestration with deep marketplace integrations, real-time inventory sync, and flexible fulfillment rules. ERP provides broad business management but often lacks specialized multi-channel capabilities.",
          },
        ],
        proTip:
          "The most successful ecommerce brands use a best-of-breed approach, combining a specialized OMS for order management with an ERP for financial and operational management.",
        takeaways: [
          "OMS specializes in multi-channel order orchestration",
          "ERP provides broad business management",
          "Modern OMS offers deeper marketplace integrations",
          "Many businesses benefit from using both systems",
          "Choose based on your primary operational challenges",
        ],
      },
    },
  };

  /* Try to find specific text, fall back to generic */
  const specific = contentLibrary[category]?.[entry.slug];
  if (specific) {
    return {
      toc: specific.sections.map((section) => section.title),
      ...specific,
    };
  }

  /* Generic fallback with article-specific text */
  const sections = [
    {
      title: "Key Concepts",
      text: `${title} is a critical topic for ecommerce sellers. Understanding the fundamentals helps you make better decisions and avoid costly mistakes that can impact your bottom line.`,
    },
    {
      title: "Best Practices",
      text: `Leading sellers follow proven best practices for ${title.toLowerCase()}. These include systematic workflows, proper technology adoption, and continuous monitoring of key performance indicators.`,
    },
    {
      title: "Implementation",
      text: `Start by assessing your current situation and identifying gaps in ${title.toLowerCase()}. Then implement changes incrementally, measuring results at each step to minimize disruption while maximizing improvement.`,
    },
  ];

  return {
    toc: sections.map((section) => section.title),
    sections,
    proTip: `Investing time in ${title.toLowerCase()} pays dividends through improved efficiency, reduced costs, and better customer satisfaction.`,
    takeaways: [
      "Assess your current operations",
      "Identify key improvement areas",
      "Implement changes incrementally",
      "Measure results continuously",
      "Iterate based on data",
    ],
  };
}

export function BlogDetailPage({ onNavigate }: BlogDetailProps) {
  const [activeSection, setActiveSection] = useState("");
  const [entry, setEntry] = useState<BlogEntry | null>(null);

  /* ── Parse slug from URL ── handles both new slugs and old IDs */
  useEffect(() => {
    const loadBlog = () => {
      const hash = window.location.hash;
      const slugPart = hash.replace("#Blog/", "").replace("#/Blog/", "");

      let blog: BlogEntry | undefined;

      /* Try slug lookup first */
      blog = findBlogBySlug(slugPart);

      /* If not found, try old ID lookup */
      if (!blog) {
        const byId = findBlogById(slugPart);
        if (byId) blog = byId;
      }

      /* Final fallback */
      if (!blog) blog = allBlogEntries[0];

      setEntry(blog);
      window.scrollTo(0, 0);
      document.title = `${blog.title} | ElitesEcom Blog`;
    };

    loadBlog();
    window.addEventListener("hashchange", loadBlog);
    return () => window.removeEventListener("hashchange", loadBlog);
  }, []);

  const isClickScrolling = useRef(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id^='section-']");

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("data-title") || "");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-120px 0px -60% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [entry]);

  const handleTocClick = (item: string, idx: number) => {
    setActiveSection(item);
    const element = document.getElementById(`section-${idx}`);
    if (element) {
      isClickScrolling.current = true;
      element.scrollIntoView({ behavior: "smooth", block: "start" });

      // Release scroll block lock after the jump animation ends
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  const goBack = () => {
    const savedScroll = sessionStorage.getItem("blogScroll") || "0";
    window.location.hash = "#/Blog";
    setTimeout(() => {
      window.scrollTo(0, parseInt(savedScroll));
    }, 100);
  };

  const goToBlog = (slug: string) => {
    window.location.hash = `#Blog/${slug}`;
    window.scrollTo(0, 0);
  };

  const shareArticle = async () => {
    if (!entry) return;

    const shareData = {
      title: entry.title,
      text: entry.subtitle,
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard?.writeText(window.location.href);
  };

  if (!entry) return null;

  // const color = catColors[entry.category] || '#2563EB';
  const color = catColors[entry.category] || "#2563EB";
  const image = entry.image || "/blog-hero-new.jpg";
  const text = getArticleContent(entry);

  const relatedPosts = allBlogEntries
    .filter((e) => e.category === entry.category && e.slug !== entry.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Banner */}
      <section className="relative min-h-[520px] lg:min-h-[620px] overflow-hidden bg-slate-950">
        <img
          src={image}
          alt={entry.title}
          className="absolute inset-0 h-full w-full object-cover scale-[1.04] motion-kenburns opacity-90"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,184,0,0.24),transparent_28%),linear-gradient(105deg,rgba(15,23,42,0.92)_0%,rgba(15,23,42,0.76)_42%,rgba(15,23,42,0.34)_100%)]" />
        <div className="absolute left-[6%] top-[20%] h-28 w-28 rounded-full border border-white/15 motion-orbit opacity-70" />
        <div className="absolute bottom-[18%] right-[10%] h-20 w-20 rounded-3xl border border-gold/30 bg-gold/10 blur-[1px] motion-float-soft" />

        <div className="relative z-10 flex min-h-[520px] lg:min-h-[620px] items-end px-4 pb-10 pt-20 sm:px-6 lg:px-8 lg:pb-16">
          <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <div className="max-w-4xl">
              <button
                onClick={goBack}
                className="motion-link mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-xl transition-all hover:border-gold/60 hover:bg-gold/15 hover:text-gold"
              >
                <ChevronLeft className="w-4 h-4" /> Back to Blog
              </button>
              {/* <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white shadow-sm ring-1 ring-white/20 backdrop-blur-xl">
                  <Tag className="w-3.5 h-3.5" /> {entry.category}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-bold text-slate-950 shadow-[0_12px_32px_rgba(245,184,0,0.35)]">
                  <BookOpen className="w-3.5 h-3.5" /> {entry.readTime}
                </span>
              </div> */}
              <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-[58px]">
                {entry.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-white/80 sm:text-lg">
                {entry.subtitle}
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="motion-glass-card rounded-3xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Reading Snapshot
                </p>
                <div className="mt-5 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                    <span className="text-sm text-white/70">Sections</span>
                    <span className="text-2xl font-bold">
                      {text.sections.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                    <span className="text-sm text-white/70">Category</span>
                    <span className="text-sm font-semibold">
                      {entry.category}
                    </span>
                  </div>
                  <button
                    onClick={shareArticle}
                    className="motion-button inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-gold"
                  >
                    <Share2 className="h-4 w-4" />
                    Share Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meta */}
      <section className="border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="motion-meta-pill flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2">
              <User className="w-4 h-4" />
              Elitesecom Team
            </span>
            <span className="motion-meta-pill flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2">
              <Calendar className="w-4 h-4" />
              {entry.date}
            </span>
            {/* <span className="motion-meta-pill flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2">
              <Clock className="w-4 h-4" />
              {entry.readTime}
            </span> */}
            {/* <button
              onClick={shareArticle}
              className="motion-meta-pill ml-auto hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm transition-all hover:border-gold hover:text-gold-700 sm:flex"
            >
              <Share2 className="h-4 w-4" />
              Share
            </button> */}
          </div>
        </div>
      </section>
      {/* Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
            {/* TOC Sidebar — self-start required so sticky works inside CSS grid */}
            <aside className="hidden lg:block self-start w-[280px] sticky top-[85px]">
              <div className="sticky top-24 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm max-h-[calc(100vh-7rem)] overflow-y-auto">
                <h3 className="font-bold  mb-4">Table of Contents</h3>

                <nav className="space-y-2">
                  {text.toc.map((item: string, idx: number) => (
                    <button
                      key={item}
                      onClick={() => handleTocClick(item, idx)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 block truncate ${
                        activeSection === item
                          ? "bg-gold text-white font-medium shadow-sm"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article>
              {/* Intro */}
              <div className="motion-intro-card mb-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50/80 to-gold/5 p-6 shadow-sm">
                <p className="text-lg font-medium leading-8 text-slate-600">
                  {entry.subtitle}
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-6">
                {text.sections.map((section: any, idx: number) => (
                  <section
                    key={idx}
                    id={`section-${idx}`}
                    data-title={section.title}
                    data-page-reveal
                    className="motion-article-section group scroll-mt-28 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl sm:p-7"
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className="motion-number h-9 w-9 rounded-full bg-gold text-white flex items-center justify-center font-bold text-lg shadow-[0_8px_24px_rgba(245,184,0,0.28)]">
                        {idx + 1}
                      </div>

                      <h2 className="text-[22px] font-extrabold tracking-normal  sm:text-[24px]">
                        {section.title}
                      </h2>
                    </div>

                    <div
                      className="
                      text-[16px] font-normal leading-8 text-slate-600

    [&>p]:mb-4

    [&>ul]:mb-7
    [&>ul]:pl-6

    [&>li]:mb-3

    [&>h4]:text-[17px]
    [&>h4]:font-bold
    [&>h4]:mt-5
    [&>h4]:mb-2
    [&>h4]:
  "
                      dangerouslySetInnerHTML={{ __html: section.text }}
                    />
                  </section>
                ))}
              </div>

              {/* Pro Tip */}
              {text.proTip && (
                <div
                  data-page-reveal
                  className="motion-tip-card mt-12 rounded-3xl border border-yellow-200 bg-gradient-to-r from-yellow-50 via-white to-orange-50 p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="w-6 h-6 text-yellow-600" />

                    <h3 className="font-bold text-xl ">Pro Tip</h3>
                  </div>

                  <p className="text-slate-700 leading-8 text-lg">
                    {text.proTip}
                  </p>
                </div>
              )}

              {/* Feature Image */}
              <div
                data-page-reveal
                className="motion-media-frame my-12 overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/10"
              >
                <img
                  src={image}
                  alt={entry.title}
                  className="w-full h-[420px] object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>

              {/* Key Takeaways */}
              {text.takeaways?.length > 0 && (
                <div
                  data-page-reveal
                  className="motion-takeaway-card rounded-3xl p-7 border border-slate-100 shadow-sm"
                >
                  <h3 className="font-bold  mb-3">Key Takeaways</h3>
                  <ul className="space-y-2">
                    {text.takeaways.map((item: string, idx: number) => (
                      <li
                        key={item}
                        className="motion-list-item flex items-start gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-slate-600 text-sm shadow-sm"
                        style={{ transitionDelay: `${idx * 45}ms` }}
                      >
                        <CheckCircle
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>
      {/* Related */}
      {relatedPosts?.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl  mb-8">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <article
                  key={post.slug}
                  onClick={() => goToBlog(post.slug)}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={
                        post.image ||
                        catImages[post.category] ||
                        "/blog-hero-new.jpg"
                      }
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* <div className="p-4">
                    <h4 className="font-semibold  group-hover:text-gold-600 transition-colors line-clamp-2 text-sm">
                      {post.title}
                    </h4>
                    <span className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div> */}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="motion-cta-card relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 lg:p-14">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/20 blur-3xl motion-float-soft" />
            <div className="absolute -bottom-20 left-10 h-44 w-44 rounded-full bg-lavender/20 blur-3xl motion-float-soft" />
            <div className="relative">
              <h2 className="font-heading font-bold text-3xl text-white mb-4">
                Ready to Simplify Your Operations?
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Manage orders, inventory, warehouses, and returns from one
                platform.
              </p>
              <button
                onClick={() => onNavigate?.("contact")}
                className="motion-button inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold  font-semibold hover:shadow-[0_8px_30px_rgba(245,158,11,0.3)] transition-all hover:-translate-y-0.5"
              >
                Book Demo <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
