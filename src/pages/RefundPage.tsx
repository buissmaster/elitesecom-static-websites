import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
export function RefundPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
     <>
    <Helmet>
      <title>Refund Policy | Elitesecom</title>

      <meta
        name="description"
        content="Read Elitesecom's Refund Policy for Order Management System subscriptions, software services, billing, cancellations and refund eligibility."
      />

      <link
        rel="canonical"
        href="https://www.elitesecom.ai/RefundPolicy"
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
              Refund <span className="text-gold-500">Policy</span>
            </h1>
            <p className="text-lg text-slate-600">
              Our commitment to fair and transparent refund practices
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
                <h4 className="text-[20px] font-bold  mb-4">❖ Overview</h4>
                <p className="text-slate-600">
                  At ElitesEcom, we strive to provide the best service possible.
                  If you are not satisfied with our services, we offer refunds
                  under the conditions outlined in this policy.
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">❖ Free Trial</h4>
                <p className="text-slate-600">
                  We offer a 14-day free trial for all new users. No credit card
                  is required to start the trial. During this period, you can
                  evaluate our services risk-free.
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">
                  ❖ Monthly Subscriptions
                </h4>
                <p className="text-slate-600 mb-4">
                  For monthly subscription plans:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>You may cancel your subscription at any time</li>
                  <li>
                    Cancellations take effect at the end of the current billing
                    cycle
                  </li>
                  <li>No refunds are provided for partial months</li>
                  <li>
                    You will continue to have access until the end of your
                    billing period
                  </li>
                </ul>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">
                  ❖ Annual Subscriptions
                </h4>
                <p className="text-slate-600 mb-4">
                  For annual subscription plans:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>You may request a refund within 30 days of purchase</li>
                  <li>Refunds will be prorated based on usage</li>
                  <li>
                    After 30 days, annual subscriptions are non-refundable
                  </li>
                  <li>You may cancel auto-renewal at any time</li>
                </ul>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">
                 ❖ Eligible Refund Reasons
                </h4>
                <p className="text-slate-600 mb-4">
                  Refunds may be granted for the following reasons:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>
                    Service unavailability for more than 24 consecutive hours
                  </li>
                  <li>Significant failure to deliver promised features</li>
                  <li>Billing errors or duplicate charges</li>
                  <li>
                    Technical issues that prevent normal use of the service
                  </li>
                </ul>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">
                  ❖ Non-Refundable Items
                </h4>
                <p className="text-slate-600 mb-4">
                  The following are not eligible for refunds:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Setup fees and implementation charges</li>
                  <li>Custom development work</li>
                  <li>Training and consultation services</li>
                  <li>Third-party integration fees</li>
                  <li>Partial month usage</li>
                </ul>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">❖ Refund Process</h4>
                <p className="text-slate-600 mb-4">To request a refund:</p>
                <ol className="list-decimal list-inside text-slate-600 space-y-2">
                  <li>Contact our support team at contact@elitesecom.ai</li>
                  <li>Provide your account details and reason for refund</li>
                  <li>
                    Our team will review your request within 5 business days
                  </li>
                  <li>
                    If approved, refunds will be processed within 10 business
                    days
                  </li>
                </ol>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">❖ Refund Method</h4>
                <p className="text-slate-600">
                  Refunds will be issued to the original payment method used for
                  the purchase. Depending on your payment provider, it may take
                  5-10 business days for the refund to reflect in your account.
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">
                  ❖ Service Termination
                </h4>
                <p className="text-slate-600">
                  Upon refund approval, your access to the service will be
                  terminated. You are responsible for exporting any data before
                  the termination date.
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">
                  ❖ Changes to This Policy
                </h4>
                <p className="text-slate-600">
                  We reserve the right to modify this Refund Policy at any time.
                  Changes will be effective immediately upon posting on our
                  website.
                </p>
              </section>

              <section>
                <h4 className="text-[20px] font-bold  mb-4">❖ Contact Us</h4>
                <p className="text-slate-600">
                  If you have any questions about our Refund Policy, please
                  contact us:
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
   </> 
  );
}
