import { useEffect, useState } from "react";
import { ArrowRight, Check, Minus } from "lucide-react";
import type { AlternativePageConfig } from "@/lib/alternativePages";
import { PRICING_PLANS } from "@/lib/pricingData";
import { AppLink } from "@/components/AppLink";

interface AlternativePageProps {
  config: AlternativePageConfig;
  onNavigate: (page: string) => void;
}

function CellValue({ value, positive }: { value: string; positive?: boolean }) {
  const isYes = /^(✓|yes|built|included|transparent|automated|unified|fast|iso|amazon)/i.test(
    value.trim(),
  );

  return (
    <span className={positive || isYes ? "text-slate-800" : "text-slate-600"}>
      {value}
    </span>
  );
}

export function AlternativePage({ config, onNavigate }: AlternativePageProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    window.scrollTo(0, 0);
  }, [config.id]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gold/10 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-4xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gold/10 text-gold-800 text-sm font-semibold">
              {config.metaAngle} · Elitesecom OMS
            </span>
            <AppLink
              page="comparisonsHub"
              onNavigate={onNavigate}
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-gold mb-4 transition-colors"
            >
              ← All OMS comparisons
            </AppLink>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[56px] leading-tight mb-6">
              {config.heroTitle}{" "}
              <span className="text-gold-500">{config.heroHighlight}</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
              {config.heroSubtitle}
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

      {/* Comparison table */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-center mb-10">
            Elitesecom OMS vs {config.competitorName}
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left p-4 font-semibold text-slate-500">Feature</th>
                  <th className="text-left p-4 font-semibold text-gold-700">
                    Elitesecom OMS
                  </th>
                  <th className="text-left p-4 font-semibold text-slate-700">
                    {config.competitorName}
                  </th>
                </tr>
              </thead>
              <tbody>
                {config.rows.map((row) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-slate-100 ${row.highlight ? "bg-gold/5" : ""}`}
                  >
                    <td className="p-4 font-medium text-slate-800">{row.feature}</td>
                    <td className="p-4">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <CellValue value={row.elitesecom} positive />
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-start gap-2">
                        <Minus className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                        <CellValue value={row.competitor} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why switch */}
      <section className="py-16 bg-[#FAFAF7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">
            Why sellers choose Elitesecom OMS over {config.competitorName}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {config.advantages.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-slate-100"
              >
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing snapshot */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">
            Transparent Elitesecom OMS Pricing
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            All plans include payment reconciliation, return reconciliation, and
            multichannel order management. GST included.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border border-slate-200 p-6 text-left hover:border-gold/40 transition-colors"
              >
                <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
                <p className="text-2xl font-bold text-gold-700 mb-1">{plan.price}</p>
                <p className="text-xs text-slate-500 mb-3">{plan.priceSub}</p>
                <p className="text-sm text-slate-600">{plan.orderLimit}</p>
                <p className="text-xs text-slate-500 mt-1">{plan.perOrder}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">FAQs</h2>
          <div className="space-y-4">
            {config.faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl border border-slate-200 p-6"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">
            Ready to switch from {config.competitorName}?
          </h2>
          <p className="text-slate-600 mb-8">
            Book a free Elitesecom OMS demo and see payment reconciliation, order
            management, and WMS in one dashboard.
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
