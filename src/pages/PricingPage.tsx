import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Check, ArrowRight, Sparkles, Zap, Building2, Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

type Plan = {
  name: string;
  price: string;
  priceSub: string;
  orderLimit: string;
  perOrder: string;
  description: string;
  features: string[];
  cta: string;
  ctaAction: string;
  popular: boolean;
  theme: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    border: string;
    bg: string;
    badgeBg: string;
    badgeText: string;
    checkBg: string;
    checkText: string;
    glow: string;
  };
  icon: React.ReactNode;
};

const plans: Plan[] = [
  {
    name: "Startup Plan",
    price: "₹17,700",
    priceSub: "(With 18% GST Included)",
    orderLimit: "Upto 6,000 orders",
    perOrder: "₹2.95 / order",
    description: "Perfect for small businesses just getting started",
    features: [
      "All analytics features",
      "Unlimited E-commerce Channels",
      "Up to 1 Lakh SKU's",
      "Up to 3 Users",
      "Payment & return reconciliation",
      "Basic support",
      "Email notifications",
    ],
    cta: "Get Started",
    ctaAction: "contact",
    popular: false,
    theme: {
      primary: "#64748B",
      primaryLight: "#F1F5F9",
      primaryDark: "#475569",
      border: "rgba(100,116,139,0.15)",
      bg: "linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 50%, #F1F5F9 100%)",
      badgeBg: "#F1F5F9",
      badgeText: "#475569",
      checkBg: "#F1F5F9",
      checkText: "#64748B",
      glow: "rgba(100,116,139,0.06)",
    },
    icon: <Zap className="w-5 h-5" />,
  },
  {
    name: "Growth Plan",
    price: "₹1,00,300",
    priceSub: "(With 18% GST Included)",
    orderLimit: "Upto 50,000 orders",
    perOrder: "₹2.00 / order",
    description: "For growing businesses with expanding needs",
    features: [
      "Everything in Startup",
      "Unlimited SKUs",
      "Unlimited Warehouses",
      "Unlimited Users",
      "Priority support",
      "Payment & return reconciliation",
      "Advanced analytics",
      "API access",
    ],
    cta: "Get Started",
    ctaAction: "demo",
    popular: true,
    theme: {
      primary: "#F5B800",
      primaryLight: "#FEF3C7",
      primaryDark: "#B45309",
      border: "rgba(245,184,0,0.25)",
      bg: "linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 40%, #FEFCE8 100%)",
      badgeBg: "#F5B800",
      badgeText: "#1E293B",
      checkBg: "#FEF3C7",
      checkText: "#D97706",
      glow: "rgba(245,184,0,0.12)",
    },
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    name: "Enterprise Plan",
    price: "₹3,30,400",
    priceSub: "(With 18% GST Included)",
    orderLimit: "Unlimited orders",
    perOrder: "Custom pricing",
    description: "For large enterprises with custom requirements",
    features: [
      "Everything in Growth",
      "Unlimited & Customizable User Roles",
      "B2B App",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    ctaAction: "contact",
    popular: false,
    theme: {
      primary: "#64748B",
      primaryLight: "#F1F5F9",
      primaryDark: "#475569",
      border: "rgba(100,116,139,0.15)",
      bg: "linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 50%, #F1F5F9 100%)",
      badgeBg: "#F1F5F9",
      badgeText: "#475569",
      checkBg: "#F1F5F9",
      checkText: "#64748B",
      glow: "rgba(100,116,139,0.06)",
    },
    icon: <Building2 className="w-5 h-5" />,
  },
];

function PlanCard({
  plan,
  index,
  onNavigate,
}: {
  plan: Plan;
  index: number;
  onNavigate: (page: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${plan.popular ? "ring-2 ring-gold shadow-xl" : "shadow-md hover:shadow-xl"}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        borderColor: plan.popular ? "rgba(245,184,0,0.3)" : plan.theme.border,
        background: plan.theme.bg,
      }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${plan.theme.glow} 0%, transparent 60%)`,
        }}
      />

      {/* Most Popular badge */}
      {plan.popular && (
        <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 z-10">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold  text-[11px] font-semibold leading-none">
            <Sparkles className="w-3 h-3" />
            Most Popular
          </div>
        </div>
      )}

      <div
        className={`relative ${plan.popular ? "p-8 sm:p-10 lg:p-12" : "p-7 sm:p-8 lg:p-10"} flex flex-col h-full`}
      >
        {/* Plan icon + name */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              backgroundColor: plan.theme.primaryLight,
              color: plan.theme.primary,
            }}
          >
            {plan.icon}
          </div>
          <h3 className="font-heading font-bold text-xl ">{plan.name}</h3>
        </div>

        {/* Price */}
        <div className="mb-1">
          <span className="text-4xl sm:text-5xl font-extrabold  tracking-tight">
            {plan.price}
          </span>
        </div>
        <p
          className="text-sm font-medium mb-4"
          style={{ color: plan.theme.primaryDark }}
        >
          {plan.priceSub}
        </p>

        {/* Order info row */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
          <span className="text-sm font-semibold text-slate-700">
            {plan.orderLimit}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span
            className="text-sm font-semibold"
            style={{ color: plan.theme.primary }}
          >
            {plan.perOrder}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
          {plan.description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: plan.theme.checkBg }}
              >
                <Check
                  className="w-3 h-3"
                  style={{ color: plan.theme.checkText }}
                />
              </div>
              <span className="text-slate-600 text-sm leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => onNavigate(plan.ctaAction)}
          className={`w-full rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group ${
            plan.popular
              ? "py-6 text-base bg-gold  hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              : "py-4 text-sm bg-white text-slate-700 border-2 border-slate-200 hover:border-slate-400 hover: hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          }`}
        >
          {plan.cta}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const branches = [
    {
      name: "Surat Branch",
      address:
        "Pragati it park, B 508, beside Dosa Charcoal, Mota Varachha, Surat, Gujarat 394105",
      mapEmbedLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4411.396355854164!2d72.87128280000002!3d21.234312100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f6ba64ec273%3A0xb4261c0bac79e8c2!2sElitesecom%20oms%20%26%20reco!5e1!3m2!1sen!2sin!4v1782813843274!5m2!1sen!2sin",
      mapLink: "https://maps.app.goo.gl/4NgWJ9RvzzK5V46AA",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url =
      "https://krljwwj3qkhqmlq3aqw76xnttm0mcsgp.lambda-url.ap-south-1.on.aws/";
    const payload = {
      actionType: "contactUs",
      name: formData.name,
      email: formData.email,
      phone_no: formData.mobile,
      message: "ElitesEcom " + formData.message,
    };
    try {
      setIsSubmitting(true);
      const response = await axios.post(url, payload);
      if (response.status == 200) {
        toast.success("Thank you for ContactUs. We'll Getting back to you shortly");
        setFormData({ name: "", email: "", mobile: "", message: "" });
        setSubmitted(true);
      }
    } catch (error) {
      toast.error("There was an error in Submit Form. Please try again");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>OMS Pricing Plans | Elitesecom</title>

        <meta
          name="description"
          content="Choose the right Elitesecom Order Management System pricing plan for your ecommerce business with scalable features for growing brands."
        />

        <link
          rel="canonical"
          href="https://www.elitesecom.ai/pricing"
        />
      </Helmet>

    <div className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gold/10">
      {/* Hero Section */}
      <section className="relative pt-10">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 right-[10%] w-64 h-64 bg-lavender-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-[8%] w-80 h-80 bg-gold-200/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-100/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[56px]  mb-4 leading-tight">
              Get Custom <span className="text-gold-500">OMS Pricing</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
              Every ecommerce business is different. Contact our experts to receive a personalised Order Management System solution tailored to your operations, integrations, and growth goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section (replaces Pricing Cards) - reuse Contact UI */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Form (Takes 5 columns) */}
            <div
              className={`lg:col-span-5 transition-all duration-700 h-full ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg h-full flex flex-col justify-between">
                <div>
                  <h2 className="font-heading font-semibold text-2xl mb-6">
                    Send us a Message
                  </h2>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-gold-600" />
                      </div>
                      <h3 className="font-semibold text-xl mb-2">Message Sent!</h3>
                      <p className="text-slate-600">We'll get back to you soon.</p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 text-gold font-semibold hover:text-gold-600"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Mobile No</label>
                        <input
                          type="tel"
                          required
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                          placeholder="+91 XXXXXXXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-full bg-gold font-semibold hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Contact details & Integrated Map (Takes 7 columns) */}
            <div
              className={`lg:col-span-7 space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              {/* Quick Contact Row */}
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="font-heading font-semibold text-xl mb-4">Quick Contact</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <a href="mailto:contact@elitesecom.ai" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-gold-50 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center transition-all duration-300 group-hover:bg-gold group-hover:scale-110 group-hover:rotate-6">
                      <Mail className="w-6 h-6 text-gold transition-all duration-300 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="font-medium">contact@elitesecom.ai</p>
                    </div>
                  </a>

                  <a href="tel:+919403893414" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-gold-50 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center transition-all duration-300 group-hover:bg-gold group-hover:scale-110 group-hover:rotate-6">
                      <Phone className="w-6 h-6 text-gold transition-all duration-300 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="font-medium">+91 94038 93414</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Our Offices Side-by-Side Map Card */}
              <div className="bg-white rounded-3xl p-6 shadow-lg overflow-hidden">
                <h3 className="font-heading font-semibold text-xl mb-4">Our Offices</h3>

                <div className="grid md:grid-cols-12 gap-6">
                  {/* Address Content (Left Side) */}
                  <div className="md:col-span-5 space-y-4">
                    {branches.map((branch) => (
                      <a key={branch.name} href={branch.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-gold-50 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-gold group-hover:scale-110 group-hover:rotate-6">
                          <MapPin className="w-6 h-6 text-gold transition-all duration-300 group-hover:text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{branch.name}</p>
                          <p className="text-sm text-slate-600 mt-1">{branch.address}</p>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Satellite Map (Right Side) */}
                  <div className="md:col-span-7 min-h-[220px] rounded-2xl overflow-hidden relative border border-slate-150">
                    <iframe
                      title="Office Location Satellite Map"
                      src={branches[0].mapEmbedLink}
                      className="absolute inset-0 w-full h-full border-0"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              {/* Request a Demo Card */}
              <div className="bg-gradient-to-r from-gold to-gold-500 rounded-3xl p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="font-heading font-semibold text-xl mb-1">Request a Demo</h3>
                  <p className="text-slate-700">See ElitesEcom in action with a personalized demo</p>
                </div>
                <button onClick={() => onNavigate("demo")} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shrink-0">
                  Book Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl  mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-slate-500 mb-10">
            Our team is here to help you choose the right plan
          </p>
          {/* <button
            onClick={() => onNavigate("contact")}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold  font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Contact Sales
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button> */}
        </div>
      </section>
    </div>
   </> 
  );
}
