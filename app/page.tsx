import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Calendar,
  Truck,
  ClipboardCheck,
  MapPin,
  Star,
  DollarSign,
  BarChart3,
  MessageSquare,
  FileText,
  Handshake,
  RefreshCw,
} from "lucide-react";
import { CONTAINER_SIZES } from "@/lib/container-sizes";
import ContainerVisual from "@/components/ContainerVisual";
import TruckVisual from "@/components/TruckVisual";
import OhioMap from "@/components/OhioMap";

const CLEVELAND_NEIGHBORHOODS = [
  "Ohio City", "Tremont", "Detroit-Shoreway", "Old Brooklyn", "Collinwood",
  "Buckeye-Shaker", "Slavic Village", "Edgewater", "Clark-Fulton", "Downtown",
  "West Park", "Kamm's Corners", "St. Clair-Superior", "Fairfax", "Hough",
  "University Circle", "Glenville", "Broadway-Slavic", "Kinsman", "Lee-Harvard",
];

const NEARBY_SUBURBS = [
  "Lakewood", "Parma", "Cleveland Heights", "Shaker Heights", "Strongsville",
  "Westlake", "Mentor", "Medina", "Brunswick", "Avon",
  "North Royalton", "Solon", "Beachwood", "Mayfield", "Warrensville",
  "Broadview Heights", "Olmsted Falls", "Rocky River", "Bay Village", "Fairview Park",
];

