"use client";

import { useState } from "react";
import { Search, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/i18n/provider";

export default function HospitalsPage() {
  const t = useTranslations("hospitalsPage");
  const [query, setQuery] = useState("");

  const allHospitals = [0, 1, 2, 3, 4, 5].map((i) => ({
    name: t(`items.${i}.name`),
    zh: t(`items.${i}.zh`),
    desc: t(`items.${i}.desc`),
    address: t(`items.${i}.address`),
    tags: [0, 1, 2, 3].map((j) => t(`items.${i}.tags.${j}`)).filter(Boolean),
  }));

  const filtered = allHospitals.filter(
    (h) =>
      h.name.toLowerCase().includes(query.toLowerCase()) ||
      h.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-50 pt-20 pb-16">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {t("subtitle")}
          </p>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((h, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-slate-100 bg-white hover:border-teal-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {h.name}
                    </h3>
                    <p className="text-xs text-slate-500">{h.zh}</p>
                  </div>
                  <span className="shrink-0 text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full font-medium">
                    {t("level")}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {h.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {h.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-start gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  {h.address}
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-12">
              {t("noResults")}
            </p>
          )}
        </div>
      </section>

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
