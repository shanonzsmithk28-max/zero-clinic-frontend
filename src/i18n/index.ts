"use server";

import { readFileSync } from "fs";
import { join } from "path";
import { Locale, defaultLocale } from "./config";

const messagesDir = join(process.cwd(), "messages");

export async function getMessages(locale: Locale) {
  try {
    const path = join(messagesDir, `${locale}.json`);
    return JSON.parse(readFileSync(path, "utf-8"));
  } catch {
    const fallback = join(messagesDir, `${defaultLocale}.json`);
    return JSON.parse(readFileSync(fallback, "utf-8"));
  }
}
