import { useEffect, useState } from "react";
import { Plus, X, ArrowRight, MessageCircle } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import { faqCategories } from "@/lib/faqData";

interface FAQPageProps {
  onNavigate: (page: string) => void;
}

export function FAQPage({ onNavigate }: FAQPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const faqs = faqCategories;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-76px)] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Left: Illustration */}
            <div className="relative mx-auto" style={{ maxWidth: "100%" }}>
              <img
                src="/faq-hero-clean.png"
                alt="FAQ Illustration"
                className="w-full xs:max-w-[370px] sm:max-w-[600px] animate-float"
              />
            </div>

            {/* Right: Text Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[56px] mb-5 leading-tight">
                OMS & <span className="text-gold">Reconciliation</span> FAQs
              </h1>
              <p className="text-base text-slate-500 max-w-md leading-relaxed">
                Answers about our order management system (OMS), payment
                reconciliation, return reconciliation, inventory, and warehouse
                management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-[#FAFAF7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((category, catIndex) => (
              <div key={category.category}>
                {/* Category Heading */}
                <h2 className="font-heading font-bold text-2xl sm:text-3xl  mb-8 tracking-tight">
                  {category.category}
                </h2>

                {/* FAQ Cards */}
                <div className="space-y-5">
                  {category.questions.map((faq, qIndex) => {
                    const index = catIndex * 10 + qIndex;
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={index}
                        className={`relative bg-white rounded-2xl border transition-all duration-500 overflow-hidden ${
                          isOpen
                            ? "border-gold/20 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
                            : "border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200"
                        }`}
                      >
                        {/* Left Accent Strip */}
                        <div
                          className={`absolute left-0 top-3 bottom-3 w-[5px] rounded-full transition-all duration-500 ${
                            isOpen
                              ? "bg-gold shadow-[0_0_8px_rgba(244,180,0,0.5)]"
                              : "bg-gold/40"
                          }`}
                        />

                        {/* Question Button */}
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="w-full flex items-center justify-between pl-7 pr-5 py-6 text-left"
                        >
                          <span
                            className={`font-semibold text-base sm:text-lg pr-6 transition-colors duration-300 ${
                              isOpen ? "text-gold" : ""
                            }`}
                          >
                            {faq.q}
                          </span>

                          {/* Plus/Minus Icon in Circle */}
                          <div
                            className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                              isOpen
                                ? "border-gold bg-gold/10 rotate-0"
                                : "border-slate-300 hover:border-gold/60"
                            }`}
                          >
                            {isOpen ? (
                              <X
                                className="w-4 h-4 text-gold"
                                strokeWidth={2.5}
                              />
                            ) : (
                              <Plus
                                className="w-4 h-4 text-slate-500"
                                strokeWidth={2}
                              />
                            )}
                          </div>
                        </button>

                        {/* Expandable Answer */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen
                              ? "max-h-60 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="pl-7 pr-14 pb-6">
                            <div
                              className={`rounded-xl p-5 transition-all duration-500 ${
                                isOpen ? "bg-gold/5" : ""
                              }`}
                            >
                              <p className="text-slate-600 leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="pb-16 bg-[#FAFAF7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-10 sm:p-12 border border-slate-200 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-gold" />
            </div>
            <h2 className="font-heading font-bold text-3xl  mb-4">
              Still Have Questions?
            </h2>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help
              you with any questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AppLink
                page="contact"
                onNavigate={onNavigate}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold  font-semibold hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </AppLink>
              <a
                href="mailto:contact@elitesecom.ai"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-semibold hover:border-gold hover:text-gold transition-all duration-300"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
