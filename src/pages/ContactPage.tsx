import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", mobile: "", message: "" });
    }, 1500);
  };

  const branches = [
    {
      name: "Surat Branch",
      address: "314, Varni plaza, Mota Varachha, Surat, Gujarat-394101",
      mapLink: "https://maps.app.goo.gl/841dW39uT8uu5bZbA",
    },
    {
      name: "Jaipur Branch",
      address:
        "ABS PLAZA, 3rd Floor, Mahal Rd, Chankyapuri, Vigyan Nagar, Jagatpura, Jaipur, Rajasthan-302025",
      mapLink: "https://maps.app.goo.gl/y9YtKaHzUit15jpn9",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-gold via-gold-400 to-gold-500 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl  mb-6">
              Stay Connected <span className="text-white">With Us</span>
            </h1>
            <p className="text-lg text-slate-700">
              Need help? We're here. We are available 24*7 to help you out.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="font-heading font-semibold text-2xl  mb-6">
                  Send us a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-xl  mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600">
                      We'll get back to you soon.
                    </p>
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
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Mobile No
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) =>
                          setFormData({ ...formData, mobile: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-gold  font-semibold hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
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

            {/* Contact Info */}
            <div
              className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              {/* Quick Contact */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="font-heading font-semibold text-xl mb-6">
                  Quick Contact
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:contact@elitesecom.ai"
                    className="
        flex items-center gap-4
        p-4 rounded-xl
        bg-slate-50
        hover:bg-gold-50
        transition-all duration-300
        group
      "
                  >
                    <div
                      className="
          w-12 h-12
          rounded-xl
          bg-gold-100
          flex items-center justify-center
          transition-all duration-300
          group-hover:bg-gold
          group-hover:scale-110
          group-hover:rotate-6
        "
                    >
                      <Mail
                        className="
            w-6 h-6
            text-gold
            transition-all duration-300
            group-hover:text-white
          "
                      />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="font-medium">contact@elitesecom.ai</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919403893414"
                    className="
        flex items-center gap-4
        p-4 rounded-xl
        bg-slate-50
        hover:bg-gold-50
        transition-all duration-300
        group
      "
                  >
                    <div
                      className="
          w-12 h-12
          rounded-xl
          bg-gold-100
          flex items-center justify-center
          transition-all duration-300
          group-hover:bg-gold
          group-hover:scale-110
          group-hover:rotate-6
        "
                    >
                      <Phone
                        className="
            w-6 h-6
            text-gold
            transition-all duration-300
            group-hover:text-white
          "
                      />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="font-medium">+91 94038 93414</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Our Offices */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="font-heading font-semibold text-xl mb-6">
                  Our Offices
                </h3>

                <div className="space-y-4">
                  {branches.map((branch) => (
                    <a
                      key={branch.name}
                      href={branch.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
          flex items-start gap-4
          p-4 rounded-xl
          bg-slate-50
          hover:bg-gold-50
          transition-all duration-300
          group
        "
                    >
                      <div
                        className="
            w-12 h-12
            rounded-xl
            bg-gold-100
            flex items-center justify-center
            flex-shrink-0
            transition-all duration-300
            group-hover:bg-gold
            group-hover:scale-110
            group-hover:rotate-6
          "
                      >
                        <MapPin
                          className="
              w-6 h-6
              text-gold
              transition-all duration-300
              group-hover:text-white
            "
                        />
                      </div>

                      <div>
                        <p className="font-medium">{branch.name}</p>

                        <p className="text-sm text-slate-600 mt-1">
                          {branch.address}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-gold to-gold-500 rounded-3xl p-8 text-center">
                <h3 className="font-heading font-semibold text-xl  mb-3">
                  Request a Demo
                </h3>
                <p className="text-slate-700 mb-4">
                  See ElitesEcom in action with a personalized demo
                </p>
                <button
                  onClick={() => onNavigate("demo")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
                >
                  Book Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
