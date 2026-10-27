import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { AppLink } from "@/components/AppLink";
import { getPathForPage } from "@/lib/routes";
import { toast } from "sonner";
import {
  Archive,
  ArrowUp,
  Baby,
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  ClipboardList,
  Copy,
  Database,
  ExternalLink,
  Globe,
  Info,
  Lock,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Scale,
  Share2,
  ShieldCheck,
  Store,
  User,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

interface PrivacyPageProps {
  onNavigate?: (page: string) => void;
}

const tocSections = [
  { id: "introduction", label: "Introduction & Overview" },
  { id: "gdpr-role", label: "Our Role Under GDPR" },
  { id: "information-collected", label: "Information We Collect" },
  { id: "legal-bases", label: "Legal Bases & Purposes" },
  { id: "marketplace-safeguards", label: "Marketplace Data Safeguards" },
  { id: "subprocessors", label: "Sub-processors & Sharing" },
  { id: "international-transfers", label: "International Data Transfers" },
  { id: "data-security", label: "Data Security" },
  { id: "data-retention", label: "Data Retention & Deletion" },
  { id: "data-subject-rights", label: "Data Subject Rights" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "policy-updates", label: "Updates to This Policy" },
  { id: "contact", label: "Contact Us & DPO" },
];

function InternalLink({
  page,
  onNavigate,
  children,
}: {
  page: string;
  onNavigate?: (page: string) => void;
  children: ReactNode;
}) {
  const className = "text-gold-600 hover:text-gold-700 underline";
  return onNavigate ? (
    <AppLink page={page} onNavigate={onNavigate} className={className}>
      {children}
    </AppLink>
  ) : (
    <a href={getPathForPage(page)} className={className}>
      {children}
    </a>
  );
}

function SectionHeading({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 mb-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold-200 bg-gold-50 text-gold-600">
        <Icon className="h-5 w-5" />
      </span>
      <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
    </div>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-800 mb-3">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
      {children}
    </h3>
  );
}

function InfoBox({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6 mb-6 last:mb-0">
      {children}
    </div>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-gold-200 bg-gold-50 p-4 sm:p-5">
      <div className="flex gap-3">
        <Info className="h-5 w-5 shrink-0 text-gold-600 mt-0.5" />
        <div className="space-y-3 text-slate-700">{children}</div>
      </div>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: ReactNode;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-gold-600">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-slate-800">
          {label}
        </span>
        <span className="block break-words text-sm text-slate-600">
          {value}
        </span>
      </span>
    </>
  );

  const base =
    "flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4";

  return href ? (
    <a
      href={href}
      className={`${base} transition-colors hover:border-gold-300 hover:bg-gold-50`}
    >
      {inner}
    </a>
  ) : (
    <div className={base}>{inner}</div>
  );
}

const listClass = "list-disc pl-5 text-slate-600 space-y-2 marker:text-gold-400";
const sectionClass = "scroll-mt-28";

const postalAddress =
  "No. 507-508, Pragati IT Park, Building-B, Mota Varachha, Surat, Gujarat 394105";
const postalMapsUrl = "https://maps.app.goo.gl/tLAjVWhxvMSBPa969";

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  const [addressCopied, setAddressCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(postalAddress);
      setAddressCopied(true);
      toast.success("Address copied to clipboard");
      setTimeout(() => setAddressCopied(false), 2000);
    } catch {
      toast.error("Could not copy address");
    }
  };

  const handleTocClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-200 bg-gold-50 text-gold-600 shadow-sm">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Privacy <span className="text-gold-500">Policy</span>
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              How we collect, process, safeguard, and manage your personal data
            </p>
            <p className="inline-flex items-center gap-2 rounded-full bg-gold-50 border border-gold-200 px-4 py-1.5 text-sm font-medium text-gold-700">
              <CalendarDays className="w-4 h-4" />
              Effective Date: October 10, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Table of Contents */}
            <nav
              aria-label="Table of contents"
              className="bg-slate-50 rounded-2xl p-6 sm:p-8 mb-8"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-4">
                On this page
              </p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {tocSections.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleTocClick(e, item.id)}
                      className="flex items-baseline gap-2 text-sm text-slate-600 hover:text-gold-600 transition-colors"
                    >
                      <span className="text-gold-500 font-semibold shrink-0">
                        {index + 1}.
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-10">
              <section id="introduction" className={sectionClass}>
                <SectionHeading
                  icon={BookOpen}
                  title="1. Introduction & Overview"
                />
                <p className="text-slate-600 mb-4">
                  Elitesecom (OMS Vision Solutions LLP) provides a multichannel
                  Order Management System (OMS) and Warehouse Management System
                  (WMS) platform designed for e-commerce sellers. We are
                  committed to safeguarding personal data in accordance with
                  applicable global data privacy regulations, including the
                  European Union General Data Protection Regulation (Regulation
                  (EU) 2016/679) (&ldquo;GDPR&rdquo;).
                </p>
                <p className="text-slate-600">
                  This Privacy Policy explains how we collect, process,
                  safeguard, and manage personal data across our operations,
                  website, mobile application, and SaaS platform integrations.
                </p>
              </section>

              <section id="gdpr-role" className={sectionClass}>
                <SectionHeading
                  icon={Users}
                  title="2. Our Role Under GDPR: Data Processor"
                />
                <p className="text-slate-600">
                  When e-commerce sellers connect marketplaces (such as Amazon,
                  Flipkart, Shopify, Meesho, Myntra, Nykaa, Ajio, and Snapdeal)
                  or courier partners to our platform, we process transaction
                  data, order records, customer fulfillment details, and
                  shipping information strictly as a{" "}
                  <strong>Data Processor</strong> on behalf of and under the
                  documented instructions of our clients (the{" "}
                  <strong>Data Controllers</strong>).
                </p>
              </section>

              <section id="information-collected" className={sectionClass}>
                <SectionHeading
                  icon={ClipboardList}
                  title="3. Information We Collect"
                />
                <InfoBox>
                  <SubHeading>
                    A. Information Collected as a Data Controller (Account &amp;
                    Platform Users)
                  </SubHeading>
                  <ul className={listClass}>
                    <li>
                      <strong>Account &amp; Contact Data:</strong> Name,
                      business email address, phone number, company name,
                      billing address, and job title.
                    </li>
                    <li>
                      <strong>Credentials:</strong> Usernames, encrypted
                      passwords, and multi-factor authentication preferences.
                    </li>
                    <li>
                      <strong>Billing Information:</strong> Payment details,
                      GST/tax identification numbers, and subscription
                      transaction history (processed through secure
                      PCI-DSS-compliant gateways).
                    </li>
                    <li>
                      <strong>Technical &amp; Usage Data:</strong> IP address,
                      browser type, operating system, login timestamps, device
                      identifiers, and platform activity logs.
                    </li>
                  </ul>
                </InfoBox>
                <InfoBox>
                  <SubHeading>
                    B. Information Processed as a Data Processor (Marketplace
                    &amp; End-Customer Data)
                  </SubHeading>
                  <ul className={listClass}>
                    <li>
                      <strong>Order &amp; Fulfillment Data:</strong> Buyer name,
                      shipping address, contact phone number, order ID, items
                      ordered, and delivery tracking references received via
                      connected APIs solely for fulfillment and shipping label
                      generation.
                    </li>
                    <li>
                      <strong>Inventory &amp; Catalog Data:</strong> SKU data,
                      stock quantities, warehouse bin allocations, and product
                      pricing.
                    </li>
                    <li>
                      <strong>Financial Reconciliation Data:</strong> Payout
                      statements, marketplace commission breakdowns, and
                      return/refund records.
                    </li>
                  </ul>
                </InfoBox>
              </section>

              <section id="legal-bases" className={sectionClass}>
                <SectionHeading
                  icon={Scale}
                  title="4. Legal Bases and Purposes of Processing"
                />
                <p className="text-slate-600 mb-4">
                  For data processed as a Data Controller, we rely on the
                  following GDPR legal bases:
                </p>
                <ul className={`${listClass} mb-4`}>
                  <li>
                    <strong>Performance of a Contract (Art. 6(1)(b)):</strong>{" "}
                    Providing OMS and WMS software services, authenticating
                    authorized users, managing subscriptions, and providing
                    technical support.
                  </li>
                  <li>
                    <strong>Legitimate Interests (Art. 6(1)(f)):</strong>{" "}
                    Ensuring platform availability, monitoring network security,
                    preventing fraud, generating aggregated operational
                    performance analytics, and improving platform functionality.
                  </li>
                  <li>
                    <strong>Legal Obligation (Art. 6(1)(c)):</strong> Complying
                    with statutory accounting, taxation, company law, and law
                    enforcement requests.
                  </li>
                  <li>
                    <strong>Consent (Art. 6(1)(a)):</strong> Operating
                    non-essential website cookies or sending marketing
                    newsletters (where opted in).
                  </li>
                </ul>
                <p className="text-slate-600">
                  For data processed as a Data Processor, we process personal
                  data strictly pursuant to Article 28(3)(a) upon the documented
                  instructions of our merchant clients and applicable Data
                  Processing Addenda (DPAs).
                </p>
              </section>

              <section id="marketplace-safeguards" className={sectionClass}>
                <SectionHeading
                  icon={Store}
                  title="5. Marketplace Data Safeguards (Including Amazon SP-API)"
                />
                <p className="text-slate-600 mb-4">
                  In compliance with strict third-party marketplace terms and
                  privacy standards:
                </p>
                <ul className={`${listClass} mb-4`}>
                  <li>
                    <strong>Purpose Limitation:</strong> Marketplace and
                    customer data are accessed exclusively to provide
                    multi-channel order processing, real-time inventory
                    synchronization, automated shipping label generation, and
                    payment/return reconciliation. We never use marketplace data
                    for independent commercial, profiling, or advertising
                    purposes.
                  </li>
                  <li>
                    <strong>Data Minimization:</strong> Platform ingestion APIs
                    are configured to extract only the minimum data attributes
                    necessary for order fulfillment and logistics routing.
                  </li>
                  <li>
                    <strong>Amazon Buyer PII:</strong> Buyer names, shipping
                    addresses, and contact details received through the Amazon
                    Selling Partner API are used solely for order fulfillment,
                    shipping label and invoice generation, and order-related
                    customer support. Amazon buyer PII is encrypted in transit
                    and at rest, retained only for the contracted service term
                    or as instructed by the seller, and deleted or anonymized on
                    contract termination or verified request.
                  </li>
                  <li>
                    <strong>No Selling of Personal Data:</strong> We do not
                    sell, rent, or lease any personal data.
                  </li>
                </ul>
                <p className="text-slate-600">
                  For detailed information about Amazon SP-API security and data
                  handling, please see our{" "}
                  <InternalLink
                    page="amazon-sp-api-security"
                    onNavigate={onNavigate}
                  >
                    <span className="inline-flex items-center gap-1">
                      <Database className="w-4 h-4" />
                      Amazon SP-API Security
                    </span>
                  </InternalLink>{" "}
                  page.
                </p>
              </section>

              <section id="subprocessors" className={sectionClass}>
                <SectionHeading
                  icon={Share2}
                  title="6. Sub-processors and Third-Party Sharing"
                />
                <p className="text-slate-600 mb-4">
                  We engage vetted third-party service providers
                  (sub-processors) to deliver platform infrastructure under
                  binding contracts requiring strict confidentiality and
                  technical security safeguards (Art. 28(4)):
                </p>
                <ul className={`${listClass} mb-4`}>
                  <li>
                    <strong>Amazon Web Services (AWS):</strong> Cloud hosting
                    and object storage (S3) for platform infrastructure, in AWS
                    India-region data centers.
                  </li>
                  <li>
                    <strong>Logistics &amp; Courier Gateways:</strong>{" "}
                    Integrated logistics providers and courier aggregators used
                    for Amazon and other marketplace orders, strictly for
                    transmitting destination details to print shipping labels
                    and retrieve real-time tracking numbers.
                  </li>
                  <li>
                    <strong>Professional &amp; Legal Advisors:</strong> Legal,
                    auditing, and compliance advisors under professional duties
                    of confidentiality.
                  </li>
                </ul>
                <p className="text-slate-600">
                  We ensure that all sub-processors are subject to data
                  protection obligations no less protective than those set out
                  in this Policy and our Data Processing Agreements.
                </p>
              </section>

              <section id="international-transfers" className={sectionClass}>
                <SectionHeading
                  icon={Globe}
                  title="7. International Data Transfers"
                />
                <p className="text-slate-600 mb-4">
                  Elitesecom operates from India and hosts infrastructure on
                  dedicated AWS cloud servers. When personal data originating in
                  the European Economic Area (EEA), the United Kingdom, or
                  Switzerland is transferred outside these territories to
                  jurisdictions without an adequacy decision:
                </p>
                <ul className={`${listClass} mb-4`}>
                  <li>
                    Transfers are governed by the European Commission&rsquo;s
                    approved Standard Contractual Clauses (SCCs) (Module 2:
                    Controller-to-Processor; Module 3: Processor-to-Processor).
                  </li>
                  <li>
                    Transfers are supplemented by technical safeguards,
                    including data encryption in transit (TLS 1.2+) and at rest
                    (AES-256), restricted role-based administrative access, and
                    vulnerability management.
                  </li>
                </ul>
                <p className="text-slate-600">
                  Clients subject to GDPR can execute our standard Data
                  Processing Addendum incorporating EU SCCs upon request.
                </p>
              </section>

              <section id="data-security" className={sectionClass}>
                <SectionHeading
                  icon={Lock}
                  title="8. Data Security and Organizational Measures"
                />
                <p className="text-slate-600 mb-4">
                  We have implemented technical and organizational measures
                  (TOMs) aligned with ISO/IEC 27001:2022 and SOC 2 Type II
                  principles:
                </p>
                <ul className={`${listClass} mb-4`}>
                  <li>
                    <strong>Encryption:</strong> Strong encryption of data in
                    transit using modern TLS protocols and data at rest
                    utilizing industry-standard cryptographic algorithms
                    (AES-256).
                  </li>
                  <li>
                    <strong>Access Control:</strong> Multi-tenant logical
                    isolation, strict role-based access control (RBAC),
                    multi-factor authentication (MFA), and least-privilege
                    administrative access policies.
                  </li>
                  <li>
                    <strong>Security Testing:</strong> Continuous monitoring,
                    routine patch management, periodic external Vulnerability
                    Assessment and Penetration Testing (VAPT), and immutable
                    audit logging.
                  </li>
                  <li>
                    <strong>Breach Notification:</strong> Documented Security
                    Incident Response Procedures mandating that in the event of
                    a verified personal data breach impacting client data,
                    Elitesecom will notify affected Data Controllers without
                    undue delay (Art. 33(2)) to support their statutory
                    obligations.
                  </li>
                </ul>
                <p className="text-slate-600">
                  For detailed information about our security practices, please
                  see our{" "}
                  <InternalLink page="security" onNavigate={onNavigate}>
                    Security &amp; Compliance
                  </InternalLink>{" "}
                  page.
                </p>
              </section>

              <section id="data-retention" className={sectionClass}>
                <SectionHeading
                  icon={Archive}
                  title="9. Data Retention & Deletion"
                />
                <p className="text-slate-600 mb-4">
                  We retain personal data strictly in accordance with business
                  requirements, contractual commitments, and statutory
                  obligations:
                </p>
                <ul className={listClass}>
                  <li>
                    <strong>Marketplace Buyer PII (including Amazon):</strong>{" "}
                    Buyer names, shipping addresses, and contact details
                    received through marketplace APIs are retained for a maximum
                    of 30 days after order shipment, then automatically deleted
                    or anonymized.
                  </li>
                  <li>
                    <strong>Account Records:</strong> Retained for the duration
                    of the active subscription and for a statutory period
                    post-termination to satisfy legal, tax, and audit
                    obligations.
                  </li>
                  <li>
                    <strong>Order &amp; Transaction Data:</strong> Retained
                    throughout the contracted service term for active order
                    processing and reconciliation, or as contractually
                    instructed by the client.
                  </li>
                  <li>
                    <strong>Contract Termination &amp; Purging:</strong> Upon
                    contract termination or explicit controller request,
                    personal data processed on behalf of the client is either
                    securely returned or irreversibly deleted/anonymized from
                    production systems in accordance with Art. 28(3)(g) and our
                    sanitization schedules.
                  </li>
                </ul>
              </section>

              <section id="data-subject-rights" className={sectionClass}>
                <SectionHeading
                  icon={UserCheck}
                  title="10. Data Subject Rights"
                />
                <InfoBox>
                  <SubHeading>
                    A. For Direct Users &amp; Website Visitors (Controller Data)
                  </SubHeading>
                  <p className="text-slate-600 mb-4">
                    If you are a direct client account holder or website
                    visitor, you may exercise your rights under GDPR Articles
                    15&ndash;22 by contacting our privacy team:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    <li className="flex gap-2.5 text-slate-600">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500 mt-0.5" />
                      <span>
                        <strong className="text-slate-800">
                          Right to Access:
                        </strong>{" "}
                        Request confirmation and copies of your personal data.
                      </span>
                    </li>
                    <li className="flex gap-2.5 text-slate-600">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500 mt-0.5" />
                      <span>
                        <strong className="text-slate-800">
                          Right to Rectification:
                        </strong>{" "}
                        Request correction of inaccurate or incomplete personal
                        records.
                      </span>
                    </li>
                    <li className="flex gap-2.5 text-slate-600">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500 mt-0.5" />
                      <span>
                        <strong className="text-slate-800">
                          Right to Erasure:
                        </strong>{" "}
                        Request deletion of your personal data, subject to
                        statutory retention obligations.
                      </span>
                    </li>
                    <li className="flex gap-2.5 text-slate-600">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500 mt-0.5" />
                      <span>
                        <strong className="text-slate-800">
                          Right to Restriction:
                        </strong>{" "}
                        Request temporary restriction of data processing under
                        certain legal grounds.
                      </span>
                    </li>
                    <li className="flex gap-2.5 text-slate-600">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500 mt-0.5" />
                      <span>
                        <strong className="text-slate-800">
                          Right to Data Portability:
                        </strong>{" "}
                        Request transfer of your data in a structured, commonly
                        used, machine-readable format.
                      </span>
                    </li>
                    <li className="flex gap-2.5 text-slate-600">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500 mt-0.5" />
                      <span>
                        <strong className="text-slate-800">
                          Right to Object:
                        </strong>{" "}
                        Object to processing based on legitimate interests or
                        direct marketing.
                      </span>
                    </li>
                  </ul>
                </InfoBox>
                <SubHeading>
                  B. For End-Consumers / Marketplace Shoppers (Processor Data)
                </SubHeading>
                <Callout>
                  <p>
                    If you are an end-consumer whose order was placed on an
                    e-commerce marketplace (e.g., Amazon, Flipkart, Shopify) and
                    processed via Elitesecom:
                  </p>
                  <p>
                    Please submit your data protection request directly to the
                    merchant or marketplace from whom you purchased the goods.
                  </p>
                  <p>
                    Elitesecom processes your personal data strictly as a Data
                    Processor on behalf of the merchant (the Data Controller).
                    We cannot unilaterally modify or delete order records
                    without documented instructions from the relevant seller,
                    but we will fully assist the merchant in fulfilling your
                    verified request.
                  </p>
                </Callout>
              </section>

              <section id="childrens-privacy" className={sectionClass}>
                <SectionHeading icon={Baby} title="11. Children's Privacy" />
                <p className="text-slate-600">
                  Our SaaS solutions are intended exclusively for commercial
                  business operations and are not directed to individuals under
                  the age of 18. We do not knowingly collect personal data from
                  children.
                </p>
              </section>

              <section id="policy-updates" className={sectionClass}>
                <SectionHeading
                  icon={RefreshCw}
                  title="12. Updates to This Policy"
                />
                <p className="text-slate-600">
                  We review and update this Privacy Policy periodically to
                  reflect technological changes, product enhancements, or
                  updated regulatory requirements. When material changes occur,
                  we will notify registered account holders via our platform
                  dashboard or registered email prior to the changes taking
                  effect.
                </p>
              </section>

              <section id="contact" className={sectionClass}>
                <SectionHeading
                  icon={Mail}
                  title="13. Contact Us & Data Protection Officer"
                />
                <p className="text-slate-600 mb-5">
                  For questions regarding this policy, exercising data
                  protection rights, or executing a Data Processing Addendum
                  (DPA), please contact our privacy office:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ContactCard
                    icon={User}
                    label="Data Protection Officer (DPO)"
                    value="Meet Vaghasiya"
                  />
                  <ContactCard
                    icon={Mail}
                    label="Privacy & DPO Email"
                    value={
                      <>
                        <a
                          href="mailto:dpo@elitesecom.ai"
                          className="block text-gold-600 underline hover:text-gold-700"
                        >
                          dpo@elitesecom.ai
                        </a>
                        <a
                          href="mailto:security@elitesecom.ai"
                          className="block text-gold-600 underline hover:text-gold-700"
                        >
                          security@elitesecom.ai
                        </a>
                      </>
                    }
                  />
                  <ContactCard
                    icon={Mail}
                    label="General Inquiries"
                    value="contact@elitesecom.ai"
                    href="mailto:contact@elitesecom.ai"
                  />
                  <ContactCard
                    icon={Phone}
                    label="Phone"
                    value="+91 94038 93414"
                    href="tel:+919403893414"
                  />
                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-gold-300 hover:bg-gold-50 sm:col-span-2">
                    <a
                      // href={postalMapsUrl}
                      // target="_blank"
                      // rel="noopener noreferrer"
                      title="Open in Google Maps"
                      className="flex min-w-0 flex-1 items-start gap-3"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-gold-600">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-slate-800">
                          Postal Address
                        </span>
                        <span className="block break-words text-sm text-slate-600">
                          {postalAddress}
                        </span>
                        {/* <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-gold-600">
                          <ExternalLink className="h-3 w-3" />
                          Open in Maps
                        </span> */}
                      </span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      title="Copy address"
                      aria-label="Copy address"
                      className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-gold-300 hover:text-gold-600"
                    >
                      {addressCopied ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </section>

              <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-sm text-slate-500">
                  Last updated: October 10, 2026
                </p>
                <button
                  type="button"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-gold-600"
                >
                  <ArrowUp className="h-4 w-4" />
                  Back to top
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
