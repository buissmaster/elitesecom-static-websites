import { useEffect, useState } from "react";
import { ArrowRight, Check, Scale } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import {
  ALTERNATIVE_PAGE_REGISTRY,
  COMPARISON_CATEGORIES,
  getComparisonsGroupedByCategory,
} from "@/lib/alternativePages";
import { PRICING_PLANS } from "@/lib/pricingData";

interface ComparisonsHubPageProps {
  onNavigate: (page: string) => void;
}

export function ComparisonsHubPage({ onNavigate }: ComparisonsHubPageProps) {
  const [visible, setVisible] = useState(false);
  const grouped = getComparisonsGroupedByCategory();

  useEffect(() => {
    setVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gold/10 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-4xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gold/10 text-gold-800 text-sm font-semibold">
              OMS Comparisons · Elitesecom OMS
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[56px] leading-tight mb-6">
              Compare Elitesecom OMS vs{" "}
              <span className="text-gold-500">Leading Platforms</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
              Side-by-side comparisons with {ALTERNATIVE_PAGE_REGISTRY.length}{" "}
              OMS, ERP, and logistics platforms used by Indian marketplace
              sellers — pricing, reconciliation, WMS, and multichannel order
              management.
            </p>
            <div className="flex flex-wrap gap-4">
              <AppLink
                page="demo"
                onNavigate={onNavigate}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold font-semibold hover:shadow-lg transition-all"
              >
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </AppLink>
              <AppLink
                page="pricing"
                onNavigate={onNavigate}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-slate-200 font-semibold hover:border-gold transition-all"
              >
                View Pricing
              </AppLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Published INR pricing on every plan",
              "Payment & return reconciliation built in",
              "Multichannel OMS + WMS in one dashboard",
              "ISO 27001, 37001, 42001 certified",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 bg-slate-50/50"
              >
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {COMPARISON_CATEGORIES.map((category) => {
        const entries = grouped[category];
        if (entries.length === 0) return null;

        return (
          <section key={category} className="py-14 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-2">
                {category}
              </h2>
              <p className="text-slate-600 text-sm mb-8 max-w-2xl">
                {category === "Enterprise OMS" &&
                  "Compare Elitesecom OMS with enterprise-scale platforms used by high-volume brands."}
                {category === "SMB OMS" &&
                  "Alternatives for growing marketplace sellers moving beyond basic multichannel sync."}
                {category === "Logistics & Shipping" &&
                  "When shipping tools aren't enough — full OMS, inventory, and reconciliation."}
                {category === "ERP & Inventory" &&
                  "Focused marketplace OMS vs general ERP and inventory software."}
                {category === "Vertical Solutions" &&
                  "Category-specific platforms compared with Elitesecom's multichannel OMS."}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {entries.map(({ pageKey, config, teaser }) => (
                  <AppLink
                    key={pageKey}
                    page={pageKey}
                    onNavigate={onNavigate}
                    className="group text-left rounded-2xl border border-slate-200 p-6 bg-white hover:border-gold/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <Scale className="w-4 h-4 text-gold shrink-0" />
                        <span className="text-xs font-semibold uppercase tracking-wide text-gold-700">
                          {config.metaAngle}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-gold group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-gold-700 transition-colors">
                      Elitesecom OMS vs {config.competitorName}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {teaser}
                    </p>
                  </AppLink>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16 bg-[#FAFAF7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">
            Elitesecom OMS Pricing
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            All plans include payment reconciliation, return reconciliation, and
            multichannel order management. GST included.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-gold/40 transition-colors"
              >
                <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
                <p className="text-2xl font-bold text-gold-700 mb-1">
                  {plan.price}
                </p>
                <p className="text-xs text-slate-500 mb-3">{plan.priceSub}</p>
                <p className="text-sm text-slate-600">{plan.orderLimit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">
            Not sure which platform you're switching from?
          </h2>
          <p className="text-slate-600 mb-8">
            Book a free demo and we'll walk you through how Elitesecom OMS
            compares to your current stack — including migration and onboarding.
          </p>
          <AppLink
            page="contact"
            onNavigate={onNavigate}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-gold hover:text-slate-900 transition-all"
          >
            Talk to Sales
            <ArrowRight className="w-5 h-5" />
          </AppLink>
        </div>
      </section>
    </div>
  );
}
