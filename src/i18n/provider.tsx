"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { Locale, defaultLocale, locales } from "./config";

const COOKIE_NAME = "leadclinic-locale";

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

function setCookie(name: string, value: string, days = 365) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const cookie = getCookie(COOKIE_NAME);
  if (cookie && locales.includes(cookie as Locale)) return cookie as Locale;
  const browser = navigator.language.slice(0, 2) as Locale;
  if (locales.includes(browser)) return browser;
  return defaultLocale;
}

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Record<string, unknown>;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

function getNestedValue(obj: Record<string, unknown>, key: string): string {
  const parts = key.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return key;
    }
  }
  return typeof current === "string" ? current : key;
}

export function I18nProvider({
  children,
  initialMessages,
}: {
  children: ReactNode;
  initialMessages: Record<string, unknown>;
}) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<Record<string, unknown>>(initialMessages);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialLocale();
    setLocaleState(initial);
    loadMessages(initial);
    setMounted(true);
  }, []);

  const loadMessages = async (locale: Locale) => {
    try {
      const res = await fetch(`/messages/${locale}.json`);
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      }
    } catch {
      // keep current messages
    }
  };

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    setCookie(COOKIE_NAME, newLocale);
    loadMessages(newLocale);
  }, []);

  const t = useCallback(
    (key: string) => getNestedValue(messages, key),
    [messages]
  );

  if (!mounted) {
    return (
      <I18nContext.Provider
        value={{
          locale: defaultLocale,
          setLocale: () => {},
          messages: initialMessages,
          t: (key: string) => getNestedValue(initialMessages, key),
        }}
      >
        {children}
      </I18nContext.Provider>
    );
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, messages, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslations(namespace?: string) {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslations must be used within I18nProvider");
  return (key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return ctx.t(fullKey);
  };
}

export function useLocale() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLocale must be used within I18nProvider");
  return { locale: ctx.locale, setLocale: ctx.setLocale };
}