export default function HomePage() {
  const heroSize = CONTAINER_SIZES[3]; // 4-yard, most popular

  return (
    <>
      {/* HERO */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <span className="h-2 w-2 rounded-full bg-[#7a1e2e] animate-soft-pulse" />
                <span className="text-white text-xs sm:text-sm font-semibold">Recurring commercial pickup &middot; Northeast Ohio</span>
              </div>

              <h1 id="direct-answer" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
                Waste service you can
                <span className="block">count on. <span className="text-[#7a1e2e]">Every week.</span></span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                Rear-load dumpsters and toters for Ohio businesses. Flat monthly pricing, driver-owned routes, and a straightforward invoice — no hidden fuel surcharges, no auto-hikes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/quote"
                  className="btn-cta inline-flex items-center justify-center gap-2 bg-[#7a1e2e] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#5c1622] transition-colors text-base shadow-lg"
                >
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="tel:8003680836"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors text-base"
                >
                  <Phone className="h-5 w-5 text-[#7a1e2e]" />
                  <span>Or call <span className="text-[#7a1e2e]">(800) 368-0836</span></span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7a1e2e]" />
                  Same-day switch from your current hauler
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7a1e2e]" />
                  Flat monthly rate
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7a1e2e]" />
                  Local driver-owned routes
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 bg-[#7a1e2e]/25 blur-3xl rounded-full" />
                <div className="relative bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#7a1e2e] font-bold">Pickup day</p>
                      <p className="text-lg font-extrabold text-white mt-0.5">Every Tuesday, 7am</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400 uppercase tracking-widest">On-time</p>
                      <p className="text-xl font-extrabold text-[#7a1e2e]">99.4%</p>
                    </div>
                  </div>

                  <TruckVisual className="w-full h-auto my-4" />

                  <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10 text-center">
                    <div>
                      <p className="text-lg font-extrabold text-white">$0</p>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-0.5">Fuel Surcharge</p>
                    </div>
                    <div>
                      <p className="text-lg font-extrabold text-white">$0</p>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-0.5">Env Fee</p>
                    </div>
                    <div>
                      <p className="text-lg font-extrabold text-white">$0</p>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-0.5">Auto-Hike</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { stat: "500+", label: "Ohio businesses served" },
              { stat: "99.4%", label: "On-time pickup rate" },
              { stat: "$0", label: "Fuel surcharges. Ever." },
              { stat: "4.9★", label: "Customer rating" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">{s.stat}</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIZE GRID */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-[#7a1e2e] font-bold text-sm uppercase tracking-widest mb-2">Sizes &amp; Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-3">
              Six sizes. Flat monthly rates.
            </h2>
            <p className="text-slate-600 text-lg">
              From a 96-gallon toter for the corner café to an 8 yard for a full manufacturing plant. Pick a size, pick a frequency, done.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {CONTAINER_SIZES.map((s) => (
              <Link
                key={s.slug}
                href={`/quote?size=${s.slug}`}
                className="size-card group block bg-[#f7f5f3] hover:bg-white rounded-2xl p-6 border border-slate-100"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <p className="text-4xl font-extrabold text-black leading-none">{s.isToter ? "96" : s.yards}</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{s.isToter ? "gal" : "yd"}</p>
                </div>

                <div className="bg-white rounded-lg py-4 flex items-end justify-center h-28 mb-4 border border-slate-100">
                  <ContainerVisual size={s} className="w-full h-full" />
                </div>

                <p className="text-xs text-slate-500 mb-1">
                  {s.dimensions.length} &times; {s.dimensions.width} &times; {s.dimensions.height}
                </p>
                <p className="text-sm font-semibold text-slate-700 mb-3">{s.tagline}</p>

                <div className="pt-3 border-t border-slate-200">
                  <p className="text-xl font-extrabold text-black">${s.monthlyStarting}<span className="text-xs text-slate-500 font-normal">/mo</span></p>
                  <p className="text-xs text-slate-500">starting at</p>
                </div>

                <p className="mt-3 text-sm font-bold text-[#7a1e2e] group-hover:text-[#5c1622] inline-flex items-center gap-1">
                  Get a quote <ArrowRight className="h-3.5 w-3.5" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SWITCH & SAVE — the hauling-specific differentiator */}
      <section className="py-16 lg:py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7a1e2e]/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#7a1e2e] font-bold text-sm uppercase tracking-widest mb-2">Switch &amp; Save</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
                Same container. Same pickup. Way less on the invoice.
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                National haulers stack on fuel surcharges, environmental fees, container rental fees, and auto-hikes. Our monthly rate is what you actually pay.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "No fuel surcharge (their avg: $18–35/mo)",
                  "No environmental fee (their avg: $8–15/mo)",
                  "No admin fee (their avg: $12/mo)",
                  "No auto-hike (their avg: 4–7%/yr)",
                ].map((line, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7a1e2e] flex-shrink-0" />
                    <span className="text-white font-semibold">{line}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/quote"
                className="btn-cta inline-flex items-center justify-center gap-2 bg-[#7a1e2e] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#5c1622] transition-colors shadow-lg"
              >
                Send us your last invoice &mdash; we&apos;ll match &amp; beat it
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">Real Ohio restaurant &middot; 4 yd, weekly pickup</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/40 p-4 rounded-xl border border-red-900/50">
                  <p className="text-[10px] uppercase tracking-widest text-red-400 font-bold mb-2">Your current bill</p>
                  <p className="text-3xl font-extrabold text-white line-through decoration-red-500">$247</p>
                  <p className="text-xs text-slate-400 mt-1">/mo — with hidden fees</p>
                </div>
                <div className="bg-[#7a1e2e]/10 p-4 rounded-xl border-2 border-[#7a1e2e]">
                  <p className="text-[10px] uppercase tracking-widest text-[#7a1e2e] font-bold mb-2">Great Lakes flat</p>
                  <p className="text-3xl font-extrabold text-[#7a1e2e]">$169</p>
                  <p className="text-xs text-slate-400 mt-1">/mo — that&apos;s the whole bill</p>
                </div>
              </div>

              <div className="space-y-2 text-sm border-t border-white/10 pt-4">
                <div className="flex justify-between text-slate-300">
                  <span>Base service (4 yd, weekly)</span>
                  <span>$169.00</span>
                </div>
                <div className="flex justify-between text-red-400/70">
                  <span>Fuel surcharge <span className="text-[10px]">(theirs, not ours)</span></span>
                  <span className="line-through">$28.50</span>
                </div>
                <div className="flex justify-between text-red-400/70">
                  <span>Environmental fee <span className="text-[10px]">(theirs, not ours)</span></span>
                  <span className="line-through">$12.00</span>
                </div>
                <div className="flex justify-between text-red-400/70">
                  <span>Container rental <span className="text-[10px]">(theirs, not ours)</span></span>
                  <span className="line-through">$25.00</span>
                </div>
                <div className="flex justify-between text-red-400/70">
                  <span>Admin fee <span className="text-[10px]">(theirs, not ours)</span></span>
                  <span className="line-through">$12.50</span>
                </div>

                <div className="flex justify-between pt-4 mt-2 border-t border-white/10">
                  <span className="text-white font-bold">Monthly savings</span>
                  <span className="text-[#7a1e2e] font-extrabold text-xl">$78/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">Over 12 months</span>
                  <span className="text-white font-bold">= $936 back in your pocket</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 4 steps */}
      <section className="py-16 lg:py-20 bg-[#f7f5f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#7a1e2e] font-bold text-sm uppercase tracking-widest mb-2">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              Switch to us in four steps.
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: 1, icon: ClipboardCheck, title: "Get a quote", body: "Tell us your size and pickup frequency. Custom quote in one business day." },
              { num: 2, icon: RefreshCw, title: "We handle the switch", body: "We&apos;ll notify your current hauler and coordinate the swap. Zero downtime." },
              { num: 3, icon: Truck, title: "First pickup, same week", body: "Rear-load truck arrives on your scheduled day. Boards down, no scratches." },
              { num: 4, icon: Calendar, title: "Set it and forget it", body: "Simple monthly invoice. Change frequency or size any time — no hoops." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="relative inline-flex mb-4">
                  <div className="h-20 w-20 rounded-full bg-black flex items-center justify-center">
                    <step.icon className="h-9 w-9 text-[#7a1e2e]" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-[#7a1e2e] text-white text-sm font-extrabold flex items-center justify-center border-2 border-white">
                    {step.num}
                  </div>
                </div>
                <h3 className="text-lg font-extrabold text-black mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.body }} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="btn-cta inline-flex items-center justify-center gap-2 bg-[#7a1e2e] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#5c1622] transition-colors"
            >
              Start your quote <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-[#7a1e2e] font-bold text-sm uppercase tracking-widest mb-2">Who We Serve</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-3">
              Built for Ohio businesses.
            </h2>
            <p className="text-slate-600 text-lg">
              We&apos;re not a national franchise. We know your neighborhood and we know your industry.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Restaurants & Bars", body: "Kitchen waste, cardboard, and packaging — daily pickup if you need it." },
              { name: "Retail & Strip Centers", body: "Shared containers for multi-tenant properties. One invoice, many suites." },
              { name: "Manufacturing", body: "Higher-volume rear-loads with flexible frequency for seasonal spikes." },
              { name: "Property Management", body: "Multi-location portfolios billed on one statement. AP-friendly." },
              { name: "Medical & Dental", body: "General waste stream service (not RMW — see our sister EcoSafe for biohazard)." },
              { name: "Auto Shops & Detailers", body: "Handles the awkward stuff regular haulers won&apos;t take." },
              { name: "Apartment Communities", body: "8-yard containers with daily pickup for 100+ unit properties." },
              { name: "Schools & Nonprofits", body: "Community pricing for local Ohio schools and 501(c)(3) organizations." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-[#f7f5f3] rounded-2xl border border-slate-100">
                <h3 className="font-extrabold text-black mb-2">{item.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OHIO COVERAGE MAP — riffs on the state outline in the logo */}
      <section className="py-16 lg:py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <OhioMap className="w-full max-w-md mx-auto" />
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-[#7a1e2e] font-bold text-sm uppercase tracking-widest mb-2">Northeast Ohio Coverage</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                We&apos;re a Cleveland shop. That&apos;s the whole point.
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Our routes cover Cuyahoga, Lake, Lorain, Medina, and Summit counties — everything within about 60 minutes of downtown. National haulers subcontract Ohio pickups. We drive them.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#7a1e2e] font-bold mb-2">Cleveland neighborhoods</p>
                  <p className="text-white text-sm leading-relaxed">
                    {CLEVELAND_NEIGHBORHOODS.slice(0, 10).join(" · ")} &amp; every other CLE zip.
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#7a1e2e] font-bold mb-2">Nearby suburbs</p>
                  <p className="text-white text-sm leading-relaxed">
                    {NEARBY_SUBURBS.slice(0, 10).join(" · ")} &amp; more.
                  </p>
                </div>
              </div>

              <a
                href="tel:8003680836"
                className="inline-flex items-center gap-2 text-[#7a1e2e] font-bold hover:text-[#fca5b0] transition-all"
              >
                Not sure if we serve you? Call (800) 368-0836 <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MEET YOUR TEAM — recurring service = relationship-driven */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#7a1e2e] font-bold text-sm uppercase tracking-widest mb-2">Meet Your Team</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-3">
              You&apos;ll know your dispatcher by name.
            </h2>
            <p className="text-slate-600 text-lg">
              National haulers hand you a call-center. We hand you a dispatcher, a driver, and a direct number. That&apos;s the difference between recurring service and a rental.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                initials: "AO",
                name: "Andy Oster",
                role: "Operations Lead",
                bio: "30+ years in Northeast Ohio waste. Ex-Waste Management ops. Helped launch Pete &amp; Pete. Your first call goes to Andy.",
              },
              {
                initials: "TE",
                name: "Taylor Elgart",
                role: "Client Services",
                bio: "Point of contact for new accounts. Handles the hauler switch, permit questions, and quarterly service reviews. Answers texts.",
              },
              {
                initials: "MK",
                name: "Mike K.",
                role: "Route Lead — West Side",
                bio: "Drives your Tuesday and Thursday routes across Cuyahoga West and Lorain. Knows every tight driveway in Lakewood by name.",
              },
            ].map((p, i) => (
              <div key={i} className="bg-[#f7f5f3] rounded-2xl p-6 border border-slate-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-14 w-14 rounded-full bg-[#7a1e2e] text-white flex items-center justify-center text-lg font-extrabold flex-shrink-0">
                    {p.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-black leading-tight">{p.name}</h3>
                    <p className="text-xs text-[#7a1e2e] font-bold uppercase tracking-widest mt-1">{p.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: p.bio }} />
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto text-center bg-[#f7f5f3] rounded-2xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-black">Your account = one dispatcher, one driver, one phone number.</strong> No IVR mazes, no ticket queues, no "let me transfer you." We keep it simple because our customers actually run businesses.
            </p>
          </div>
        </div>
      </section>

      {/* 5-PILLAR PROMISES */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#7a1e2e] font-bold text-sm uppercase tracking-widest mb-2">Why Great Lakes Waste</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-3">
              What the big haulers don&apos;t do.
            </h2>
            <p className="text-slate-600 text-lg">
              Five commitments to Ohio businesses — same ones we&apos;ve been keeping since day one.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: DollarSign, label: "Flat Monthly Rate", sub: "No fuel surcharges, no environmental fees, no auto-hikes." },
              { icon: BarChart3, label: "Route Reports", sub: "See your yardage, tonnage, and diversion any time you ask." },
              { icon: MessageSquare, label: "One Point of Contact", sub: "You&apos;ll know your dispatcher by name. No call-center runaround." },
              { icon: Handshake, label: "No Long-Term Lockup", sub: "Month-to-month after the first 90 days. Cancel any time." },
              { icon: FileText, label: "Clean Invoicing", sub: "One line-item per container per month. AP will actually thank you." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="h-14 w-14 rounded-2xl bg-[#7a1e2e]/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-7 w-7 text-[#7a1e2e]" />
                </div>
                <p className="font-extrabold text-black text-sm mb-1.5">{item.label}</p>
                <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.sub }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 lg:py-20 bg-[#f7f5f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#7a1e2e] font-bold text-sm uppercase tracking-widest mb-2">What Businesses Say</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              Ohio businesses that switched.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marcus R.",
                role: "Restaurant Owner &middot; Ohio City",
                tag: "Restaurant",
                body: "Switched from the big national. Same 4-yard, same pickup schedule, $70 less per month and I actually know our driver&apos;s name now.",
              },
              {
                name: "Denise P.",
                role: "Property Manager &middot; Strongsville",
                tag: "Property Management",
                body: "I run 6 apartment communities. Great Lakes bills all 6 on one statement. Every other hauler wanted separate accounts. This is how it should be.",
              },
              {
                name: "Jim K.",
                role: "Plant Manager &middot; Parma",
                tag: "Manufacturing",
                body: "We do heavy volume swings by season. They just adjust the pickup frequency, no re-contracting, no drama. That flexibility is worth real money.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-[#7a1e2e] fill-[#7a1e2e]" />
                    ))}
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#7a1e2e] bg-[#7a1e2e]/10 px-2 py-1 rounded-full">
                    {t.tag}
                  </span>
                </div>
                <p className="text-slate-800 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: `&ldquo;${t.body}&rdquo;` }} />
                <div className="pt-4 border-t border-slate-200">
                  <p className="font-bold text-black text-sm" dangerouslySetInnerHTML={{ __html: t.name }} />
                  <p className="text-xs text-slate-500" dangerouslySetInnerHTML={{ __html: t.role }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hero-gradient relative overflow-hidden py-16 lg:py-24">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Switch this week.
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            Quote in one business day. First pickup within the week. We&apos;ll handle notifying your current hauler.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quote"
              className="btn-cta inline-flex items-center justify-center gap-2 bg-[#7a1e2e] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#5c1622] transition-colors shadow-lg"
            >
              Get a Free Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:8003680836"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Phone className="h-5 w-5 text-[#7a1e2e]" />
              <span>Or call <span className="text-[#7a1e2e]">(800) 368-0836</span></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
