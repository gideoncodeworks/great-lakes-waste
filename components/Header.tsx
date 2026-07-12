"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { label: "Service", href: "/#service" },
  { label: "Sizes", href: "/#sizes" },
  { label: "Coverage", href: "/#coverage" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "header-scrolled text-white" : "header-over-hero"
      }`}
    >
      <div className="container-max flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className={scrolled ? "" : "invert-on-dark"}>
            <Image
              src="/images/logo-noknockout.png"
              alt="Great Lakes Waste"
              width={280}
              height={70}
              className="h-11 w-auto"
              priority
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="eyebrow hover:opacity-70 transition-opacity"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:8003680836" className="flex items-center gap-2 eyebrow hover:opacity-70 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            (800) 368-0836
          </a>
          <Link href="/quote" className="btn-primary">
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden surface-black py-6 border-t border-white/10">
          <div className="container-max flex flex-col gap-5">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="eyebrow-lg text-white">
                {n.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-4">
              <a href="tel:8003680836" className="eyebrow-lg text-gold flex items-center gap-2">
                <Phone className="h-4 w-4" /> (800) 368-0836
              </a>
              <Link href="/quote" className="btn-primary self-start" onClick={() => setOpen(false)}>
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
