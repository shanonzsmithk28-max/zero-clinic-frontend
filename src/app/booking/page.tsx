"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "@/i18n/provider";
import { SITE_CONFIG } from "@/lib/config";

export default function BookingPage() {
  const t = useTranslations("bookingPage");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert(t("form.errorSubmit"));
      }
    } catch {
      alert(t("form.errorNetwork"));
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <section className="pt-24 pb-16">
          <div className="container-custom max-w-lg text-center">
            <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-7 h-7 text-teal-600" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-3">
              {t("successTitle")}
            </h1>
            <p className="text-slate-600 leading-relaxed mb-8">
              {t("successDesc")}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
            >
              {t("successReturn")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

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
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t("form.name")} <span className="text-red-500">{t("form.required")}</span>
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                      placeholder={t("form.namePlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t("form.nationality")} <span className="text-red-500">{t("form.required")}</span>
                    </label>
                    <input
                      name="nationality"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                      placeholder={t("form.nationalityPlaceholder")}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t("form.email")} <span className="text-red-500">{t("form.required")}</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                      placeholder={t("form.emailPlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t("form.phone")} <span className="text-red-500">{t("form.required")}</span>
                    </label>
                    <input
                      name="phone"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                      placeholder={t("form.phonePlaceholder")}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t("form.hospital")}
                    </label>
                    <select
                      name="hospital"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                    >
                      <option value="">{t("form.hospitalPlaceholder")}</option>
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <option key={i} value={t(`form.hospitalOptions.${i}`)}>
                          {t(`form.hospitalOptions.${i}`)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t("form.department")}
                    </label>
                    <input
                      name="department"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                      placeholder={t("form.departmentPlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    {t("form.symptom")} <span className="text-red-500">{t("form.required")}</span>
                  </label>
                  <textarea
                    name="symptom"
                    required
                    rows={4}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 resize-none"
                    placeholder={t("form.symptomPlaceholder")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    {t("form.date")}
                  </label>
                  <input
                    name="preferredDate"
                    type="date"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    {t("form.notes")}
                  </label>
                  <textarea
                    name="notes"
                    rows={2}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 resize-none"
                    placeholder={t("form.notesPlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-medium px-8 py-3 rounded-full hover:bg-teal-700 transition-colors shadow-sm disabled:opacity-60"
                >
                  {loading ? t("form.submitting") : t("form.submit")}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="p-6 rounded-xl border border-slate-100 bg-slate-50/50">
                <h3 className="text-base font-semibold text-slate-900 mb-4">
                  {t("sidebar.nextTitle")}
                </h3>
                <ol className="space-y-4 text-sm text-slate-600">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="shrink-0 w-5 h-5 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-xs font-medium">
                        {i + 1}
                      </span>
                      {t(`sidebar.steps.${i}`)}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-6 p-6 rounded-xl border border-slate-100 bg-slate-50/50">
                <h3 className="text-base font-semibold text-slate-900 mb-4">
                  {t("sidebar.contactTitle")}
                </h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-slate-400" />
                    {SITE_CONFIG.phone}
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-slate-400" />
                    {SITE_CONFIG.email}
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    {SITE_CONFIG.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
