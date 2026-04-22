"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, Users, Globe } from "lucide-react";
import { useTranslations } from "@/i18n/provider";

const cardIcons = [Heart, Users, Globe];

export default function AboutPage() {
  const t = useTranslations("aboutPage");

  return (
    <div className="min-h-screen bg-white">
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

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t("missionTitle")}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {t("missionP1")}
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                {t("missionP2")}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  {t("badge1")}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  {t("badge2")}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  {t("badge3")}
                </span>
              </div>
            </div>
            <div className="space-y-5">
              {[0, 1, 2].map((i) => {
                const Icon = cardIcons[i];
                return (
                  <div
                    key={i}
                    className="p-6 rounded-xl border border-slate-100 bg-slate-50/50"
                  >
                    <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      {t(`cards.${i}.title`)}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t(`cards.${i}.desc`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
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
