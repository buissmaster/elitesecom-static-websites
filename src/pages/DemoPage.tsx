import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Check,
  Calendar as CalendarIcon,
  Clock,
  Video,
  Phone,
  Sparkles,
  Building2,
  User,
  Mail,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

interface DemoPageProps {
  onNavigate: (page: string) => void;
}

export function DemoPage({ onNavigate }: DemoPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  // Default calendar viewing state set to June 2026 as seen in image_46593b.png
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(5); // 0-indexed, 5 = June

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    demoType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    demoType?: string;
    preferredTime?: string;
  }>({});

  const demoOptions = [
    {
      id: "video",
      title: "Video Call",
      subtitle: "Zoom / Google Meet",
      icon: Video,
    },
    {
      id: "phone",
      title: "Phone Call",
      subtitle: "We'll call you directly",
      icon: Phone,
    },
  ];

  const timeOptions = [
    {
      id: "morning",
      title: "Morning",
      subtitle: "9:30 AM - 12:30 PM",
      icon: "☀️",
    },
    {
      id: "afternoon",
      title: "Afternoon",
      subtitle: "2:00 PM - 6:00 PM",
      icon: "🌤️",
    },
  ];

  // Close custom calendar popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setShowDatePicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // Helper arrays for custom calendar rendering
  const monthsList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Generate date array for grid calculation
  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) =>
    new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);

  const calendarCells = [];
  // Fill empty leading padding blocks
  for (let i = 0; i < firstDayIndex; i++) {
    calendarCells.push(null);
  }
  // Fill regular numeric active dates
  for (let d = 1; d <= daysInMonth; d++) {
    calendarCells.push(d);
  }

  const handleDateSelect = (day: number) => {
    const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setFormData({ ...formData, preferredDate: formattedDate });
    setShowDatePicker(false);
  };

  const changeMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { demoType?: string; preferredTime?: string } = {};
    if (!formData.demoType) {
      newErrors.demoType = "Please choose how you'd like your demo.";
    }
    if (!formData.preferredTime) {
      newErrors.preferredTime = "Please select a time slot.";
    }

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      return;
    }

    console.log("Form data:", formData);
    const url =
      "https://krljwwj3qkhqmlq3aqw76xnttm0mcsgp.lambda-url.ap-south-1.on.aws/";
    const payload = { formData };
    try {
      setIsSubmitting(true);
      // const response = await fetch(url, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });
      if (true) {
        toast.success("Thank you! We'll get back to you shortly.");
        // setFormData({
        //   name: "",
        //   email: "",
        //   company: "",
        //   phone: "",
        //   preferredDate: "",
        //   preferredTime: "",
        //   demoType: "",
        //   message: "",
        // });
        setSubmitted(true);
      } else {
        toast.error(
          "There was an error submitting the form. Please try again.",
        );
      }
    } catch (error) {
      toast.error("There was an error submitting the form. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
      setFormErrors({});
    }
  };

  const benefits = [
    "Personalized walkthrough of ElitesEcom tailored to your stack",
    "See how we solve your explicit workflow challenges",
    "Direct Q&A session with our senior product architects",
    "Clear overview of custom enterprise pricing & implementation",
    "100% free with absolutely no commitment required",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-gold via-gold-400 to-gold-500 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20  text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 " />
              Free Personalized Demo
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl  mb-6">
              Book Your <span className="text-white">Personalized</span> Demo
            </h1>
            <p className="text-lg text-slate-700">
              See how ElitesEcom can help you grow your business in a profitable
              manner
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-14 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Column (Benefits) */}
            <div
              className={`lg:col-span-4 space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            >
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-1">
                  What You'll Get
                </h2>
                <p className="text-slate-500 text-xs">
                  Everything you need to evaluate if ElitesEcom fits your
                  structural needs.
                </p>
              </div>

              <div className="space-y-3">
                {benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-2.5 rounded-xl transition-colors hover:bg-slate-100/50"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                    </div>
                    <span className="text-slate-700 text-xs font-medium leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200/60 text-[11px] text-slate-500 flex gap-2.5 items-center">
                <span className="text-base">🔒</span>
                <span>
                  We value your privacy. Your information is completely secure
                  and confidential.
                </span>
              </div>
            </div>

            {/* Right Column (Form Layout Wrapper) */}
            <div
              className={`lg:col-span-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xl shadow-slate-100">
                {submitted ? (
                  <div className="text-center py-12 max-w-sm mx-auto">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5 shadow-sm">
                      <Check className="w-6 h-6 text-emerald-600 stroke-[2.5]" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Demo Slot Requested!
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6">
                      Thank you,{" "}
                      <span className="font-semibold text-slate-800">
                        {formData.name}
                      </span>
                      . Our team will reach out to confirm your slot soon.
                    </p>
                    <button
                      onClick={() => onNavigate("home")}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-md transition-all"
                    >
                      Back to Home Layout
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {Object.values(formErrors).some(Boolean) && (
                      <Alert
                        variant="destructive"
                        className="bg-rose-50/50 border-rose-200/80 text-rose-800 animate-in fade-in slide-in-from-top-2 duration-200"
                      >
                        <AlertCircle className="w-4 h-4 text-rose-600" />
                        <div>
                          <AlertTitle className="text-xs font-bold text-rose-900">
                            Incomplete Form
                          </AlertTitle>
                          <AlertDescription className="text-[11px] text-rose-700 font-medium">
                            Please choose how you'd like your demo and a time
                            slot before proceeding.
                          </AlertDescription>
                        </div>
                      </Alert>
                    )}
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                        Request Your Demo
                      </h2>
                      <p className="text-[11px] text-slate-400">
                        Fields marked with{" "}
                        <span className="text-rose-500">*</span> are strictly
                        required.
                      </p>
                    </div>

                    {/* Contact Rows */}
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              className="w-full pl-9 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                            Work Email *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                              className="w-full pl-9 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all"
                              placeholder="you@company.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                            Company / Organization
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  company: e.target.value,
                                })
                              }
                              className="w-full pl-9 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all"
                              placeholder="Acme Enterprise"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="w-full px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>
                    </div>

                    <hr className="border-slate-100" />

                    {/* Format Selector Row */}
                    <div>
                      <label className="flex items-center justify-between text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">
                        <span>How would you like your demo? *</span>
                        {formErrors.demoType && (
                          <span className="text-rose-500 normal-case font-semibold animate-pulse">
                            {formErrors.demoType}
                          </span>
                        )}
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {demoOptions.map((option) => {
                          const Icon = option.icon;
                          const isSelected = formData.demoType === option.id;
                          return (
                            <button
                              key={option.id}
                              type="button"
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  demoType: option.id,
                                });
                                setFormErrors((prev) => ({
                                  ...prev,
                                  demoType: undefined,
                                }));
                              }}
                              className={`group text-left p-3.5 rounded-xl border transition-all ${isSelected ? "border-amber-500 bg-amber-50/40 ring-2 ring-amber-500/10" : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"}`}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${isSelected ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"}`}
                                >
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-xs font-bold text-slate-900">
                                    {option.title}
                                  </h4>
                                  <p className="text-[11px] text-slate-500 truncate">
                                    {option.subtitle}
                                  </p>
                                </div>
                                {isSelected && (
                                  <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center">
                                    <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                                  </div>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <hr className="border-slate-100" />

                    {/* Scheduling Blocks Group */}
                    <div className="space-y-4">
                      {/* Fully Custom Date Picker Element */}
                      <div className="relative" ref={datePickerRef}>
                        <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                          <CalendarIcon className="w-3.5 h-3.5 inline mr-1 text-slate-400 -mt-0.5" />
                          Preferred Date *
                        </label>

                        <button
                          type="button"
                          onClick={() => setShowDatePicker(!showDatePicker)}
                          className="w-full text-left px-4 py-2.5 text-xs text-slate-800 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 ring-offset-white focus:ring-4 focus:ring-amber-500/10 outline-none transition-all flex justify-between items-center"
                        >
                          <span
                            className={
                              formData.preferredDate
                                ? "text-slate-800 font-medium"
                                : "text-slate-400"
                            }
                          >
                            {formData.preferredDate
                              ? formData.preferredDate
                              : "Select a preferred date..."}
                          </span>
                          <CalendarIcon className="w-4 h-4 text-slate-400" />
                        </button>

                        {/* Beautiful Custom Dropdown Layout */}
                        {showDatePicker && (
                          <div className="absolute left-0 mt-2 z-50 w-72 bg-white rounded-xl border border-slate-200 p-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-xs font-bold text-slate-800">
                                {monthsList[currentMonth]}, {currentYear}
                              </span>
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={() => changeMonth("prev")}
                                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-600"
                                >
                                  <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => changeMonth("next")}
                                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-600"
                                >
                                  <ChevronRight className="w-4 h-4" />
                                </button>
                              </div>
                            </div>

                            {/* Calendar Subheaders */}
                            <div className="grid grid-cols-7 text-center text-[10px] font-bold text-slate-400 uppercase mb-1">
                              {daysOfWeek.map((day) => (
                                <div key={day} className="py-1">
                                  {day}
                                </div>
                              ))}
                            </div>

                            {/* Main Days Grid */}
                            <div className="grid grid-cols-7 text-center gap-1">
                              {calendarCells.map((day, idx) => {
                                if (day === null)
                                  return <div key={`empty-${idx}`} />;

                                const formattedCellDate = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                                const isCurrentSelection =
                                  formData.preferredDate === formattedCellDate;

                                return (
                                  <button
                                    key={`day-${day}`}
                                    type="button"
                                    onClick={() => handleDateSelect(day)}
                                    className={`py-1.5 text-xs rounded-lg font-medium transition-all ${
                                      isCurrentSelection
                                        ? "bg-amber-500 text-white font-bold shadow-sm shadow-amber-500/20"
                                        : "text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                                    }`}
                                  >
                                    {day}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Time Window Row */}
                      <div>
                        <label className="flex items-center justify-between text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">
                          <span className="flex items-center">
                            <Clock className="w-3.5 h-3.5 inline mr-1 text-slate-400 -mt-0.5" />
                            Time of Day Window *
                          </span>
                          {formErrors.preferredTime && (
                            <span className="text-rose-500 normal-case font-semibold animate-pulse">
                              {formErrors.preferredTime}
                            </span>
                          )}
                        </label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {timeOptions.map((option) => {
                            const isSelected =
                              formData.preferredTime === option.id;
                            return (
                              <button
                                key={option.id}
                                type="button"
                                onClick={() => {
                                  setFormData({
                                    ...formData,
                                    preferredTime: option.id,
                                  });
                                  setFormErrors((prev) => ({
                                    ...prev,
                                    preferredTime: undefined,
                                  }));
                                }}
                                className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${isSelected ? "border-amber-500 bg-amber-50/40" : "border-slate-200 hover:bg-slate-50"}`}
                              >
                                <div className="flex items-center gap-2.5">
                                  <span className="text-sm leading-none">
                                    {option.icon}
                                  </span>
                                  <div>
                                    <span className="text-xs font-bold text-slate-900 block">
                                      {option.title}
                                    </span>
                                    <span className="text-[10px] text-slate-500">
                                      {option.subtitle}
                                    </span>
                                  </div>
                                </div>
                                <div
                                  className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${isSelected ? "border-amber-500 bg-amber-500" : "border-slate-300"}`}
                                >
                                  {isSelected && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Requirements Panel */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Specific Requirements / Context
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all resize-none"
                        placeholder="Tell us about your requirements or explicit features you want explored..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-gold  font-semibold hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Request Demo
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
