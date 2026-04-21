import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d9488",
};

export const metadata: Metadata = {
  title: {
    default: "零诊服 ZeroClinic | 专业国际医疗导诊服务",
    template: "%s | 零诊服 ZeroClinic",
  },
  description:
    "为海外患者提供上海三甲医院就医导诊、专家预约、翻译陪诊等一站式服务。常驻静安区，覆盖华山、中山、瑞金等顶级医疗资源。",
  keywords: [
    "上海医疗旅游",
    "中国看病",
    "国际医疗导诊",
    "三甲医院预约",
    "医疗翻译",
    "陪诊服务",
    "海外患者来华就医",
    "medical tourism China",
    "Shanghai hospital guide",
    "international patient service",
  ],
  authors: [{ name: "ZeroClinic" }],
  creator: "ZeroClinic",
  publisher: "ZeroClinic",
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
    locale: "zh_CN",
    url: "https://drcnhelp.com",
    siteName: "零诊服 ZeroClinic",
    title: "零诊服 ZeroClinic | 专业国际医疗导诊服务",
    description:
      "为海外患者提供上海三甲医院就医导诊、专家预约、翻译陪诊等一站式服务。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "零诊服 ZeroClinic 国际医疗导诊服务",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "零诊服 ZeroClinic | 专业国际医疗导诊服务",
    description:
      "为海外患者提供上海三甲医院就医导诊、专家预约、翻译陪诊等一站式服务。",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://drcnhelp.com"),
  alternates: {
    canonical: "https://drcnhelp.com",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
