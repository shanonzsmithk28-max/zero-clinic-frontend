"use client";

import { Globe } from "lucide-react";
import { useLocale } from "@/i18n/provider";
import { locales, localeLabels, type Locale } from "@/i18n/config";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="relative group">
      <button
        type="button"
        className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline font-medium">
          {localeLabels[locale]}
        </span>
      </button>
      <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-lg shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        <div className="py-1">
          {locales.map((l: Locale) => (
            <button
              key={l}
              type="button"
              onClick={() => setLocale(l)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                l === locale
                  ? "text-teal-700 bg-teal-50 font-medium"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {localeLabels[l]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
