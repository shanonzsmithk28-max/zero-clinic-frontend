"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-50 pt-20 pb-16">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            About LeadClinic
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We bridge the gap between international patients and Shanghai's world-class healthcare system.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Our Mission
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                LeadClinic was founded on a simple belief: world-class medical care should be accessible to everyone, regardless of language or geography. Based in Shanghai's Jing'an District, we serve as the trusted guide for international patients navigating China's complex healthcare landscape.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We don't just book appointments -- we design complete medical journeys. From the moment you reach out to the day you return home, our team ensures every detail is handled with professionalism, empathy, and cultural sensitivity.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  Patient-first approach
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  Transparent pricing
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  English-speaking team
                </span>
              </div>
            </div>
            <div className="space-y-5">
              <div className="p-6 rounded-xl border border-slate-100 bg-slate-50/50">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  Patient-Centered Care
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every patient receives a personalized plan designed around their unique medical needs, cultural preferences, and budget.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-slate-100 bg-slate-50/50">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  Expert Team
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our coordinators include medical professionals and certified translators who understand both Eastern and Western healthcare systems.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-slate-100 bg-slate-50/50">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  Global Reach
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We have served patients from over 20 countries, with services available in 6 languages and growing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to learn more?
          </h2>
          <p className="text-slate-600 mb-8">
            Have questions about our services or how we work? Our care team is here to help.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-teal-600 text-white font-medium px-7 py-3 rounded-full hover:bg-teal-700 transition-colors shadow-sm"
          >
            Contact Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
