import { useEffect, useState } from "react";

export function TermsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl  mb-6">
              Terms & <span className="text-gold-500">Conditions</span>
            </h1>
            <p className="text-lg text-slate-600">
              Please read these terms carefully before using our services
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
                <h2 className="text-2xl font-bold  mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-slate-600">
                  By accessing and using ElitesEcom's services, you agree to be
                  bound by these Terms and Conditions. If you do not agree to
                  these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">
                  2. Description of Services
                </h2>
                <p className="text-slate-600">
                  ElitesEcom provides e-commerce order management software as a
                  service (SaaS) that enables businesses to manage inventory,
                  process orders, and handle fulfillment across multiple sales
                  channels.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">3. User Accounts</h2>
                <p className="text-slate-600">
                  To use our services, you must create an account. You are
                  responsible for maintaining the confidentiality of your
                  account credentials and for all activities that occur under
                  your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">4. Payment Terms</h2>
                <p className="text-slate-600">
                  All fees are exclusive of taxes. You are responsible for
                  paying all applicable taxes. Payments are non-refundable
                  except as specified in our Refund Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">5. Data Ownership</h2>
                <p className="text-slate-600">
                  You retain ownership of all data you upload to our platform.
                  We only use your data to provide and improve our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">
                  6. Service Level Agreement
                </h2>
                <p className="text-slate-600">
                  We strive to maintain 99.9% uptime. In case of service
                  interruptions, we will make reasonable efforts to restore
                  service promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">7. Termination</h2>
                <p className="text-slate-600">
                  Either party may terminate the agreement with 30 days written
                  notice. Upon termination, your access to the service will be
                  discontinued.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-slate-600">
                  ElitesEcom shall not be liable for any indirect, incidental,
                  special, or consequential damages arising out of or in
                  connection with our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">9. Governing Law</h2>
                <p className="text-slate-600">
                  These terms shall be governed by and construed in accordance
                  with the laws of India. Any disputes shall be subject to the
                  exclusive jurisdiction of the courts in Surat, Gujarat.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold  mb-4">
                  10. Changes to Terms
                </h2>
                <p className="text-slate-600">
                  We reserve the right to modify these terms at any time. We
                  will notify you of any material changes via email or through
                  our platform.
                </p>
              </section>

              <div className="pt-8 border-t border-slate-200">
                <p className="text-sm text-slate-500">
                  Last updated: January 1, 2026
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  For any questions regarding these terms, please contact us at
                  contact@elitesecom.ai
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
