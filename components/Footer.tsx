"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const sizeLinks = [
  { name: "10 Yard", href: "/sizes/10-yard" },
  { name: "15 Yard", href: "/sizes/15-yard" },
  { name: "20 Yard", href: "/sizes/20-yard" },
  { name: "30 Yard", href: "/sizes/30-yard" },
  { name: "40 Yard", href: "/sizes/40-yard" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="h-1 bg-gradient-to-r from-[#7a1e2e] via-[#7a1e2e] to-[#7a1e2e]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 bg-white rounded-xl p-3">
              <Image
                src="/images/logo.png"
                alt="Great Lakes Waste"
                width={402}
                height={139}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Roll-off dumpsters, permanent containers, and full waste management for Greater Cleveland &amp; the Midwest. Book online in two minutes or call for a custom quote.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin className="h-4 w-4 text-[#7a1e2e]" />
              <span>Greater Cleveland &middot; Midwest coverage</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">
              <Phone className="h-4 w-4 text-[#7a1e2e]" />
              <a href="tel:8003680836" className="hover:text-white transition-colors">
                (800) 368-0836 <span className="text-slate-500 text-xs">&middot; toll-free</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">
              <Phone className="h-4 w-4 text-[#7a1e2e]" />
              <a href="tel:8003680836" className="hover:text-white transition-colors">
                (800) 368-0836 <span className="text-slate-500 text-xs">&middot; local</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">
              <Mail className="h-4 w-4 text-[#7a1e2e]" />
              <a href="mailto:sales@wasteohio.com" className="hover:text-white transition-colors">
                sales@wasteohio.com
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7a1e2e] mb-5">Dumpster Sizes</h3>
            <ul className="space-y-3">
              {sizeLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                    {s.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7a1e2e] mb-5">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/faq" className="text-slate-400 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/service-areas" className="text-slate-400 hover:text-white transition-colors text-sm">Service Areas</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7a1e2e] mb-5">Book Now</h3>
            <p className="text-slate-400 text-sm mb-5">
              Need a dumpster tomorrow? Book online in under two minutes &mdash; no calls, no back-and-forth.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-[#7a1e2e] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#5c1622] hover:text-white transition-colors"
            >
              Get a Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Great Lakes Waste. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Website by{" "}
            <a href="https://gideoncode.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7a1e2e] transition-colors">
              Gideon Codeworks
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
