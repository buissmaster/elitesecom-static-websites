import { getCategoryArticles } from "./blogSlugs";

/** Content clusters aligned with EliteOMS SEO & EEAT strategy */
export interface TopicCluster {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  blogCategory: string;
}

export const TOPIC_CLUSTERS: TopicCluster[] = [
  {
    id: "oms",
    title: "Order Management System (OMS)",
    description:
      "Guides on multichannel order management, OMS features, and scaling order operations.",
    keywords: [
      "OMS",
      "order management system",
      "multichannel order management",
    ],
    blogCategory: "OMS",
  },
  {
    id: "reconciliation",
    title: "Payment & Return Reconciliation",
    description:
      "Marketplace settlement matching, payment reconciliation, and return refund tracking.",
    keywords: [
      "payment reconciliation",
      "return reconciliation",
      "Amazon reconciliation",
      "Flipkart reconciliation",
    ],
    blogCategory: "Reconciliation",
  },
  {
    id: "marketplaces",
    title: "Marketplace Operations",
    description:
      "Amazon, Flipkart, Meesho, and multichannel selling best practices for Indian sellers.",
    keywords: [
      "Amazon order management",
      "Flipkart seller operations",
      "Meesho reconciliation",
      "marketplace inventory sync",
    ],
    blogCategory: "Marketplaces",
  },
  {
    id: "warehouse",
    title: "Warehouse Management (WMS)",
    description:
      "Pick-pack-ship workflows, warehouse KPIs, fulfillment automation, and WMS guides.",
    keywords: [
      "warehouse management system",
      "WMS",
      "pick list",
      "order fulfillment",
    ],
    blogCategory: "Warehouse",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description:
      "Multichannel inventory sync, safety stock, forecasting, and stock reconciliation.",
    keywords: [
      "inventory management software",
      "inventory sync",
      "stock management",
      "safety stock",
    ],
    blogCategory: "Inventory",
  },
  {
    id: "comparisons",
    title: "OMS vs ERP & WMS",
    description:
      "Compare Elitesecom OMS with Unicommerce, EasyEcom, Vinculum, Shiprocket, and other platforms.",
    keywords: ["OMS vs ERP", "OMS vs WMS", "order management software"],
    blogCategory: "Comparisons",
  },
];

export function getClusterArticleCount(category: string): number {
  return getCategoryArticles(category).length;
}

export function findClusterByCategory(category: string): TopicCluster | undefined {
  return TOPIC_CLUSTERS.find((cluster) => cluster.blogCategory === category);
}

export function findClusterById(id: string): TopicCluster | undefined {
  return TOPIC_CLUSTERS.find((cluster) => cluster.id === id);
}
