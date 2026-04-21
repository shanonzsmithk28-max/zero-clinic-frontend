import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/hospitals", label: "Hospitals" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LC</span>
            </div>
            <span className="text-lg font-semibold text-slate-900 tracking-tight">
              {SITE_CONFIG.nameEn}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center bg-teal-600 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-teal-700 transition-colors shadow-sm"
            >
              Talk to Our Team
            </Link>
          </div>

          {/* Mobile Menu - Pure HTML/CSS with details element */}
          <details className="md:hidden group">
            <summary className="list-none p-2 text-slate-600 cursor-pointer">
              <Menu className="w-5 h-5 group-open:hidden" />
              <X className="w-5 h-5 hidden group-open:block" />
            </summary>
            <div className="absolute top-full left-0 right-0 border-t border-slate-100 bg-white shadow-lg">
              <div className="container-custom py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link
                    href="/booking"
                    className="block w-full text-center bg-teal-600 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-teal-700 transition-colors"
                  >
                    Talk to Our Team
                  </Link>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
