"use client";

import Link from "next/link";
import {
  Stethoscope,
  Languages,
  HeartHandshake,
  FileText,
  Plane,
  Pill,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Hospital Matching & Booking",
    desc: "We analyze your medical condition, preferences, and timeline to match you with the most suitable tertiary hospital and specialist in Shanghai. We handle all appointment scheduling, from initial consultations to surgery bookings.",
    features: [
      "Multi-hospital comparison reports",
      "Specialist profile analysis",
      "Appointment time coordination",
      "Treatment cost estimation",
    ],
  },
  {
    icon: Languages,
    title: "Medical Translation",
    desc: "Professional interpreters with medical backgrounds provide real-time translation in Chinese, English, Japanese, Korean, German, and French. We ensure nothing is lost in communication between you and your doctors.",
    features: [
      "Real-time clinic interpretation",
      "Medical record translation",
      "Surgery accompaniment",
      "Multi-language support",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Full-Care Companionship",
    desc: "From airport pickup to hospital discharge, a dedicated coordinator accompanies you throughout your entire medical journey in Shanghai. We handle logistics so you can focus on recovery.",
    features: [
      "Airport pickup & drop-off",
      "Hospital visit coordination",
      "Medication assistance",
      "24/7 emergency support",
    ],
  },
  {
    icon: FileText,
    title: "Medical Record Translation",
    desc: "Accurate translation of your medical history, diagnostic reports, imaging studies, and prescriptions. We ensure Chinese doctors have complete information and you understand every diagnosis.",
    features: [
      "Complete history translation",
      "Imaging report summaries",
      "Prescription explanations",
      "Personal medical档案 management",
    ],
  },
  {
    icon: Plane,
    title: "Travel & Accommodation",
    desc: "We arrange hotel bookings near your designated hospital, airport transfers, and local transportation. We also provide area guides for Jing'an District and surrounding neighborhoods.",
    features: [
      "Hospital-proximate hotels",
      "Airport transfer service",
      "Local transportation",
      "City & dining guides",
    ],
  },
  {
    icon: Pill,
    title: "Medication Support",
    desc: "Assistance with purchasing prescription medications and arranging international shipping so you can continue treatment after returning home.",
    features: [
      "Prescription fulfillment",
      "International shipping",
      "Dosage instructions",
      "Refill coordination",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 pt-20 pb-16">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            End-to-end medical concierge services designed for international patients seeking care at Shanghai's top hospitals.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-slate-100 bg-white hover:border-teal-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-5">
                  <service.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li
                      key={j}
                      className="text-sm text-slate-600 flex items-start gap-2"
                    >
                      <span className="text-teal-500 mt-1">-</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Not sure which services you need?
          </h2>
          <p className="text-slate-600 mb-8">
            Every patient is different. Talk to our care team and we'll design a plan tailored to your situation.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-teal-600 text-white font-medium px-7 py-3 rounded-full hover:bg-teal-700 transition-colors shadow-sm"
          >
            Talk to Our Care Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
