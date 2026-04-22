export type Locale = "en" | "zh" | "ja" | "ko";

export const locales: Locale[] = ["en", "zh", "ja", "ko"];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  ja: "日本語",
  ko: "한国어",
};
