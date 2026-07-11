"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Great Lakes Waste"
                width={402}
                height={139}
                priority
                className="h-12 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#0a0a0a] rounded-lg hover:bg-slate-50 transition-all">
                Home
              </Link>
              <Link href="/#sizes" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#0a0a0a] rounded-lg hover:bg-slate-50 transition-all">
                Sizes &amp; Pricing
              </Link>
              <Link href="/quote" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#0a0a0a] rounded-lg hover:bg-slate-50 transition-all">
                Get a Quote
              </Link>
              <Link href="/faq" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#0a0a0a] rounded-lg hover:bg-slate-50 transition-all">
                FAQ
              </Link>
              <Link href="/about" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#0a0a0a] rounded-lg hover:bg-slate-50 transition-all">
                About
              </Link>
              <Link href="/contact" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#0a0a0a] rounded-lg hover:bg-slate-50 transition-all">
                Contact
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:8003680836" className="flex items-center gap-1.5 text-sm font-semibold text-[#0a0a0a] hover:text-[#1f1f1f] transition-colors">
                <Phone className="h-4 w-4" />
                (800) 368-0836
              </a>
              <Link
                href="/quote"
                className="btn-cta inline-flex items-center gap-2 bg-[#7a1e2e] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#5c1622] hover:text-white transition-colors"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex lg:hidden items-center gap-3">
              <a href="tel:8003680836" className="text-[#0a0a0a] p-2">
                <Phone className="h-5 w-5" />
              </a>
              <button
                className="text-slate-700 p-2 rounded-lg hover:bg-slate-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link href="/" className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/#sizes" className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>
              Sizes &amp; Pricing
            </Link>
            <Link href="/quote" className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>
              Get a Quote
            </Link>
            <Link href="/faq" className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </Link>
            <Link href="/about" className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>

            <div className="pt-3">
              <Link
                href="/quote"
                className="block text-center bg-[#7a1e2e] text-white font-bold px-6 py-3 rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
