import type { Metadata } from "next";
import Link from "next/link";
import { Truck, Users, Recycle, Award, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Great Lakes Waste | 30 Years in Midwest Waste Services",
  description:
    "Great Lakes Waste is an independent Midwest waste management firm with 30+ years of experience across permanent hauls, roll-off dumpsters, recycling, hazardous, and medical waste.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#7a1e2e] font-bold text-sm uppercase tracking-widest mb-3">About Great Lakes Waste</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Comprehensive waste removal, with a personal touch.
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl">
            Independent. Midwest-based. Three decades of experience across every waste stream you can name. Now with online ordering.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 not-prose">Why we built this</h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            After 30 years in Midwest waste services, we kept hearing the same complaint from homeowners and contractors: booking a dumpster meant a phone call, then a follow-up, then a promised delivery window that slipped by a day. We built Great Lakes Waste to fix that.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Pick your size online. Pick your date. Enter your address. Pay. Done. The delivery locks in the second your payment goes through &mdash; no salesperson has to touch the order, no dispatcher has to route around a backlog. You know exactly what you&apos;re paying and exactly when we&apos;re showing up.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed mb-10">
            Behind the online booking is the same fleet, drivers, and disposal partnerships we&apos;ve been running for three decades &mdash; part of the <strong>Oster Group</strong>, which also operates Great Lakes Waste, Absolute Shredding, and EcoSafe Environmental. That means when your dumpster gets picked up, it gets sorted, recycled, and disposed of properly &mdash; not dumped in the nearest hole.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 my-12 not-prose">
            {[
              { icon: Users, stat: "30", label: "Years in Midwest waste services" },
              { icon: Truck, stat: "5,000+", label: "Roll-offs delivered every year" },
              { icon: Recycle, stat: "70%+", label: "Of every load diverted from landfill" },
              { icon: Award, stat: "4.8★", label: "Average customer rating" },
            ].map((s, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <s.icon className="h-8 w-8 text-[#0a0a0a] mb-3" />
                <p className="text-4xl font-extrabold text-slate-900 mb-1">{s.stat}</p>
                <p className="text-sm text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 not-prose">The Oster Group family</h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Great Lakes Waste is one of four companies under the Oster Group umbrella, each focused on a different piece of the waste and environmental services puzzle:
          </p>
          <ul className="space-y-3 text-slate-700 mb-10">
            <li><strong>Great Lakes Waste</strong> &mdash; Roll-off dumpster rental (that&apos;s us).</li>
            <li><strong>Great Lakes Waste / Waste Ohio</strong> &mdash; Commercial waste hauling and recurring pickup routes.</li>
            <li><strong>Absolute Shredding</strong> &mdash; Secure document destruction for businesses.</li>
            <li><strong>EcoSafe Environmental</strong> &mdash; Environmental remediation and hazardous waste disposal.</li>
          </ul>
        </div>
      </section>

      <section className="hero-gradient py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ready to book?
          </h2>
          <p className="text-slate-200 mb-8">Two-minute booking, guaranteed delivery date.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quote"
              className="btn-cta inline-flex items-center justify-center gap-2 bg-[#7a1e2e] text-white font-bold px-8 py-4 rounded-full hover:bg-[#7a1e2e] transition-colors shadow-lg"
            >
              Get a Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:8003680836"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-colors"
            >
              <Phone className="h-5 w-5" />
              (800) 368-0836
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
