"use client";

import Link from "next/link";
import { useTranslations } from "@/i18n/provider";
import { SITE_CONFIG } from "@/lib/config";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LC</span>
              </div>
              <span className="text-lg font-semibold text-white tracking-tight">
                {SITE_CONFIG.nameEn}
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              {t("footer.brandDesc")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors">
                  {t("services.items.0.title")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors">
                  {t("services.items.1.title")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors">
                  {t("services.items.2.title")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors">
                  {t("services.items.3.title")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/hospitals" className="text-sm hover:text-white transition-colors">
                  {t("nav.hospitals")}
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-sm hover:text-white transition-colors">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>{SITE_CONFIG.phone}</li>
              <li>{SITE_CONFIG.email}</li>
              <li>{t("footer.wechat")}: {SITE_CONFIG.wechat}</li>
              <li>{SITE_CONFIG.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2026 {SITE_CONFIG.nameEn}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
