/**
 * Blog Slug Utility
 * Generates SEO-friendly URL slugs from blog titles.
 */

export function generateSlug(
  title: string,
  existingSlugs: string[] = [],
): string {
  let slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  let finalSlug = slug;
  let counter = 2;
  while (existingSlugs.includes(finalSlug)) {
    finalSlug = `${slug}-${counter}`;
    counter++;
  }
  return finalSlug;
}

/* ── All 68 blog articles with their slugs ── */
export interface BlogEntry {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

const _allSlugs: string[] = [];
function makeSlug(title: string): string {
  const slug = generateSlug(title, _allSlugs);
  _allSlugs.push(slug);
  return slug;
}

export const allBlogEntries: BlogEntry[] = [
  {
    id: "hp1",
    slug: makeSlug("Solution for Growing Businesses"),
    title:
      "How to Manage Amazon, Flipkart, Meesho & Shopify Orders from One Dashboard",
    subtitle:
      "How to Manage Amazon, Flipkart, Meesho & Shopify Orders from One Dashboard",
    category: "Solution for Growing Businesses",
    readTime: "8 min",
    date: "June 17, 2026",
    image: "/blog main.png",
  },
  // Seller Problems (8)
  {
    id: "sp1",
    slug: makeSlug("why-sellers-lose-orders-during-sale-events"),
    title: "Why Sellers Lose Orders During Sale Events",
    subtitle:
      "Understand the operational gaps that cause lost orders during peak sale periods and how to prevent them.",
    category: "Seller Problems",
    readTime: "6 min",
    date: "May 18, 2026",
    image: "/seller problem blog/Seller problem 1.jpeg",
  },
  {
    id: "sp2",
    slug: makeSlug(
      "how-to-handle-1000-orders-per-day-without-hiring-more-staff",
    ),
    title: "How to Handle 1000+ Orders Per Day Without Hiring More Staff",
    subtitle:
      "Scale your order processing capacity through automation and smart workflows instead of adding headcount.",
    category: "Seller Problems",
    readTime: "8 min",
    date: "May 16, 2026",
    image: "/seller problem blog/Seller problem 2.jpeg",
  },
  {
    id: "sp3",
    slug: makeSlug("common-reasons-for-order-delays-and-how-to-fix-them"),
    title: "Common Reasons for Order Delays and How to Fix Them",
    subtitle:
      "Identify the root causes of shipping delays and implement fixes that keep your customers happy.",
    category: "Seller Problems",
    readTime: "5 min",
    date: "May 14, 2026",
    image: "/seller problem blog/Seller problem 3.jpeg",
  },
  {
    id: "sp4",
    slug: makeSlug("why-your-inventory-never-matches-marketplace-stock"),
    title: "Why Your Inventory Never Matches Marketplace Stock",
    subtitle:
      "Solve inventory synchronization issues that lead to stock mismatches across sales channels.",
    category: "Seller Problems",
    readTime: "7 min",
    date: "May 12, 2026",
    image: "/seller problem blog/Seller problem 4.jpeg",
  },
  {
    id: "sp5",
    slug: makeSlug("the-hidden-cost-of-manual-order-processing"),
    title: "The Hidden Cost of Manual Order Processing",
    subtitle:
      "Calculate the true cost of manual workflows and discover how automation pays for itself.",
    category: "Seller Problems",
    readTime: "6 min",
    date: "May 10, 2026",
    image: "/seller problem blog/Seller problem 5.png",
  },
  {
    id: "sp6",
    slug: makeSlug("how-to-reduce-order-errors-by-90"),
    title: "How to Reduce Order Errors by 90%",
    subtitle:
      "Implement systematic checks and automated validation to dramatically reduce fulfillment mistakes.",
    category: "Seller Problems",
    readTime: "5 min",
    date: "May 8, 2026",
    image: "/seller problem blog/Seller problem 6.png",
  },
  {
    id: "sp7",
    slug: makeSlug("why-growing-sellers-struggle-with-operations"),
    title: "Why Growing Sellers Struggle With Operations",
    subtitle:
      "Learn why operational complexity increases with growth and how to stay ahead of the curve.",
    category: "Seller Problems",
    readTime: "7 min",
    date: "May 6, 2026",
    image: "/seller problem blog/Seller problem 7.png",
  },
  {
    id: "sp8",
    slug: makeSlug("operational-bottlenecks-that-kill-ecommerce-growth"),
    title: "Operational Bottlenecks That Kill eCommerce Growth",
    subtitle:
      "Identify and eliminate the operational bottlenecks preventing your business from scaling.",
    category: "Seller Problems",
    readTime: "6 min",
    date: "May 4, 2026",
    image: "/seller problem blog/Seller problem 8.png",
  },

  // Marketplaces (8)
  {
    id: "mp1",
    slug: makeSlug("amazon-inventory-management-guide-for-sellers"),
    title: "Amazon Inventory Management Guide for Sellers",
    subtitle:
      "Master Amazon inventory management with proven strategies for Buy Box eligibility and stock optimization.",
    category: "Marketplaces",
    readTime: "7 min",
    date: "May 17, 2026",
    image: "/Marketplace blog/Marketplaces 1.png",
  },
  {
    id: "mp2",
    slug: makeSlug("flipkart-order-management-best-practices"),
    title: "Flipkart Order Management Best Practices",
    subtitle:
      "Optimize your Flipkart operations with these seller-tested order management techniques.",
    category: "Marketplaces",
    readTime: "6 min",
    date: "May 15, 2026",
    image: "/Marketplace blog/Marketplaces 2.png",
  },
  {
    id: "mp3",
    slug: makeSlug("meesho-seller-operations-guide"),
    title: "Meesho Seller Operations Guide",
    subtitle:
      "Everything you need to know about managing your Meesho seller account efficiently.",
    category: "Marketplaces",
    readTime: "5 min",
    date: "May 13, 2026",
    image: "/Marketplace blog/Marketplaces 3.png",
  },
  {
    id: "mp4",
    slug: makeSlug("how-to-manage-multiple-marketplaces-from-one-dashboard"),
    title: "How to Manage Multiple Marketplaces from One Dashboard",
    subtitle:
      "Consolidate your marketplace operations into a single unified management platform.",
    category: "Marketplaces",
    readTime: "8 min",
    date: "May 11, 2026",
    image: "/Marketplace blog/Marketplaces 4.png",
  },
  {
    id: "mp5",
    slug: makeSlug("marketplace-inventory-sync-explained"),
    title: "Marketplace Inventory Sync Explained",
    subtitle:
      "How real-time inventory synchronization works across Amazon, Flipkart, and other marketplaces.",
    category: "Marketplaces",
    readTime: "6 min",
    date: "May 9, 2026",
    image: "/Marketplace blog/Marketplaces 5.png",
  },
  {
    id: "mp6",
    slug: makeSlug("common-marketplace-selling-mistakes"),
    title: "Common Marketplace Selling Mistakes",
    subtitle:
      "Avoid these costly mistakes that new marketplace sellers make and learn how to fix them.",
    category: "Marketplaces",
    readTime: "5 min",
    date: "May 7, 2026",
    image: "/Marketplace blog/Marketplaces 6.png",
  },
  {
    id: "mp7",
    slug: makeSlug("how-top-marketplace-sellers-automate-operations"),
    title: "How Top Marketplace Sellers Automate Operations",
    subtitle:
      "Discover the automation strategies used by top marketplace sellers to handle high volumes.",
    category: "Marketplaces",
    readTime: "7 min",
    date: "May 5, 2026",
    image: "/Marketplace blog/Marketplaces 7.png",
  },
  {
    id: "mp8",
    slug: makeSlug("multi-marketplace-selling-challenges-and-solutions"),
    title: "Multi-Marketplace Selling Challenges and Solutions",
    subtitle:
      "Navigate the complexities of selling on multiple platforms with practical solutions.",
    category: "Marketplaces",
    readTime: "6 min",
    date: "May 3, 2026",
    image: "/Marketplace blog/Marketplaces 8.png",
  },

  // Shopify & D2C (8)
  {
    id: "sd1",
    slug: makeSlug("shopify-inventory-management-explained"),
    title: "Shopify Inventory Management Explained",
    subtitle:
      "A complete guide to managing inventory effectively on your Shopify store.",
    category: "Shopify & D2C",
    readTime: "6 min",
    date: "May 16, 2026",
    image: "/Shopify & D2C blog/Shopify & D2C 1.png",
  },
  {
    id: "sd2",
    slug: makeSlug("how-d2c-brands-scale-operations-efficiently"),
    title: "How D2C Brands Scale Operations Efficiently",
    subtitle:
      "Strategies for direct-to-consumer brands to scale without operational chaos.",
    category: "Shopify & D2C",
    readTime: "7 min",
    date: "May 14, 2026",
    image: "/Shopify & D2C blog/Shopify & D2C 2.png",
  },
  {
    id: "sd3",
    slug: makeSlug("oms-for-shopify-stores-benefits-and-features"),
    title: "OMS for Shopify Stores: Benefits and Features",
    subtitle:
      "Why every growing Shopify store needs a dedicated Order Management System.",
    category: "Shopify & D2C",
    readTime: "5 min",
    date: "May 12, 2026",
    image: "/Shopify & D2C blog/Shopify & D2C 3.png",
  },
  {
    id: "sd4",
    slug: makeSlug("website-vs-marketplace-orders-managing-both-efficiently"),
    title: "Website vs Marketplace Orders: Managing Both Efficiently",
    subtitle:
      "Balance your direct website sales with marketplace orders using unified workflows.",
    category: "Shopify & D2C",
    readTime: "6 min",
    date: "May 10, 2026",
    image: "/Shopify & D2C blog/Shopify & D2C 4.png",
  },
  {
    id: "sd5",
    slug: makeSlug("d2c-operations-management-guide"),
    title: "D2C Operations Management Guide",
    subtitle:
      "Build operational excellence into your direct-to-consumer brand from day one.",
    category: "Shopify & D2C",
    readTime: "8 min",
    date: "May 8, 2026",
    image: "/Shopify & D2C blog/Shopify & D2C 5.png",
  },
  {
    id: "sd6",
    slug: makeSlug("omnichannel-selling-vs-multichannel-selling"),
    title: "Omnichannel Selling vs Multichannel Selling",
    subtitle:
      "Understand the key differences and choose the right strategy for your brand.",
    category: "Shopify & D2C",
    readTime: "5 min",
    date: "May 6, 2026",
    image: "/Shopify & D2C blog/Shopify & D2C 6.jpeg",
  },
  {
    id: "sd7",
    slug: makeSlug("how-fast-growing-d2c-brands-automate-fulfillment"),
    title: "How Fast-Growing D2C Brands Automate Fulfillment",
    subtitle:
      "Learn how successful D2C brands automate their fulfillment operations at scale.",
    category: "Shopify & D2C",
    readTime: "7 min",
    date: "May 4, 2026",
    image: "/Shopify & D2C blog/Shopify & D2C 7.jpeg",
  },
  {
    id: "sd8",
    slug: makeSlug("common-d2c-scaling-challenges"),
    title: "Common D2C Scaling Challenges",
    subtitle:
      "Navigate the operational challenges that come with rapid D2C brand growth.",
    category: "Shopify & D2C",
    readTime: "6 min",
    date: "May 2, 2026",
    image: "/Shopify & D2C blog/Shopify & D2C 8.jpeg",
  },

  // Warehouse (8)
  {
    id: "wh1",
    slug: makeSlug("what-is-warehouse-management"),
    title: "What Is Warehouse Management?",
    subtitle:
      "A comprehensive introduction to warehouse management for ecommerce businesses.",
    category: "Warehouse",
    readTime: "5 min",
    date: "May 15, 2026",
    image: "/Warehouse blog/Warehouse 1.png",
  },
  {
    id: "wh2",
    slug: makeSlug("oms-vs-wms-key-differences"),
    title: "OMS vs WMS: Key Differences",
    subtitle:
      "Understand how Order Management and Warehouse Management systems complement each other.",
    category: "Warehouse",
    readTime: "7 min",
    date: "May 13, 2026",
    image: "/Warehouse blog/Warehouse 2.png",
  },
  {
    id: "wh3",
    slug: makeSlug("how-warehouse-automation-improves-accuracy"),
    title: "How Warehouse Automation Improves Accuracy",
    subtitle:
      "Explore automation technologies that reduce errors and increase warehouse efficiency.",
    category: "Warehouse",
    readTime: "6 min",
    date: "May 11, 2026",
    image: "/Warehouse blog/Warehouse 3.png",
  },
  {
    id: "wh4",
    slug: makeSlug("order-fulfillment-workflow-explained"),
    title: "Order Fulfillment Workflow Explained",
    subtitle:
      "Step-by-step guide through the complete order fulfillment process.",
    category: "Warehouse",
    readTime: "5 min",
    date: "May 9, 2026",
    image: "/Warehouse blog/Warehouse 4.jpeg",
  },
  {
    id: "wh5",
    slug: makeSlug("pick-pack-ship-process-guide"),
    title: "Pick, Pack & Ship Process Guide",
    subtitle:
      "Master the three core warehouse operations that power every ecommerce delivery.",
    category: "Warehouse",
    readTime: "6 min",
    date: "May 7, 2026",
    image: "/Warehouse blog/Warehouse 5.png",
  },
  {
    id: "wh6",
    slug: makeSlug("warehouse-kpis-every-seller-should-track"),
    title: "Warehouse KPIs Every Seller Should Track",
    subtitle:
      "The essential metrics that reveal your warehouse performance and efficiency.",
    category: "Warehouse",
    readTime: "7 min",
    date: "May 5, 2026",
    image: "/Warehouse blog/Warehouse 6.png",
  },
  {
    id: "wh7",
    slug: makeSlug("fulfillment-challenges-in-ecommerce"),
    title: "Fulfillment Challenges in eCommerce",
    subtitle:
      "Common fulfillment obstacles and proven strategies to overcome them.",
    category: "Warehouse",
    readTime: "5 min",
    date: "May 3, 2026",
    image: "/Warehouse blog/Warehouse 7.jpeg",
  },
  {
    id: "wh8",
    slug: makeSlug("smart-warehouse-management-strategies"),
    title: "Smart Warehouse Management Strategies",
    subtitle:
      "Implement smart strategies that transform your warehouse into a competitive advantage.",
    category: "Warehouse",
    readTime: "6 min",
    date: "May 1, 2026",
    image: "/Warehouse blog/Warehouse 8.png",
  },

  // Inventory (8)
  {
    id: "inv1",
    slug: makeSlug("inventory-turnover-ratio-explained"),
    title: "Inventory Turnover Ratio Explained",
    subtitle:
      "Learn how to calculate and optimize your inventory turnover for better cash flow.",
    category: "Inventory",
    readTime: "5 min",
    date: "May 14, 2026",
    image: "/Inventory blog/Inventory 1.png",
  },
  {
    id: "inv2",
    slug: makeSlug("safety-stock-what-it-is-and-why-it-matters"),
    title: "Safety Stock: What It Is and Why It Matters",
    subtitle:
      "Master the concept of safety stock and protect your business against demand uncertainty.",
    category: "Inventory",
    readTime: "6 min",
    date: "May 12, 2026",
    image: "/Inventory blog/Inventory 2.jpeg",
  },
  {
    id: "inv3",
    slug: makeSlug("abc-inventory-analysis-guide"),
    title: "ABC Inventory Analysis Guide",
    subtitle:
      "Classify your inventory using the ABC method to focus efforts where they matter most.",
    category: "Inventory",
    readTime: "5 min",
    date: "May 10, 2026",
    image: "/Inventory blog/Inventory 3.png",
  },
  {
    id: "inv4",
    slug: makeSlug("inventory-forecasting-for-ecommerce"),
    title: "Inventory Forecasting for eCommerce",
    subtitle:
      "Use data-driven forecasting to maintain optimal stock levels across all channels.",
    category: "Inventory",
    readTime: "7 min",
    date: "May 8, 2026",
    image: "/Inventory blog/Inventory 4.png",
  },
  {
    id: "inv5",
    slug: makeSlug("inventory-planning-during-sale-seasons"),
    title: "Inventory Planning During Sale Seasons",
    subtitle:
      "Strategies for preparing your inventory before major sale events and festive seasons.",
    category: "Inventory",
    readTime: "6 min",
    date: "May 6, 2026",
    image: "/Inventory blog/Inventory 5.jpeg",
  },
  {
    id: "inv6",
    slug: makeSlug("overstocking-vs-understocking"),
    title: "Overstocking vs Understocking",
    subtitle:
      "Find the sweet spot between too much and too little inventory for your business.",
    category: "Inventory",
    readTime: "5 min",
    date: "May 4, 2026",
    image: "/Inventory blog/Inventory 6.jpeg",
  },
  {
    id: "inv7",
    slug: makeSlug("inventory-audit-best-practices"),
    title: "Inventory Audit Best Practices",
    subtitle:
      "Implement systematic inventory audits that keep your stock records accurate.",
    category: "Inventory",
    readTime: "6 min",
    date: "May 2, 2026",
    image: "/Inventory blog/Inventory 7.jpeg",
  },
  {
    id: "inv8",
    slug: makeSlug("real-time-inventory-tracking-benefits"),
    title: "Real-Time Inventory Tracking Benefits",
    subtitle:
      "Discover how real-time inventory visibility transforms your operational efficiency.",
    category: "Inventory",
    readTime: "5 min",
    date: "Apr 30, 2026",
    image: "/Inventory blog/Inventory 8.jpeg",
  },

  // OMS (8)
  {
    id: "oms1",
    slug: makeSlug("advanced-oms-features-every-growing-business-needs"),
    title: "Advanced OMS Features Every Growing Business Needs",
    subtitle:
      "The essential OMS features that power scalable ecommerce operations.",
    category: "OMS",
    readTime: "7 min",
    date: "May 13, 2026",
    image: "/OMS blog/OMS 1.jpeg",
  },
  {
    id: "oms2",
    slug: makeSlug("ai-in-order-management-systems"),
    title: "AI in Order Management Systems",
    subtitle:
      "How artificial intelligence is revolutionizing order management and fulfillment.",
    category: "OMS",
    readTime: "6 min",
    date: "May 11, 2026",
    image: "/OMS blog/OMS 2.jpeg",
  },
  {
    id: "oms3",
    slug: makeSlug("how-oms-improves-customer-experience"),
    title: "How OMS Improves Customer Experience",
    subtitle:
      "The direct connection between order management excellence and customer satisfaction.",
    category: "OMS",
    readTime: "5 min",
    date: "May 9, 2026",
    image: "/OMS blog/OMS 3.jpeg",
  },
  {
    id: "oms4",
    slug: makeSlug("oms-integration-with-erp-systems"),
    title: "OMS Integration with ERP Systems",
    subtitle:
      "Best practices for connecting your OMS with enterprise resource planning systems.",
    category: "OMS",
    readTime: "7 min",
    date: "May 7, 2026",
    image: "/OMS blog/OMS 4.png",
  },
  {
    id: "oms5",
    slug: makeSlug("oms-integration-with-shipping-aggregators"),
    title: "OMS Integration with Shipping Aggregators",
    subtitle:
      "Streamline your shipping workflow by connecting OMS with shipping platforms.",
    category: "OMS",
    readTime: "6 min",
    date: "May 5, 2026",
    image: "/OMS blog/OMS 5.png",
  },
  {
    id: "oms6",
    slug: makeSlug("oms-analytics-and-reporting"),
    title: "OMS Analytics and Reporting",
    subtitle:
      "Leverage OMS data to make informed operational decisions and drive growth.",
    category: "OMS",
    readTime: "5 min",
    date: "May 3, 2026",
    image: "/OMS blog/OMS 6.jpeg",
  },
  {
    id: "oms7",
    slug: makeSlug("cloud-based-oms-vs-traditional-oms"),
    title: "Cloud-Based OMS vs Traditional OMS",
    subtitle:
      "Compare modern cloud solutions with legacy systems to make the right choice.",
    category: "OMS",
    readTime: "6 min",
    date: "May 1, 2026",
    image: "/OMS blog/OMS 7.jpeg",
  },
  {
    id: "oms8",
    slug: makeSlug("choosing-the-right-oms-for-your-business"),
    title: "Choosing the Right OMS for Your Business",
    subtitle:
      "A practical framework for evaluating and selecting the best OMS for your needs.",
    category: "OMS",
    readTime: "7 min",
    date: "Apr 29, 2026",
    image: "/OMS blog/OMS 8.jpeg",
  },

  // Returns (8)
  {
    id: "ret1",
    slug: makeSlug("how-to-reduce-product-returns"),
    title: "How to Reduce Product Returns",
    subtitle:
      "Proven strategies to minimize return rates while maintaining customer satisfaction.",
    category: "Returns",
    readTime: "6 min",
    date: "May 12, 2026",
    image: "/Returns blog/Returns 1.jpeg",
  },
  {
    id: "ret2",
    slug: makeSlug("reverse-logistics-explained"),
    title: "Reverse Logistics Explained",
    subtitle:
      "Understanding the complete reverse logistics process for ecommerce businesses.",
    category: "Returns",
    readTime: "5 min",
    date: "May 10, 2026",
    image: "/Returns blog/Returns 2.jpeg",
  },
  {
    id: "ret3",
    slug: makeSlug("why-return-management-matters"),
    title: "Why Return Management Matters",
    subtitle:
      "The business impact of effective return management on profitability and loyalty.",
    category: "Returns",
    readTime: "6 min",
    date: "May 8, 2026",
    image: "/Returns blog/Returns 3.jpeg",
  },
  {
    id: "ret4",
    slug: makeSlug("managing-refunds-efficiently"),
    title: "Managing Refunds Efficiently",
    subtitle:
      "Streamline your refund process to improve cash flow and customer experience.",
    category: "Returns",
    readTime: "5 min",
    date: "May 6, 2026",
    image: "/Returns blog/Returns 4.jpeg",
  },
  {
    id: "ret5",
    slug: makeSlug("common-return-fraud-scenarios"),
    title: "Common Return Fraud Scenarios",
    subtitle:
      "Identify and prevent return fraud patterns that eat into your profit margins.",
    category: "Returns",
    readTime: "6 min",
    date: "May 4, 2026",
    image: "/Returns blog/Returns 5.jpeg",
  },
  {
    id: "ret6",
    slug: makeSlug("return-analytics-for-ecommerce-businesses"),
    title: "Return Analytics for eCommerce Businesses",
    subtitle:
      "Use return data analytics to uncover insights and drive operational improvements.",
    category: "Returns",
    readTime: "5 min",
    date: "May 2, 2026",
    image: "/Returns blog/Returns 6.jpeg",
  },
  {
    id: "ret7",
    slug: makeSlug("how-oms-simplifies-return-management"),
    title: "How OMS Simplifies Return Management",
    subtitle:
      "Modern OMS features that automate and streamline the entire returns process.",
    category: "Returns",
    readTime: "6 min",
    date: "Apr 30, 2026",
    image: "/Returns blog/Returns 7.png",
  },
  {
    id: "ret8",
    slug: makeSlug("return-rate-reduction-strategies"),
    title: "Return Rate Reduction Strategies",
    subtitle:
      "A comprehensive toolkit of strategies to systematically reduce your return rates.",
    category: "Returns",
    readTime: "7 min",
    date: "Apr 28, 2026",
    image: "/Returns blog/Returns 8.jpeg",
  },

  // Growth (8)
  {
    id: "gr1",
    slug: makeSlug("how-to-scale-from-100-orders-to-10000-orders-monthly"),
    title: "How to Scale From 100 Orders to 10,000 Orders Monthly",
    subtitle:
      "The operational roadmap for scaling order volume without losing control.",
    category: "Growth",
    readTime: "8 min",
    date: "May 11, 2026",
    image: "/Growth blog/Growth 1.jpeg",
  },
  {
    id: "gr2",
    slug: makeSlug("building-an-operations-team-for-ecommerce"),
    title: "Building an Operations Team for eCommerce",
    subtitle:
      "Structure and hire the right operations team as your ecommerce business grows.",
    category: "Growth",
    readTime: "7 min",
    date: "May 9, 2026",
    image: "/Growth blog/Growth 2.png",
  },
  {
    id: "gr3",
    slug: makeSlug("key-metrics-every-ecommerce-business-should-monitor"),
    title: "Key Metrics Every eCommerce Business Should Monitor",
    subtitle:
      "The essential KPIs that tell you if your operations are healthy and scalable.",
    category: "Growth",
    readTime: "6 min",
    date: "May 7, 2026",
    image: "/Growth blog/Growth 3.jpeg",
  },
  {
    id: "gr4",
    slug: makeSlug("how-automation-increases-profit-margins"),
    title: "How Automation Increases Profit Margins",
    subtitle:
      "Quantify the financial impact of operational automation on your bottom line.",
    category: "Growth",
    readTime: "5 min",
    date: "May 5, 2026",
    image: "/Growth blog/Growth 4.png",
  },
  {
    id: "gr5",
    slug: makeSlug("ecommerce-growth-strategies-for-indian-sellers"),
    title: "eCommerce Growth Strategies for Indian Sellers",
    subtitle:
      "Tailored growth strategies for sellers operating in the Indian ecommerce market.",
    category: "Growth",
    readTime: "7 min",
    date: "May 3, 2026",
    image: "/Growth blog/Growth 5.png",
  },
  {
    id: "gr6",
    slug: makeSlug("scaling-without-operational-chaos"),
    title: "Scaling Without Operational Chaos",
    subtitle:
      "Grow your business while maintaining operational order and team sanity.",
    category: "Growth",
    readTime: "6 min",
    date: "May 1, 2026",
    image: "/Growth blog/Growth 6.jpeg",
  },
  {
    id: "gr7",
    slug: makeSlug("operational-efficiency-framework-for-sellers"),
    title: "Operational Efficiency Framework for Sellers",
    subtitle:
      "A systematic framework for measuring and improving operational efficiency.",
    category: "Growth",
    readTime: "7 min",
    date: "Apr 29, 2026",
    image: "/Growth blog/Growth 7.jpeg",
  },
  {
    id: "gr8",
    slug: makeSlug("how-successful-brands-manage-growth"),
    title: "How Successful Brands Manage Growth",
    subtitle:
      "Case study insights from brands that scaled successfully without breaking operations.",
    category: "Growth",
    readTime: "6 min",
    date: "Apr 27, 2026",
    image: "/Growth blog/Growth 8.jpeg",
  },

  // Comparisons (4)
  {
    id: "cmp1",
    slug: makeSlug("oms-vs-erp-complete-comparison-guide"),
    title: "OMS vs ERP: Complete Comparison Guide",
    subtitle:
      "An in-depth feature-by-feature comparison to help you choose the right system for your business operations.",
    category: "Comparisons",
    readTime: "10 min",
    date: "May 12, 2026",
    image: "/Comparisons blog/Comparisons 1.jpeg",
  },
  {
    id: "cmp2",
    slug: makeSlug("oms-vs-warehouse-management-system-wms"),
    title: "OMS vs Warehouse Management System (WMS)",
    subtitle:
      "Understand how OMS and WMS differ, complement each other, and work together in modern ecommerce.",
    category: "Comparisons",
    readTime: "9 min",
    date: "May 10, 2026",
    image: "/Comparisons blog/Comparisons 2.png",
  },
  {
    id: "cmp3",
    slug: makeSlug("oms-vs-inventory-management-software"),
    title: "OMS vs Inventory Management Software",
    subtitle:
      "Compare OMS capabilities with standalone inventory tools to make an informed technology decision.",
    category: "Comparisons",
    readTime: "8 min",
    date: "May 8, 2026",
    image: "/Comparisons blog/Comparisons 3.jpeg",
  },
  {
    id: "cmp4",
    slug: makeSlug("oms-vs-excel-based-operations-management"),
    title: "OMS vs Excel-Based Operations Management",
    subtitle:
      "Why growing businesses outgrow spreadsheets and when to make the switch to a proper OMS.",
    category: "Comparisons",
    readTime: "7 min",
    date: "May 6, 2026",
    image: "/Comparisons blog/Comparisons 4.jpeg",
  },
];

/* ── Lookup helpers ── */
const slugToEntry = new Map(allBlogEntries.map((e) => [e.slug, e]));
const idToEntry = new Map(allBlogEntries.map((e) => [e.id, e]));

export function findBlogBySlug(slug: string): BlogEntry | undefined {
  return slugToEntry.get(slug);
}

export function findBlogById(id: string): BlogEntry | undefined {
  return idToEntry.get(id);
}

export function getSlugById(id: string): string | undefined {
  return idToEntry.get(id)?.slug;
}

export function getCategoryArticles(category: string): BlogEntry[] {
  if (category === "All") return allBlogEntries;
  return allBlogEntries.filter((e) => e.category === category);
}
