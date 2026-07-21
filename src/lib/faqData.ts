import { PRICING_FAQ_ANSWER } from "./pricingData";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  category: string;
  questions: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    category: "Order Management System (OMS)",
    questions: [
      {
        q: "What is an Order Management System (OMS)?",
        a: "An Order Management System (OMS) is software that centralizes ecommerce order processing across sales channels. Elitesecom OMS lets you receive, route, fulfill, and track orders from Amazon, Flipkart, Shopify, Meesho, and other marketplaces from one dashboard.",
      },
      {
        q: "What is Elitesecom OMS?",
        a: "Elitesecom OMS is India's leading ecommerce order management system built for multichannel sellers. It combines order management, inventory sync, warehouse management (WMS), payment reconciliation, and return reconciliation in one platform.",
      },
      {
        q: "Who should use an order management system?",
        a: "Any ecommerce seller managing orders across multiple channels benefits from an OMS. Elitesecom is designed for startups, growing brands, and enterprises selling on marketplaces, D2C websites, and hybrid models.",
      },
      {
        q: "Is there a free trial for Elitesecom OMS?",
        a: "Yes, we offer a 14-day free trial of our order management system. No credit card is required to explore multichannel order management, reconciliation, and warehouse features.",
      },
    ],
  },
  {
    category: "Reconciliation",
    questions: [
      {
        q: "What is payment reconciliation in ecommerce?",
        a: "Payment reconciliation matches marketplace payouts, fees, and settlements against your orders. Elitesecom OMS automates payment reconciliation so you can identify discrepancies, track receivables, and keep financial records accurate.",
      },
      {
        q: "What is return reconciliation?",
        a: "Return reconciliation tracks returned orders, refund amounts, and inventory restocking across channels. Elitesecom OMS automates return reconciliation to reduce manual errors and improve refund accuracy.",
      },
      {
        q: "Does Elitesecom support accounting reconciliation?",
        a: "Yes. Elitesecom includes accounting and reconciliation features — auto-invoice generation, payment reconciliation, return reconciliation, and financial reporting — so your books stay aligned with marketplace transactions.",
      },
    ],
  },
  {
    category: "Features",
    questions: [
      {
        q: "What channels does Elitesecom OMS integrate with?",
        a: "Elitesecom order management system integrates with Amazon, Flipkart, Myntra, Shopify, Ajio, Meesho, Snapdeal, Nykaa, FirstCry, Paytm, and many more marketplaces for real-time order and inventory sync.",
      },
      {
        q: "Can I manage multiple warehouses with Elitesecom OMS?",
        a: "Yes. Elitesecom OMS includes warehouse management system (WMS) capabilities. Track inventory across locations, route orders to the nearest warehouse, and manage pick-pack-ship workflows.",
      },
      {
        q: "Does Elitesecom support inventory management?",
        a: "Yes. Elitesecom provides real-time inventory management with multichannel sync, low-stock alerts, demand forecasting, and inventory reconciliation to prevent overselling across marketplaces.",
      },
    ],
  },
  {
    category: "Pricing & Billing",
    questions: [
      {
        q: "How much does Elitesecom OMS cost?",
        a: PRICING_FAQ_ANSWER,
      },
      {
        q: "Can I change my OMS plan?",
        a: "Yes, you can upgrade or downgrade your order management system plan at any time. Changes apply from your next billing cycle.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept credit cards, debit cards, UPI, net banking, and bank transfers for Elitesecom OMS subscriptions.",
      },
    ],
  },
  {
    category: "Support",
    questions: [
      {
        q: "How do I get OMS support?",
        a: "Elitesecom offers 24/7 support via email, phone, and chat. Growth and Enterprise OMS plans include priority onboarding and reconciliation setup assistance.",
      },
      {
        q: "Is there OMS onboarding assistance?",
        a: "Yes. Every new customer receives free onboarding to configure order management workflows, marketplace integrations, and reconciliation settings.",
      },
      {
        q: "Do you offer OMS training?",
        a: "Yes. We provide video tutorials, documentation, and live training sessions covering order management, reconciliation, inventory, and warehouse operations.",
      },
    ],
  },
];

export const allFaqItems: FaqItem[] = faqCategories.flatMap(
  (category) => category.questions,
);
