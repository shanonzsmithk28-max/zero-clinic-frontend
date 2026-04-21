"use client";

import { useState } from "react";
import { Search, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const allHospitals = [
  {
    name: "Fudan Huashan Hospital",
    zh: "\u534e\u5c71\u533b\u9662",
    level: "Tertiary A",
    tags: ["Neurosurgery", "Dermatology", "Orthopedics", "Rehabilitation"],
    address: "12 Wulumuqi Middle Road, Jing'an District",
    desc: "Ranked among China's top hospitals for neurosurgery and dermatology. A leading authority in nervous system diseases.",
  },
  {
    name: "Fudan Zhongshan Hospital",
    zh: "\u4e2d\u5c71\u533b\u9662",
    level: "Tertiary A",
    tags: ["Cardiology", "Hepatobiliary Surgery", "Gastroenterology", "Respiratory"],
    address: "180 Fenglin Road, Xuhui District",
    desc: "One of China's premier comprehensive hospitals, with top-ranked cardiology and hepatobiliary surgery departments.",
  },
  {
    name: "SJTU Ruijin Hospital",
    zh: "\u745e\u91d1\u533b\u9662",
    level: "Tertiary A",
    tags: ["Endocrinology", "Cardiology", "Burns", "Hematology"],
    address: "197 Ruijin Second Road, Huangpu District",
    desc: "A historic hospital with world-class endocrinology and hematology departments. Pioneers in diabetes research.",
  },
  {
    name: "SJTU Renji Hospital",
    zh: "\u4ec1\u6d4e\u533b\u9662",
    level: "Tertiary A",
    tags: ["Gastroenterology", "OB/GYN", "Pediatrics", "Urology"],
    address: "145 Shandong Middle Road, Huangpu District",
    desc: "One of China's oldest Western medicine hospitals, renowned for gastroenterology and maternal care.",
  },
  {
    name: "Shanghai Sixth People's Hospital",
    zh: "\u7b2c\u516d\u4eba\u6c11\u533b\u9662",
    level: "Tertiary A",
    tags: ["Orthopedics", "Sports Medicine", "Endocrinology"],
    address: "600 Yishan Road, Xuhui District",
    desc: "Nationally recognized center for orthopedic surgery and sports medicine. Home to China's first orthopedic institute.",
  },
  {
    name: "Fudan Cancer Hospital",
    zh: "\u80bf\u7624\u533b\u9662",
    level: "Tertiary A",
    tags: ["Oncology", "Radiotherapy", "Surgical Oncology", "TCM Oncology"],
    address: "270 Dong'an Road, Xuhui District",
    desc: "One of China's top cancer centers, offering comprehensive oncology care from diagnosis to rehabilitation.",
  },
];

export default function HospitalsPage() {
  const [query, setQuery] = useState("");
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
            Partner Hospitals
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            We partner with Shanghai's leading tertiary hospitals to ensure you receive the best possible care.
          </p>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by hospital or specialty..."
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
                    {h.level}
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
              No hospitals match your search.
            </p>
          )}
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Need help choosing a hospital?
          </h2>
          <p className="text-slate-600 mb-8">
            Tell us about your condition and we'll recommend the best hospital and specialist for your case.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-teal-600 text-white font-medium px-7 py-3 rounded-full hover:bg-teal-700 transition-colors shadow-sm"
          >
            Get a Free Recommendation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
