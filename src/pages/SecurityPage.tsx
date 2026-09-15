import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Shield,
  CheckCircle,
  Lock,
  Server,
  Key,
  Eye,
  Database,
  Clock,
  FileText,
  Mail,
  ChevronRight,
  Globe,
  Cloud,
  AlertTriangle,
  Minus,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SecurityPageProps {
  onNavigate?: (page: string) => void;
}

export function SecurityPage({ onNavigate }: SecurityPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [openRetentionItem, setOpenRetentionItem] = useState<number | null>(null);

  const retentionItems = [
    {
      title: "What Types of Data Are Retained",
      description:
        "Elitesecom retains information necessary to provide, maintain, secure, and improve its services. This may include account information, business and order-related data, marketplace integration data, transaction and operational records, and other information required to provide the services.",
    },
    {
      title: "Why They Are Retained",
      description:
        "Data is retained to provide and maintain Elitesecom services, support customer operations, maintain records, meet security and operational requirements, resolve issues, and comply with applicable legal, regulatory, and contractual obligations.",
    },
    {
      title: "Retention Periods",
      description:
        "Elitesecom retains data only for as long as reasonably necessary to fulfill the purposes for which it was collected, provide the applicable services, maintain legitimate business records, and comply with applicable legal, regulatory, and contractual requirements. Specific retention periods may vary depending on the type and purpose of the data.",
    },
    {
      title: "Deletion Process",
      description:
        "When data is no longer required for its intended purpose or applicable retention requirements, Elitesecom follows its data deletion procedures to securely delete or anonymize the applicable data. Where data is subject to a legal, regulatory, contractual, or legitimate business retention requirement, deletion may occur after that requirement has been satisfied.",
    },
    {
      title: "Account/Data Deletion",
      description:
        "Customers may request deletion of their account and associated data by contacting Elitesecom through the official support or contact channels. Elitesecom will process eligible deletion requests in accordance with its data retention, contractual, legal, and regulatory obligations.",
    },
    {
      title: "Backup Handling",
      description:
        "Data contained in backups is handled in accordance with Elitesecom's backup and retention practices. Backup copies are retained only as necessary for business continuity, disaster recovery, security, and applicable legal or regulatory requirements and are removed or overwritten in accordance with the applicable backup lifecycle.",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Security & Compliance | SOC 2, ISO 27001 | Elitesecom</title>
        <meta
          name="description"
          content="Learn about Elitesecom's security and compliance practices, including SOC 2 Type II, ISO/IEC 27001:2022, VAPT, Amazon SP-API data protection and privacy."
        />
        <link rel="canonical" href="https://www.elitesecom.ai/security" />
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
                Security & <span className="text-gold-500">Compliance</span>
              </h1>
              <p className="text-lg text-slate-600">
                Elitesecom is committed to protecting customer, marketplace, and
                business data with enterprise-grade security controls and
                compliance standards.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Security & Compliance Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Certifications 
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our security framework is built on internationally recognized
                standards and best practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* SOC 2 Type II */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/soc icon.png"
                    alt="SOC 2 Type II"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="font-bold text-xl mb-2">SOC 2 Type II</h3>
                <p className="text-slate-600 text-sm">
                  Validated security controls based on AICPA Trust Services
                  Criteria for security, availability, and processing integrity.
                </p>
              </motion.div>

              {/* ISO/IEC 27001:2022 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/iso icon.png"
                    alt="ISO/IEC 27001:2022"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="font-bold text-xl mb-2">ISO/IEC 27001:2022</h3>
                <p className="text-slate-600 text-sm">
                  Information Security Management System (ISMS) certified for
                  comprehensive information security governance.
                </p>
              </motion.div>

              {/* VAPT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/vapt icon.png"
                  alt="VAPT"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="font-bold text-xl mb-2">VAPT</h3>
                <p className="text-slate-600 text-sm">
                  Regular Vulnerability Assessment and Penetration Testing to
                  identify and remediate security weaknesses.
                </p>
              </motion.div>

              {/* GDPR */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow relative"
              >
                <span className="absolute top-4 right-4 inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                  In Progress
                </span>
                <div className="flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/gdpr icon.png"
                    alt="GDPR"
                    className="w-16 h-18 object-contain"
                  />
                </div>
                <div className="mb-2">
                  <h3 className="font-bold text-xl mb-1">GDPR</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  General Data Protection Regulation compliance is currently in
                  progress to strengthen data privacy and protection practices.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Infrastructure & Application Security */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Infrastructure & Application Security
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Multi-layered security controls protecting our platform and your
                data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Server,
                  title: "Infrastructure Security",
                  description:
                    "Cloud infrastructure with network isolation, firewalls, and secure configurations.",
                },
                {
                  icon: Lock,
                  title: "Data Encryption",
                  description:
                    "Encryption in transit (TLS 1.2+) and at rest using industry-standard encryption protocols.",
                },
                {
                  icon: Key,
                  title: "Access Control",
                  description:
                    "Strict access controls with principle of least privilege and regular access reviews.",
                },
                {
                  icon: Shield,
                  title: "Role-Based Access Control (RBAC)",
                  description:
                    "Granular permissions based on user roles and responsibilities.",
                },
                {
                  icon: Eye,
                  title: "Multi-Factor Authentication (MFA)",
                  description:
                    "Additional security layer for user authentication and sensitive operations.",
                },
                {
                  icon: Globe,
                  title: "Network Security",
                  description:
                    "Network segmentation, DDoS protection, and continuous monitoring.",
                },
                {
                  icon: FileText,
                  title: "Monitoring & Logging",
                  description:
                    "Comprehensive logging, monitoring, and alerting for security events.",
                },
                {
                  icon: Database,
                  title: "Backup & Recovery",
                  description:
                    "Regular backups with tested recovery procedures to ensure business continuity.",
                },
                {
                  icon: AlertTriangle,
                  title: "Vulnerability Management",
                  description:
                    "Regular security assessments, patch management, and vulnerability remediation.",
                },
                {
                  icon: CheckCircle,
                  title: "Secure Application Development",
                  description:
                    "Secure coding practices, code reviews, and security testing in development lifecycle.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
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

        {/* Section 3: Amazon SP-API Security Reference */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-gold/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-4">
                      Amazon SP-API Security
                    </h2>
                    <p className="text-slate-600 mb-6">
                      Learn how Elitesecom handles and protects data received through
                      Amazon Selling Partner API (SP-API), including Amazon PII,
                      data storage, transmission, retention, and deletion.
                    </p>
                    <button
                      onClick={() => onNavigate && onNavigate("amazon-sp-api-security")}
                      className="inline-flex items-center gap-2 bg-gold hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: Data Retention & Deletion */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Data Retention & Deletion
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Clear policies for data retention and secure deletion processes.
              </p>
            </div>

            <div className="space-y-5">
              {retentionItems.map((item, index) => {
                const isOpen = openRetentionItem === index;

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
                      onClick={() => setOpenRetentionItem(isOpen ? null : index)}
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

       

        {/* Section 6: Data Processing & Privacy */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Data Processing & Privacy
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our commitment to data protection and privacy practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Database,
                  title: "Data Processing",
                  description:
                    "All data processing is conducted in accordance with applicable data protection laws and our security controls.",
                },
                {
                  icon: Lock,
                  title: "Data Confidentiality",
                  description:
                    "Strict confidentiality measures protect customer data from unauthorized access or disclosure.",
                },
                {
                  icon: Shield,
                  title: "Data Protection",
                  description:
                    "Comprehensive security controls protect data throughout its lifecycle.",
                },
                {
                  icon: Key,
                  title: "Authorized Access",
                  description:
                    "Access to data is restricted to authorized personnel based on business need.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6"
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

            <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
              {onNavigate && (
                <button
                  onClick={() => onNavigate("privacy")}
                  className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium text-sm transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  View our Privacy Policy
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
              {onNavigate && (
                <button
                  onClick={() => onNavigate("amazon-sp-api-security")}
                  className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium text-sm transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  Amazon SP-API Security
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Section 9: Security Contact */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card className="border-gold/20 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-4">
                    Security & Vulnerability Reporting
                  </h2>
                  <p className="text-slate-600 mb-6">
                    For security-related concerns or vulnerability reports,
                    please contact our security team:
                  </p>
                  <a
                    href="mailto:security@elitesecom.ai"
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    security@elitesecom.ai
                  </a>
                  <p className="text-slate-500 text-sm mt-4">
                    We take security seriously and will respond promptly to
                    security-related inquiries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

