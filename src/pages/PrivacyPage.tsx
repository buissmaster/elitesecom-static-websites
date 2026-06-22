import { useEffect, useState } from "react";

export function PrivacyPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-gold-50">
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
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
              <section>
                <h2 className="text-2xl font-bold  mb-4">1. Introduction</h2>
                <p className="text-slate-600">
                  ElitesEcom ("we," "our," or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you use our
                  services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">
                  2. Information We Collect
                </h2>
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
                <h2 className="text-2xl font-bold  mb-4">
                  3. How We Use Your Information
                </h2>
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
                <h2 className="text-2xl font-bold  mb-4">4. Data Security</h2>
                <p className="text-slate-600">
                  We implement appropriate technical and organizational measures
                  to protect your data against unauthorized access, alteration,
                  disclosure, or destruction. This includes encryption, secure
                  servers, and regular security audits.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">5. Data Sharing</h2>
                <p className="text-slate-600">
                  We do not sell your personal information. We may share your
                  data with:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Service providers who help us operate our platform</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">6. Your Rights</h2>
                <p className="text-slate-600 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">7. Cookies</h2>
                <p className="text-slate-600">
                  We use cookies to enhance your experience on our platform. You
                  can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">
                  8. Third-Party Services
                </h2>
                <p className="text-slate-600">
                  Our platform may contain links to third-party websites. We are
                  not responsible for the privacy practices of these websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">
                  9. Children's Privacy
                </h2>
                <p className="text-slate-600">
                  Our services are not intended for children under 13. We do not
                  knowingly collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">
                  10. Changes to This Policy
                </h2>
                <p className="text-slate-600">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">11. Contact Us</h2>
                <p className="text-slate-600">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p className="text-slate-600 mt-2">
                  Email: contact@elitesecom.ai
                  <br />
                  Phone: +91 94038 93414
                </p>
              </section>

              <div className="pt-8 border-t border-slate-200">
                <p className="text-sm text-slate-500">
                  Last updated: January 1, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
