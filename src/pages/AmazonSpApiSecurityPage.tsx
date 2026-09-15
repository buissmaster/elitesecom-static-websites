import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Shield,
  CheckCircle,
  Lock,
  Database,
  ChevronRight,
  Key,
  Server,
  FileText,
  Clock,
  Mail,
  Minus,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface AmazonSpApiSecurityPageProps {
  onNavigate?: (page: string) => void;
}

export function AmazonSpApiSecurityPage({
  onNavigate,
}: AmazonSpApiSecurityPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [openPiiItem, setOpenPiiItem] = useState<number | null>(null);

  const piiHandlingItems = [
    {
      title: "What Amazon Restricted/PII Data May Be Accessed",
      description:
        "EliteSecom may access customer information (such as names and shipping addresses) necessary for order fulfillment, shipping label generation, and customer service operations. This data is accessed only when authorized by the seller through the Amazon SP-API authorization process.",
    },
    {
      title: "Why It Is Required",
      description:
        "This information is required to fulfill orders, generate shipping labels, provide customer support, and reconcile payments — all core functions of the order management system.",
    },
    {
      title: "Which EliteSecom Functionality Requires It",
      description:
        "Order processing, shipping label generation, customer communication, and payment reconciliation functionality may require access to this data.",
    },
    {
      title: "Who/What Can Access It",
      description:
        "Access is restricted to authorized EliteSecom personnel and automated systems based on role-based access controls. All access is logged and audited.",
    },
    {
      title: "How It Is Protected",
      description:
        "Data is protected through encryption, access controls, audit logging, and security monitoring. Protection measures align with our SOC 2 Type II and ISO/IEC 27001:2022 controls.",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Amazon SP-API Security & Data Protection | Elitesecom
        </title>
        <meta
          name="description"
          content="Learn how Elitesecom protects and handles Amazon SP-API data, including Amazon PII, storage, transmission, access controls, retention, and deletion."
        />
        <link
          rel="canonical"
          href="https://www.elitesecom.ai/amazon-sp-api-security"
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-gold-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
                Amazon SP-API Security &{" "}
                <span className="text-gold-500">Data Protection</span>
              </h1>
              <p className="text-lg text-slate-600">
                Learn how EliteSecom handles and protects data received through
                Amazon Selling Partner API (SP-API), with a focus on security,
                privacy, access control, retention, and responsible data handling.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Amazon SP-API Security Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Amazon SP-API Security Overview
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                EliteSecom uses Amazon Selling Partner API (SP-API) to provide
                authorized ecommerce and order management functionality. We handle
                Amazon data only for legitimate service purposes.
              </p>
            </div>

            <Card className="border-gold/20 shadow-lg">
              <CardContent className="p-8">
                {/* Data Flow Diagram */}
                <div className="mb-8">
                  <h3 className="font-semibold text-lg mb-6 text-center">
                    Data Flow Architecture
                  </h3>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                    <div className="bg-slate-100 rounded-xl px-6 py-4">
                      <p className="font-semibold text-sm">Amazon Seller</p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-slate-400 rotate-90 md:rotate-0" />
                    <div className="bg-orange-100 rounded-xl px-6 py-4">
                      <p className="font-semibold text-sm text-orange-700">
                        Amazon SP-API
                      </p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-slate-400 rotate-90 md:rotate-0" />
                    <div className="bg-gold/10 rounded-xl px-6 py-4 border-2 border-gold/30">
                      <p className="font-semibold text-sm text-gold-700">
                        EliteSecom
                      </p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-slate-400 rotate-90 md:rotate-0" />
                    <div className="bg-slate-100 rounded-xl px-6 py-4">
                      <p className="font-semibold text-sm">
                        Authorized Seller Workflow
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-base mb-4 flex items-center gap-2">
                      <Lock className="w-4 h-4 text-gold-600" />
                      Seller Authorization
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>
                          OAuth 2.0-based authorization with explicit seller
                          consent
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Token-based authentication with secure token storage
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Scoped permissions based on seller-approved operations
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-base mb-4 flex items-center gap-2">
                      <Database className="w-4 h-4 text-gold-600" />
                      Amazon Data Accessed
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>Order information for order management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>Inventory data for inventory synchronization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Settlement reports for payment reconciliation
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-base mb-4 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-gold-600" />
                      Access Control
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Role-based access to Amazon data within EliteSecom
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Audit logging of all Amazon API access and data usage
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Regular access reviews and permission audits
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-base mb-4 flex items-center gap-2">
                      <Key className="w-4 h-4 text-gold-600" />
                      Data Protection
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Encryption of Amazon data in transit and at rest
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Secure API communication with Amazon SP-API endpoints
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Data isolation per seller account
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section: Amazon Data & PII Handling */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Amazon Data & PII Handling
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Description of the Amazon-related data actually processed by
                EliteSecom.
              </p>
            </div>

            <div className="space-y-5">
              {piiHandlingItems.map((item, index) => {
                const isOpen = openPiiItem === index;

                return (
                  <div
                    key={item.title}
                    className={`relative overflow-hidden rounded-2xl border bg-white transition-all duration-500 ${
                      isOpen
                        ? "border-gold/20 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
                        : "border-slate-100 shadow-sm hover:border-slate-200 hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`absolute bottom-3 left-0 top-3 w-[5px] rounded-full transition-all duration-500 ${
                        isOpen
                          ? "bg-gold shadow-[0_0_8px_rgba(244,180,0,0.5)]"
                          : "bg-gold/40"
                      }`}
                    />

                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenPiiItem(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 py-6 pl-7 pr-5 text-left"
                    >
                      <span
                        className={`pr-6 text-base font-semibold transition-colors duration-300 sm:text-lg ${
                          isOpen ? "text-gold" : ""
                        }`}
                      >
                        {item.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                          isOpen
                            ? "border-gold bg-gold/10"
                            : "border-slate-300 text-slate-500"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4 text-gold" strokeWidth={2.5} />
                        ) : (
                          <Plus className="h-4 w-4" strokeWidth={2} />
                        )}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-7 pr-14 pb-6">
                        <div className="rounded-xl bg-gold/5 p-5">
                          <p className="text-sm leading-relaxed text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Section: Access Control */}
        <section className="py-8 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Access Control
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Access to Amazon-related data is restricted to authorized systems
                and personnel based on operational requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Key,
                  title: "Role-Based Access",
                  description:
                    "Access controls based on user roles and responsibilities.",
                },
                {
                  icon: Shield,
                  title: "Principle of Least Privilege",
                  description:
                    "Users have only the access necessary for their specific roles.",
                },
                {
                  icon: Server,
                  title: "Audit Logging",
                  description:
                    "Comprehensive logging of all Amazon data access and usage.",
                },
                {
                  icon: Clock,
                  title: "Regular Access Reviews",
                  description:
                    "Periodic review and revocation of unnecessary access permissions.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Amazon SP-API Compliance */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Amazon SP-API Compliance
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                EliteSecom's commitment to responsible handling of Amazon SP-API
                data and applicable requirements.
              </p>
            </div>

            <Card className="border-gold/20 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600 text-sm">
                      Amazon data is accessed only with explicit seller
                      authorization through the Amazon SP-API OAuth 2.0 process
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600 text-sm">
                      Data processing is limited to the specific scope authorized
                      by the seller and necessary for service delivery
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600 text-sm">
                      Security controls align with SOC 2 Type II and ISO/IEC
                      27001:2022 certifications
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600 text-sm">
                      Regular security assessments including VAPT to identify and
                      remediate vulnerabilities
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600 text-sm">
                      Amazon data is not used for advertising purposes or sold to
                      third parties
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section: Security Contact */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card className="border-gold/20 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-4">
                    Amazon SP-API Security Inquiries
                  </h2>
                  <p className="text-slate-600 mb-6">
                    For questions about EliteSecom's Amazon SP-API security and
                    data handling practices, please contact:
                  </p>
                  <a
                    href="mailto:security@elitesecom.ai"
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    security@elitesecom.ai
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
