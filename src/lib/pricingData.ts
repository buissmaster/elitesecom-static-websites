/** Single source of truth for Elitesecom OMS pricing (GST inclusive). */
export const PRICING_PLANS = [
  {
    name: "Startup Plan",
    price: "₹17,700",
    priceSub: "18% GST included",
    orderLimit: "Up to 6,000 orders",
    perOrder: "₹2.95 / order",
  },
  {
    name: "Growth Plan",
    price: "₹1,00,300",
    priceSub: "18% GST included",
    orderLimit: "Up to 50,000 orders",
    perOrder: "₹2.00 / order",
  },
  {
    name: "Enterprise Plan",
    price: "₹3,30,400",
    priceSub: "18% GST included",
    orderLimit: "Unlimited orders",
    perOrder: "Custom pricing",
  },
] as const;

export const PRICING_FAQ_ANSWER =
  "Elitesecom OMS plans start at ₹17,700/month (Startup, up to 6,000 orders), ₹1,00,300/month (Growth, up to 50,000 orders), and ₹3,30,400/month (Enterprise, unlimited orders). All prices include 18% GST and core OMS features including payment and return reconciliation.";
