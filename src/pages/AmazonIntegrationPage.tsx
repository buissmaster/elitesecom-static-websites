import { useEffect, useState } from "react";
import {
  ArrowRight,
  ShoppingCart,
  RefreshCw,
  ListOrdered,
  FileText,
  RotateCcw,
  Calculator,
  ShieldCheck,
  CheckCircle,
  KeyRound,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AmazonIntegrationPageProps {
  onNavigate?: (page: string) => void;
}

const integrationFeatures = [
  {
    icon: ShoppingCart,
    title: "Amazon Order Sync",
    description:
      "Orders placed on your Amazon seller account are imported into the Elitesecom dashboard through the Amazon Selling Partner API (SP-API). Order status, items, quantities, and fulfillment details stay synchronized so your team can process Amazon orders alongside every other channel in one place.",
    points: [
      "Automatic order import via SP-API",
      "Unified order queue across all channels",
      "Order status and tracking updates",
    ],
  },
  {
    icon: RefreshCw,
    title: "Inventory Sync to Amazon",
    description:
      "Stock levels and price updates are pushed from Elitesecom to your Amazon listings using SP-API feed and listing operations, so marketplace availability reflects your actual warehouse stock.",
    points: [
      "Inventory quantity updates pushed to Amazon",
      "Price updates across marketplace listings",
      "Reduced overselling from stale stock counts",
    ],
  },
  {
    icon: ListOrdered,
    title: "Listing Management & SKU Mapping",
    description:
      "Create and maintain Amazon listings from Elitesecom. Map marketplace SKUs and ASINs to your internal product catalog so orders, inventory, and returns resolve to the correct item records.",
    points: [
      "SKU-to-ASIN and product catalog mapping",
      "Listing attribute creation and updates",
      "Consistent product data across channels",
    ],
  },
  {
    icon: FileText,
    title: "Shipping Labels & Invoice Generation",
    description:
      "Generate shipping labels and GST-compliant invoices for Amazon orders directly from the order workflow. To produce accurate labels and invoices, Elitesecom processes buyer name and shipping address information received through SP-API — strictly for order fulfillment, shipping, and customer-service purposes, and never for advertising or resale.",
    points: [
      "Shipping label generation for Amazon orders",
      "Tax invoice generation for shipments",
      "Buyer address data used only for fulfillment",
    ],
  },
  {
    icon: RotateCcw,
    title: "Returns Processing",
    description:
      "Amazon return and refund events are synchronized into Elitesecom so returned inventory can be received, inspected, and restocked, and refund amounts can be tracked against the original orders.",
    points: [
      "Return order tracking and restocking",
      "Refund status visibility",
      "Return reconciliation with inventory",
    ],
  },
  {
    icon: Calculator,
    title: "Settlement & Payment Reconciliation",
    description:
      "Amazon settlement reports are imported and reconciled against your orders so you can match marketplace payouts to order-level revenue, fees, and refunds — and flag discrepancies for review.",
    points: [
      "Settlement report import and matching",
      "Order-level fee and payout reconciliation",
      "Financial discrepancy reporting",
    ],
  },
];

export function AmazonIntegrationPage({
  onNavigate,
}: AmazonIntegrationPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-700 text-sm font-medium mb-6">
              <KeyRound className="w-4 h-4" />
              Amazon Selling Partner API Integration
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Elitesecom for{" "}
              <span className="text-gold-500">Amazon Sellers</span>
            </h1>
            <p className="text-lg text-slate-600">
              Connect your Amazon seller account to Elitesecom through the
              Amazon Selling Partner API (SP-API). Manage Amazon orders,
              inventory, listings, shipping, returns, and settlement
              reconciliation alongside your other sales channels from one
              dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* How Authorization Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              How the Integration Works
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Connecting your Amazon account is seller-initiated and can be
              revoked at any time from Seller Central.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Authorize in Seller Central",
                description:
                  "You start authorization from your Amazon Seller Central account and approve the specific data permissions Elitesecom requests through Amazon's OAuth 2.0 consent flow.",
              },
              {
                step: "2",
                title: "Data Syncs to Your Dashboard",
                description:
                  "Within the permissions you approved, Elitesecom syncs orders, inventory, listings, returns, and settlement reports from SP-API into your workspace.",
              },
              {
                step: "3",
                title: "Manage & Reconcile",
                description:
                  "Process orders, generate shipping labels and invoices, update listings and stock, handle returns, and reconcile settlements — then revoke access at any time from Seller Central.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 text-gold-700 font-bold flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              What You Can Do with the Amazon Integration
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Each capability below uses only the SP-API permissions required
              for that function.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-500 flex flex-col ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Permissions We Request */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              SP-API Permissions We Request
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Each permission (role) requested during authorization maps to a
              specific Elitesecom feature. No permission is used outside its
              stated purpose.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full border-collapse text-left text-sm bg-white">
              <thead>
                <tr>
                  <th className="border-b border-slate-200 bg-slate-50 p-4 font-semibold text-slate-800">
                    SP-API Role
                  </th>
                  <th className="border-b border-slate-200 bg-slate-50 p-4 font-semibold text-slate-800">
                    Feature It Powers
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {[
                  ["Product Listing", "Listing creation & SKU mapping"],
                  ["Pricing", "Price updates to Amazon listings"],
                  [
                    "Inventory and Order Tracking",
                    "Order sync & stock visibility",
                  ],
                  [
                    "Direct-to-Consumer Shipping (Restricted)",
                    "Shipping label generation — buyer name/address used for fulfillment only",
                  ],
                  [
                    "Tax Invoicing (Restricted)",
                    "GST-compliant invoice generation",
                  ],
                  [
                    "Finance and Accounting",
                    "Settlement & payment reconciliation",
                  ],
                  [
                    "Selling Partner Insights",
                    "Seller account & order insights",
                  ],
                ].map(([role, feature]) => (
                  <tr key={role} className="hover:bg-slate-50">
                    <td className="border-b border-slate-100 p-4 font-medium text-slate-800">
                      {role}
                    </td>
                    <td className="border-b border-slate-100 p-4">{feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            Restricted roles are requested only because the corresponding
            features require them. Buyer personal information received under
            restricted roles is used solely for order fulfillment, shipping, and
            invoicing as described on this page.
          </p>
        </div>
      </section>

      {/* Data Handling Summary */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-gold/20 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-gold-600" />
                <h2 className="font-heading font-bold text-2xl sm:text-3xl">
                  How Amazon Data Is Handled
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-600">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Amazon data is accessed only with your explicit
                      authorization through the SP-API OAuth 2.0 flow, and only
                      within the scope you approve.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Buyer personal information (such as name and shipping
                      address) is used solely for order fulfillment, shipping
                      label and invoice generation, and order-related customer
                      support.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Amazon data is encrypted in transit and at rest, and is
                      never sold, rented, or used for advertising.
                    </span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Access within Elitesecom follows role-based,
                      least-privilege controls with audit logging.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>
                      You can revoke the integration at any time from Amazon
                      Seller Central, and request deletion of retained data via{" "}
                      <a
                        href="mailto:dpo@elitesecom.ai"
                        className="text-gold-600 underline hover:text-gold-700"
                      >
                        dpo@elitesecom.ai
                      </a>
                      .
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Read more on our{" "}
                      <button
                        type="button"
                        onClick={() => handleNavigate("amazon-sp-api-security")}
                        className="text-gold-600 underline hover:text-gold-700"
                      >
                        Amazon SP-API Security
                      </button>{" "}
                      page and{" "}
                      <button
                        type="button"
                        onClick={() => handleNavigate("privacy")}
                        className="text-gold-600 underline hover:text-gold-700"
                      >
                        Privacy Policy
                      </button>
                      .
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-5">
            Connect Your Amazon Account
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            See how Elitesecom manages Amazon orders, inventory, shipping, and
            reconciliation alongside your other channels.
          </p>
          <button
            onClick={() => handleNavigate("demo")}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold font-semibold hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
          >
            Request a Demo
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-8 text-xs text-slate-400 max-w-2xl mx-auto">
            Amazon, Amazon Seller Central, and Amazon Selling Partner API are
            trademarks of Amazon.com, Inc. or its affiliates. Elitesecom is an
            independent software application and is not affiliated with,
            endorsed, or sponsored by Amazon.
          </p>
        </div>
      </section>
    </div>
  );
}
