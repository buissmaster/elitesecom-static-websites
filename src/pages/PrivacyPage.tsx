import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AppLink } from "@/components/AppLink";
import { Database } from "lucide-react";

interface PrivacyPageProps {
  onNavigate?: (page: string) => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Helmet>
      <title>Privacy Policy | Elitesecom</title>

      <meta
        name="description"
        content="Read Elitesecom's Privacy Policy to understand how we collect, use, store and protect your information while using our website and Order Management System."
      />

      <link
        rel="canonical"
        href="https://www.elitesecom.ai/privacy"
      />
    </Helmet>

    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl  mb-6">
              Privacy <span className="text-gold-500">Policy</span>
            </h1>
            <p className="text-lg text-slate-600">
              How we collect, use, and protect your information
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
              <section>
                <h4 className="text-[20px] font-bold  mb-4">❖ Introduction</h4>
                <p className="text-slate-600">
                  ElitesEcom ("we," "our," or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you use our
                  services.
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">
                  ❖ Information We Collect
                </h4>
                <p className="text-slate-600 mb-4">
                  We collect the following types of information:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>
                    <strong>Personal Information:</strong> Name, email address,
                    phone number, company name
                  </li>
                  <li>
                    <strong>Business Information:</strong> Order data, inventory
                    data, customer data
                  </li>
                  <li>
                    <strong>Usage Data:</strong> How you interact with our
                    platform
                  </li>
                  <li>
                    <strong>Technical Data:</strong> IP address, browser type,
                    device information
                  </li>
                </ul>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">
                  ❖ How We Use Your Information
                </h4>
                <p className="text-slate-600 mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process your orders and transactions</li>
                  <li>Communicate with you about our services</li>
                  <li>Improve our platform and user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">
                  ❖ Amazon Selling Partner API (SP-API) Data Handling
                </h4>
                <p className="text-slate-600 mb-4">
                  EliteSecom integrates with Amazon's Selling Partner API (SP-API)
                  to provide order management services for Amazon sellers. When
                  you authorize EliteSecom to access your Amazon seller account,
                  we may access the following data:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>
                    <strong>Order Information:</strong> Order details, customer
                    shipping information, and order status for order processing
                  </li>
                  <li>
                    <strong>Inventory Data:</strong> Product inventory levels and
                    warehouse information for inventory synchronization
                  </li>
                  <li>
                    <strong>Settlement Data:</strong> Payment settlement reports
                    for payment reconciliation purposes
                  </li>
                </ul>
                <p className="text-slate-600 mb-4">
                  <strong>Purpose of Data Access:</strong> This data is accessed
                  solely to provide the order management, inventory
                  synchronization, and payment reconciliation services you have
                  requested. We do not use Amazon data for unrelated purposes.
                </p>
                <p className="text-slate-600 mb-4">
                  <strong>Data Protection:</strong> Amazon data is protected
                  through encryption, access controls, and security monitoring.
                  Access is restricted to authorized personnel based on
                  role-based access controls. All access to Amazon data is logged
                  and audited.
                </p>
                <p className="text-slate-600 mb-4">
                  For detailed information about Amazon SP-API security and data
                  handling, please see our{" "}
                  {onNavigate ? (
                    <button
                      onClick={() => onNavigate("amazon-sp-api-security")}
                      className="inline-flex items-center gap-1 text-gold-600 hover:text-gold-700 underline"
                    >
                      <Database className="w-4 h-4" />
                      Amazon SP-API Security
                    </button>
                  ) : (
                    <a
                      href="/amazon-sp-api-security"
                      className="inline-flex items-center gap-1 text-gold-600 hover:text-gold-700 underline"
                    >
                      <Database className="w-4 h-4" />
                      Amazon SP-API Security
                    </a>
                  )}{" "}
                  page.
                </p>
                <p className="text-slate-600 mb-4">
                  <strong>Storage:</strong>{" "}
                  {/* [CONFIRMATION NEEDED: Please confirm Amazon data storage policy] */}
                  <span className="text-slate-600">
                    EliteSecom securely stores Amazon data received through SP-API where necessary to provide and support its authorized ecommerce and order management services. Access to stored data is restricted to authorized personnel and systems based on business and operational requirements.
                  </span>
                </p>
                <p className="text-slate-600">
                  <strong>Sharing with Service Providers:</strong>{" "}
                  {/* [CONFIRMATION NEEDED: Please confirm third-party sharing policy] */}
                  <span className="text-slate-600">
                    EliteSecom does not sell Amazon data or use it for advertising purposes. Where third-party service providers are required to support hosting, infrastructure, security, or other service functionality, Amazon data may be shared only as necessary to provide those services and is subject to appropriate security and confidentiality requirements.
                  </span>
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">
                  ❖ Amazon Restricted / PII Data
                </h4>
                <p className="text-slate-600 mb-4">
                  Through the Amazon SP-API integration, EliteSecom may process
                  restricted or personally identifiable information (PII) such as
                  customer names and shipping addresses necessary for order
                  fulfillment and shipping label generation.
                </p>
                <p className="text-slate-600 mb-4">
                  <strong>Why This Information Is Required:</strong> Customer
                  information is required to fulfill orders, generate shipping
                  labels, provide customer support, and reconcile payments —
                  core functions of the order management system.
                </p>
                <p className="text-slate-600 mb-4">
                  <strong>How It Is Used:</strong> This information is used only
                  for the specific purposes related to order processing and
                  customer service operations that you have authorized.
                </p>
                <p className="text-slate-600 mb-4">
                  <strong>Access Controls:</strong> Access to Amazon PII data is
                  restricted to authorized EliteSecom personnel based on
                  role-based access controls. All access is logged and audited.
                </p>
                <p className="text-slate-600 mb-4">
                  <strong>Security Protections:</strong> Amazon PII data is
                  protected through encryption in transit and at rest, access
                  controls, and security monitoring consistent with our SOC 2
                  Type II and ISO/IEC 27001:2022 security controls.
                </p>
                <p className="text-slate-600 mb-4">
                  <strong>Storage:</strong>{" "}
                  {/* [CONFIRMATION NEEDED: Please confirm PII storage policy] */}
                  <span className="text-slate-600">
                    Amazon PII received through SP-API is retained only when required for the operation and delivery of EliteSecom’s authorized ecommerce services. Such information is protected through appropriate access controls and security measures and is accessible only to authorized systems and personnel.
                  </span>
                </p>
                <p className="text-slate-600 mb-4">
                  <strong>Transmission:</strong>{" "}
                  {/* [CONFIRMATION NEEDED: Please confirm PII transmission policy] */}
                  <span className="text-slate-600">
                    EliteSecom does not sell Amazon PII data or use it for advertising purposes. Where transmission to authorized third-party service providers is required to provide hosting, infrastructure, security, or other service functionality, Amazon PII data is shared only as necessary and subject to appropriate security and confidentiality requirements.
                  </span>
                </p>
                <p className="text-slate-600">
                  <strong>Deletion:</strong>{" "}
                  {/* [CONFIRMATION NEEDED: Please confirm PII deletion process] */}
                  <span className="text-slate-600">
                    EliteSecom deletes Amazon PII data when it is no longer required for the purpose for which it was collected or processed, subject to applicable legal, regulatory, contractual, and legitimate business requirements. Where applicable, deletion is performed in accordance with EliteSecom’s data retention and deletion procedures.
                  </span>
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">
                  ❖ Data Sharing & Subprocessors
                </h4>
                <p className="text-slate-600 mb-4">
                  We do not sell your personal information. We may share your
                  data with the following categories of service providers who
                  help us operate our platform:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>
                    <strong>Cloud Infrastructure Providers:</strong> For hosting
                    and platform operations
                  </li>
                  <li>
                    <strong>Shipping/Label Providers:</strong> For generating
                    shipping labels and tracking shipments
                  </li>
                  <li>
                    <strong>Monitoring & Analytics:</strong> For system
                    monitoring, performance analytics, and error tracking
                  </li>
                  <li>
                    <strong>Support Services:</strong> For customer support and
                    communication tools
                  </li>
                </ul>
              
                <p className="text-slate-600 mb-4">
                  All third-party service providers are subject to contractual
                  obligations to protect your data and are only permitted to
                  process data for the specific purposes for which they were
                  engaged.
                </p>
                <p className="text-slate-600">
                  We may also share data with legal authorities when required by
                  law, and with business partners when you have provided consent.
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">❖ Data Retention</h4>
                <p className="text-slate-600 mb-4">
                  We retain different types of data for different periods based
                  on business needs and legal requirements:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>
                    <strong>Account Data:</strong> Retained while your account is
                    active and for a period after account termination as
                    required for legal and business purposes.
                    
                  </li>
                  <li>
                    <strong>Order Data:</strong> Retained for order processing,
                    reconciliation, and support purposes.
                  </li>
                  <li>
                    <strong>Transaction Data:</strong> Retained for accounting,
                    tax, and legal compliance purposes.
                  </li>
                </ul>
                <p className="text-slate-600 mb-4">
                  When the retention period ends, data is securely deleted or
                  anonymized in accordance with our data deletion policies.
                </p>
                <p className="text-slate-600">
                  Certain data may be retained for longer periods when required
                  by applicable laws, regulations, or legitimate business
                  interests.
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">❖ Data Deletion</h4>
                <p className="text-slate-600 mb-4">
                  You have the right to request deletion of your personal data.
                  When you request deletion:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>
                    We will delete your personal data from our active systems
                    within a reasonable timeframe, subject to legal and business
                    exceptions
                  </li>
                  <li>
                    Amazon data accessed through SP-API will be handled in
                    accordance with Amazon's data deletion requirements and our
                    data retention policies.
                  </li>
                  <li>
                    Account termination results in deletion of account access
                    and, where feasible, associated personal data
                  </li>
                  <li>
                    Backup data may be retained for disaster recovery purposes
                    and will be securely deleted according to backup retention
                    schedules.
                  </li>
                </ul>
                <p className="text-slate-600">
                  We may retain certain data when required by law, for fraud
                  prevention, security purposes, or to exercise or defend legal
                  claims.
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">❖ Data Security</h4>
                <p className="text-slate-600 mb-4">
                  We implement appropriate technical and organizational measures
                  to protect your data against unauthorized access, alteration,
                  disclosure, or destruction. Our security measures include:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>
                    <strong>Encryption:</strong> Data encryption in transit
                    (TLS 1.2+) and at rest using industry-standard encryption
                    protocols
                  </li>
                  <li>
                    <strong>Access Controls:</strong> Strict access controls with
                    principle of least privilege and regular access reviews
                  </li>
                  <li>
                    <strong>Role-Based Access Control (RBAC):</strong> Granular
                    permissions based on user roles and responsibilities
                  </li>
                  
                  <li>
                    <strong>Monitoring & Logging:</strong> Comprehensive logging,
                    monitoring, and alerting for security events
                  </li>
                  <li>
                    <strong>Vulnerability Management:</strong> Regular security
                    assessments, patch management, and vulnerability remediation
                  </li>
                  <li>
                    <strong>Security Testing:</strong> Regular penetration testing
                    and security audits, including VAPT assessments
                  </li>
                  <li>
                    <strong>Incident Response:</strong> Established procedures for
                    detecting, responding to, and recovering from security
                    incidents
                  </li>
                </ul>
                <p className="text-slate-600">
                  Our security controls are validated through SOC 2 Type II and
                  ISO/IEC 27001:2022 certifications. For detailed information
                  about our security practices, please see our{" "}
                  {onNavigate ? (
                    <button
                      onClick={() => onNavigate("security")}
                      className="text-gold-600 hover:text-gold-700 underline"
                    >
                      Security & Compliance
                    </button>
                  ) : (
                    <a
                      href="/security"
                      className="text-gold-600 hover:text-gold-700 underline"
                    >
                      Security & Compliance
                    </a>
                  )}{" "}
                  page.
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">❖ Your Rights</h4>
                <p className="text-slate-600 mb-4">
                  Depending on applicable data protection laws, you may have the
                  following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>
                    <strong>Access:</strong> Request access to the personal data we
                    hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate
                    or incomplete personal data
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    data, subject to legal and business exceptions
                  </li>
                  <li>
                    <strong>Object:</strong> Object to processing of your
                    personal data in certain circumstances
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your
                    personal data to another service provider where technically
                    feasible
                  </li>
                  <li>
                    <strong>Restrict:</strong> Request restriction of processing of
                    your personal data in certain circumstances
                  </li>
                </ul>
                <p className="text-slate-600">
                  To exercise these rights, please contact us using the information
                  provided in the Contact Us section below.
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">❖ Cookies</h4>
                <p className="text-slate-600">
                  We use cookies to enhance your experience on our platform. You
                  can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">
                  ❖ Third-Party Services
                </h4>
                <p className="text-slate-600">
                  Our platform may contain links to third-party websites. We are
                  not responsible for the privacy practices of these websites.
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">
                  ❖ Children's Privacy
                </h4>
                <p className="text-slate-600">
                  Our services are not intended for children under 13. We do not
                  knowingly collect personal information from children.
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">
                  ❖ Changes to This Policy
                </h4>
                <p className="text-slate-600">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page.
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">❖ Contact Us</h4>
                <p className="text-slate-600 mb-4">
                  If you have any questions about this Privacy Policy or our data
                  practices, please contact us at:
                </p>
                <p className="text-slate-600 mb-4">
                  <strong>General Privacy Inquiries:</strong>
                  <br />
                  Email: contact@elitesecom.ai
                  <br />
                  Phone: +91 94038 93414
                </p>
                <p className="text-slate-600">
                  <strong>Security & Vulnerability Reporting:</strong>
                  <br />
                  Email: security@elitesecom.ai
                </p>
              </section>

              <div className="pt-8 border-t border-slate-200">
                <p className="text-sm text-slate-500">
                  Last updated: September 15, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
   </> 
  );
}
