import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { I18nProvider } from "@/i18n/provider";
import { getMessages } from "@/i18n";
import { defaultLocale } from "@/i18n/config";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d9488",
};

export const metadata: Metadata = {
  title: {
    default: "LeadClinic | Professional International Medical Concierge in Shanghai",
    template: "%s | LeadClinic",
  },
  description:
    "LeadClinic helps international patients access Shanghai's top-tier hospitals with full English-supported coordination. Based in Jing'an District, covering Huashan, Zhongshan, Ruijin, and Renji hospitals.",
  keywords: [
    "Shanghai medical tourism",
    "China hospital guide",
    "international medical concierge",
    "tertiary hospital booking",
    "medical translation Shanghai",
    "patient escort service",
    "overseas patient China",
    "medical tourism China",
    "Shanghai hospital guide",
    "international patient service",
  ],
  authors: [{ name: "LeadClinic" }],
  creator: "LeadClinic",
  publisher: "LeadClinic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drcnhelp.com",
    siteName: "LeadClinic",
    title: "LeadClinic | Professional International Medical Concierge in Shanghai",
    description:
      "LeadClinic helps international patients access Shanghai's top-tier hospitals with full English-supported coordination.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LeadClinic - International Medical Concierge Service in Shanghai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadClinic | Professional International Medical Concierge in Shanghai",
    description:
      "LeadClinic helps international patients access Shanghai's top-tier hospitals with full English-supported coordination.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://drcnhelp.com"),
  alternates: {
    canonical: "https://drcnhelp.com",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages(defaultLocale);

  return (
    <html lang={defaultLocale}>
      <body className="antialiased min-h-screen bg-slate-50" suppressHydrationWarning>
        {GA_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga-config"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html:
                  `window.dataLayer=window.dataLayer||[];` +
                  `function gtag(){dataLayer.push(arguments);}` +
                  `gtag('js',new Date());` +
                  `gtag('config','${GA_ID}',{page_title:document.title,send_page_view:true});`,
              }}
            />
          </>
        )}
        <I18nProvider initialMessages={messages}>
          <Navbar />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
