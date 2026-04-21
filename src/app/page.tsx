import Link from "next/link";
import {
  Stethoscope,
  Languages,
  HeartHandshake,
  FileText,
  Plane,
  Pill,
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe,
  Shield,
  ChevronRight,
} from "lucide-react";

const painPoints = [
  {
    title: "Need a second opinion from Shanghai's top specialists?",
    desc: "Get expert MDT consultations without traveling first. We connect you with physicians whose expertise matches your specific condition.",
  },
  {
    title: "Worried about language barriers at Chinese hospitals?",
    desc: "Our medical translators ensure clear communication between you and your doctors at every step of your treatment journey.",
  },
  {
    title: "Don't know which hospital is right for your condition?",
    desc: "Different conditions need different experts. We analyze your case and match you with the best hospital and specialist in Shanghai.",
  },
  {
    title: "Ready to come to Shanghai but don't know where to start?",
    desc: "We design your full medical journey before you board the plane -- appointments, accommodation, transport, and everything in between.",
  },
];

const services = [
  {
    icon: Stethoscope,
    title: "Hospital Matching & Booking",
    desc: "We match your condition with the best specialist and hospital, and handle all appointment scheduling.",
  },
  {
    icon: Languages,
    title: "Medical Translation",
    desc: "Professional interpreters fluent in medical terminology across Chinese, English, Japanese, Korean, and more.",
  },
  {
    icon: HeartHandshake,
    title: "Full-Care Companionship",
    desc: "From airport pickup to discharge, a dedicated coordinator stays with you through every hospital visit.",
  },
  {
    icon: FileText,
    title: "Record Translation",
    desc: "Accurate translation of medical reports, imaging studies, and prescriptions for continuity of care.",
  },
  {
    icon: Plane,
    title: "Travel & Accommodation",
    desc: "We arrange hospital-proximate hotels, airport transfers, and local transportation for your stay.",
  },
  {
    icon: Pill,
    title: "Medication Support",
    desc: "Assistance with prescription fulfillment and international shipping of medications post-treatment.",
  },
];

const hospitals = [
  { name: "Huashan Hospital", specialty: "Neurosurgery & Dermatology", zh: "华山医院" },
  { name: "Zhongshan Hospital", specialty: "Cardiology & Hepatology", zh: "中山医院" },
  { name: "Ruijin Hospital", specialty: "Endocrinology & Cardiology", zh: "瑞金医院" },
  { name: "Renji Hospital", specialty: "Gastroenterology & OB/GYN", zh: "仁济医院" },
  { name: "Shanghai Sixth People's", specialty: "Orthopedics & Sports Medicine", zh: "第六人民医院" },
  { name: "Fudan Cancer Hospital", specialty: "Oncology & Radiotherapy", zh: "肿瘤医院" },
];

const steps = [
  {
    num: "01",
    title: "Talk to Our Team",
    items: [
      "Share your medical history and goals",
      "We explain your options and answer questions",
      "No commitment required",
    ],
  },
  {
    num: "02",
    title: "Custom Plan Design",
    items: [
      "We select the best hospitals and doctors for your case",
      "Design your full itinerary",
      "You approve everything before booking",
    ],
  },
  {
    num: "03",
    title: "Your Experience in Shanghai",
    items: [
      "Airport pickup on arrival",
      "English-speaking coordinator every step",
      "All appointments and logistics arranged",
    ],
  },
  {
    num: "04",
    title: "Ongoing Support",
    items: [
      "Take-home treatment summaries",
      "Follow-up check-ins",
      "Easy to return for further care",
    ],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="container-custom pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-medium mb-6 border border-teal-100">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
              Based in Jing'an, Shanghai · Serving Patients Worldwide
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Medical Care in Shanghai,{" "}
              <span className="text-teal-600">Guided by Experts</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
              ZeroClinic helps international patients access Shanghai's top-tier hospitals —
              with full English-supported coordination from first contact to follow-up care.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 bg-teal-600 text-white font-medium px-7 py-3 rounded-full hover:bg-teal-700 transition-colors shadow-sm"
              >
                Talk to Our Care Team
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-slate-700 font-medium px-7 py-3 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                Explore Services
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                10+ Partner Hospitals
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                6 Languages Supported
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                Transparent Pricing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PAIN POINTS ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-12 text-center">
            Is This You?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {painPoints.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-teal-200 hover:bg-teal-50/30 transition-colors"
              >
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-slate-600 leading-relaxed">
              End-to-end medical concierge covering every step of your healthcare journey in Shanghai.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div
                key={i}
                className="group p-6 bg-white rounded-xl border border-slate-100 hover:border-teal-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                  <service.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
            >
              View all services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== HOSPITALS ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Partner Hospitals
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Deep partnerships with Shanghai's leading tertiary hospitals across every major specialty.
              </p>
            </div>
            <Link
              href="/hospitals"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors shrink-0"
            >
              View all hospitals
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hospitals.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 hover:border-teal-200 hover:shadow-sm transition-all bg-slate-50/50"
              >
                <div className="w-2 h-2 mt-2 rounded-full bg-teal-500 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {h.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{h.zh}</p>
                  <p className="text-xs text-slate-600 mt-1">{h.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY US ========== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-12 text-center">
            Why Patients Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Clock className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Appointments in Days, Not Months
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We leverage hospital partnerships to secure specialist appointments within days.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Globe className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                No Language Barriers
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Medical records translation, real-time interpretation, and English reports throughout.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Shield className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Transparent & Trustworthy
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear pricing with no hidden fees. You approve every step before booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-12 text-center">
            Your Journey With Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <span className="text-4xl font-bold text-slate-100 select-none">
                  {step.num}
                </span>
                <h3 className="text-base font-semibold text-slate-900 mt-2 mb-3">
                  {step.title}
                </h3>
                <ul className="space-y-1.5">
                  {step.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-sm text-slate-600 flex items-start gap-2"
                    >
                      <span className="text-teal-500 mt-1">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-20 lg:py-24 bg-slate-900">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to start your medical journey in Shanghai?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Every great outcome starts with a conversation. Share your situation with our care team -- no commitment, just honest guidance.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-teal-600 text-white font-medium px-8 py-3.5 rounded-full hover:bg-teal-500 transition-colors shadow-lg shadow-teal-900/50"
          >
            Talk to Our Care Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
