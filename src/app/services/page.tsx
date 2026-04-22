"use client";

import Link from "next/link";
import { useTranslations } from "@/i18n/provider";
import {
  Stethoscope,
  Languages,
  HeartHandshake,
  FileText,
  Plane,
  Pill,
  ArrowRight,
} from "lucide-react";

const serviceIcons = [
  Stethoscope,
  Languages,
  HeartHandshake,
  FileText,
  Plane,
  Pill,
];

export default function ServicesPage() {
  const t = useTranslations("servicesPage");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 pt-20 pb-16">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const Icon = serviceIcons[i];
              return (
                <div
                  key={i}
                  className="p-8 rounded-xl border border-slate-100 bg-white hover:border-teal-200 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-3">
                    {t(`items.${i}.title`)}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {t(`items.${i}.desc`)}
                  </p>
                  <ul className="space-y-2">
                    {[0, 1, 2, 3].map((j) => (
                      <li
                        key={j}
                        className="text-sm text-slate-600 flex items-start gap-2"
                      >
                        <span className="text-teal-500 mt-1">-</span>
                        {t(`items.${i}.features.${j}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-slate-600 mb-8">
            {t("ctaDesc")}
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-teal-600 text-white font-medium px-7 py-3 rounded-full hover:bg-teal-700 transition-colors shadow-sm"
          >
            {t("ctaButton")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
