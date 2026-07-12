import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="surface-black py-20 lg:py-24">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          <div className="lg:col-span-5">
            <div className="invert-on-dark mb-8">
              <Image
                src="/images/logo.png"
                alt="Great Lakes Waste"
                width={280}
                height={70}
                className="h-14 w-auto"
              />
            </div>
            <p className="body-lg text-white/70 max-w-md mb-8">
              Family-owned rear-load waste service. Cleveland since 1994. Independent. Not affiliated with any national.
            </p>
            <Link href="/quote" className="btn-primary">
              Get a Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div>
              <p className="eyebrow text-gold mb-6">Sitemap</p>
              <ul className="space-y-4">
                {[
                  { l: "Home", h: "/" },
                  { l: "Sizes", h: "/#sizes" },
                  { l: "Coverage", h: "/#coverage" },
                  { l: "About", h: "/about" },
                  { l: "FAQ", h: "/faq" },
                  { l: "Contact", h: "/contact" },
                  { l: "Get a Quote", h: "/quote" },
                ].map((n) => (
                  <li key={n.h}>
                    <Link href={n.h} className="body-sm text-white/80 hover:text-white transition-colors">
                      {n.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-gold mb-6">Family</p>
              <ul className="space-y-4">
                <li><span className="body-sm text-white/40">Proper Disposal — Roll-off</span></li>
                <li><span className="body-sm text-white/40">Absolute Shredding</span></li>
                <li><span className="body-sm text-white/40">EcoSafe Environmental</span></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="eyebrow text-gold mb-6">Reach the Dispatch</p>
            <div className="space-y-6">
              <div>
                <p className="eyebrow text-white/40 mb-2">Direct</p>
                <a href="tel:8003680836" className="display-md text-white hover:text-gold transition-colors block">
                  (800) 368-0836
                </a>
              </div>
              <div className="hairline-soft pt-6">
                <p className="eyebrow text-white/40 mb-2">Email</p>
                <a href="mailto:info@wasteohio.com" className="body-lg text-white hover:text-gold transition-colors block">
                  info@wasteohio.com
                </a>
              </div>
              <div className="hairline-soft pt-6">
                <p className="eyebrow text-white/40 mb-2">Hours</p>
                <p className="body-sm text-white/80">Mon–Fri 7am–6pm &middot; Sat 8am–2pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hairline-soft pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="eyebrow text-white/40">© {new Date().getFullYear()} Great Lakes Waste &middot; All rights reserved</p>
          <p className="eyebrow text-white/40">
            Built by{" "}
            <a href="https://gideoncode.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              Gideon Codeworks
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
