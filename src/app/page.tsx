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
  CheckCircle2,
  Clock,
  Globe,
  Shield,
  ChevronRight,
} from "lucide-react";

const serviceIcons = [
  Stethoscope,
  Languages,
  HeartHandshake,
  FileText,
  Plane,
  Pill,
];

const whyIcons = [Clock, Globe, Shield];

const hospitals = [
  { name: "Huashan Hospital", specialty: "Neurosurgery & Dermatology", zh: "Huashan" },
  { name: "Zhongshan Hospital", specialty: "Cardiology & Hepatology", zh: "Zhongshan" },
  { name: "Ruijin Hospital", specialty: "Endocrinology & Cardiology", zh: "Ruijin" },
  { name: "Renji Hospital", specialty: "Gastroenterology & OB/GYN", zh: "Renji" },
  { name: "Shanghai Sixth People's", specialty: "Orthopedics & Sports Medicine", zh: "Sixth People's" },
  { name: "Fudan Cancer Hospital", specialty: "Oncology & Radiotherapy", zh: "Cancer Hospital" },
];

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-white">
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="container-custom pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-medium mb-6 border border-teal-100">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
              {t("hero.badge")}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              {t("hero.title")}{" "}
              <span className="text-teal-600">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 bg-teal-600 text-white font-medium px-7 py-3 rounded-full hover:bg-teal-700 transition-colors shadow-sm"
              >
                {t("hero.primaryCta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-slate-700 font-medium px-7 py-3 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                {t("hero.secondaryCta")}
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                {t("hero.stats1")}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                {t("hero.stats2")}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                {t("hero.stats3")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PAIN POINTS ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-12 text-center">
            {t("painPoints.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-teal-200 hover:bg-teal-50/30 transition-colors"
              >
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {t(`painPoints.items.${i}.title`)}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t(`painPoints.items.${i}.desc`)}
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
              {t("services.title")}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t("services.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const Icon = serviceIcons[i];
              return (
                <div
                  key={i}
                  className="group p-6 bg-white rounded-xl border border-slate-100 hover:border-teal-200 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {t(`services.items.${i}.title`)}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t(`services.items.${i}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
            >
              {t("services.viewAll")}
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
                {t("hospitals.title")}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {t("hospitals.description")}
              </p>
            </div>
            <Link
              href="/hospitals"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors shrink-0"
            >
              {t("hospitals.viewAll")}
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
            {t("whyUs.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[0, 1, 2].map((i) => {
              const Icon = whyIcons[i];
              return (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {t(`whyUs.items.${i}.title`)}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t(`whyUs.items.${i}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-12 text-center">
            {t("process.title")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="relative">
                <span className="text-4xl font-bold text-slate-100 select-none">
                  {t(`process.steps.${i}.num`)}
                </span>
                <h3 className="text-base font-semibold text-slate-900 mt-2 mb-3">
                  {t(`process.steps.${i}.title`)}
                </h3>
                <ul className="space-y-1.5">
                  {[0, 1, 2].map((j) => (
                    <li
                      key={j}
                      className="text-sm text-slate-600 flex items-start gap-2"
                    >
                      <span className="text-teal-500 mt-1">-</span>
                      {t(`process.steps.${i}.items.${j}`)}
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
            {t("cta.title")}
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            {t("cta.description")}
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-teal-600 text-white font-medium px-8 py-3.5 rounded-full hover:bg-teal-500 transition-colors shadow-lg shadow-teal-900/50"
          >
            {t("cta.button")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
