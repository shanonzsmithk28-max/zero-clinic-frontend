import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

const footerLinks = {
  Services: [
    { href: "/services", label: "Hospital Matching" },
    { href: "/services", label: "Medical Translation" },
    { href: "/services", label: "Full-Care Companionship" },
    { href: "/services", label: "Record Translation" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/hospitals", label: "Partner Hospitals" },
    { href: "/booking", label: "Contact" },
  ],
};

export default function Footer() {
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
              Professional medical concierge for international patients seeking care at Shanghai's top hospitals.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>{SITE_CONFIG.phone}</li>
              <li>{SITE_CONFIG.email}</li>
              <li>WeChat: {SITE_CONFIG.wechat}</li>
              <li>{SITE_CONFIG.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2026 {SITE_CONFIG.nameEn}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Shanghai International Medical Concierge
          </p>
        </div>
      </div>
    </footer>
  );
}
