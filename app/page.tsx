import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { CONTAINER_SIZES } from "@/lib/container-sizes";
import StatCountUp from "@/components/StatCountUp";

const CITIES = [
  "Cleveland", "Lakewood", "Parma", "Cleveland Heights", "Strongsville",
  "Westlake", "Mentor", "Medina", "Brunswick", "Avon",
  "North Royalton", "Solon", "Beachwood", "Mayfield", "Warrensville",
  "Broadview Heights", "Olmsted Falls", "Rocky River", "Bay Village",
  "Fairview Park", "Shaker Heights", "Euclid", "Berea", "Middleburg Heights",
  "Ohio City", "Tremont", "Detroit-Shoreway", "Old Brooklyn",
];

export default function HomePage() {
  return (
    <>
      {/* =================== HERO — 100vh full-bleed cinematic =================== */}
      <section className="hero-photo min-h-[100svh] flex flex-col">
        {/* fixed by <Header /> — leaves space via 100svh */}
        <div className="container-max flex-1 flex items-end pb-16 lg:pb-24 pt-32">
          <div className="max-w-[1100px]">
            <p className="eyebrow-lg text-gold mb-6">
              Est. 1994 &middot; Serving Ohio Businesses
            </p>
            <h1 id="direct-answer" className="display-xxl text-white mb-8">
              The invoice you deserve.
              <br />
              The truck that shows up.
            </h1>
            <p className="body-lg text-white/75 max-w-[720px] mb-10">
              Rear-load waste service for Ohio restaurants, shops, plants and property portfolios. Flat monthly rate, one dispatcher who knows your name, and zero fuel surcharges hidden at the bottom of the bill.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/quote" className="btn-primary">
                Send us your last invoice
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="tel:8003680836" className="link-underline text-white">
                <Phone className="h-3.5 w-3.5" />
                (800) 368-0836
              </a>
            </div>
          </div>
        </div>

        {/* Bottom whisper — bespoke touch */}
        <div className="border-t border-white/10 py-6">
          <div className="container-max flex items-center justify-between gap-4 flex-wrap">
            <p className="eyebrow text-white/50">Scroll — see how it works</p>
            <p className="eyebrow text-white/50 hidden md:block">A family-owned Ohio hauler &middot; <span className="text-gold">Independent, not affiliated with Republic, WM, Rumpke</span></p>
          </div>
        </div>
      </section>

      {/* =================== STATS — hairline dividers, charcoal, gold accents, count-up =================== */}
      <section className="surface-charcoal py-16 lg:py-24">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12">
            {[
              { value: 500, suffix: "+", label: "Ohio businesses on route" },
              { value: 30, suffix: " yr", label: "Family-owned & operated" },
              { value: 99.4, suffix: "%", label: "On-time pickup rate", decimals: 1 },
              { value: 0, suffix: "", label: "Fuel surcharges — ever", prefix: "$" },
            ].map((s, i) => (
              <div
                key={i}
                className={`px-6 lg:px-10 ${i > 0 ? "lg:border-l lg:border-[#1e2226]" : ""} ${i === 2 ? "border-l border-[#1e2226] lg:border-l" : ""}`}
              >
                <p className="display-lg text-white leading-none mb-3">
                  {s.prefix && <span className="text-gold">{s.prefix}</span>}
                  <StatCountUp target={s.value} decimals={s.decimals} />
                  {s.suffix && <span className="text-gold">{s.suffix}</span>}
                </p>
                <p className="eyebrow text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== SERVICE THESIS — editorial asymmetric ============ */}
      <section id="service" className="surface-bone py-24 lg:py-40">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-16">
            <div className="lg:col-span-4">
              <p className="eyebrow text-brand mb-6">01 &middot; Service Model</p>
              <div className="hairline pt-6 body-sm">
                Weekly, twice-weekly, thrice-weekly, or daily. Change the frequency with a text, not a re-contract. Same-day switch from your current hauler — we handle the notification.
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="display-xl mb-8">
                Recurring commercial pickup that reads like a promise, not a spreadsheet.
              </h2>
              <p className="body-lg mb-4">
                National haulers built billing to extract. We built ours to explain. One line per container per month. If the invoice grows, we called you first.
              </p>
              <div className="grid sm:grid-cols-3 gap-8 mt-14 pt-10 hairline">
                {[
                  { n: "01", h: "Flat monthly rate", b: "No fuel surcharge. No environmental fee. No admin fee. No annual hike." },
                  { n: "02", h: "One dispatcher", b: "You'll know the name. You'll have the direct line. No call-center menus." },
                  { n: "03", h: "Month-to-month", b: "After the first 90 days you can cancel any time. We earn it every month." },
                ].map((p) => (
                  <div key={p.n}>
                    <p className="eyebrow text-brand mb-4">{p.n}</p>
                    <h3 className="display-md mb-3">{p.h}</h3>
                    <p className="body-sm">{p.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== SIZES — full-bleed hover reveal cards ================ */}
      <section id="sizes" className="surface-white py-24 lg:py-40">
        <div className="container-max">
          <div className="section-head">
            <div className="section-head-copy">
              <p className="eyebrow text-brand mb-4">02 &middot; Containers</p>
              <h2 className="display-xl">
                Six sizes.<br />Six answers.
              </h2>
            </div>
            <Link href="/quote" className="btn-ghost">
              Not sure what you need? Ask us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {CONTAINER_SIZES.map((s, idx) => (
              <Link
                key={s.slug}
                href={`/quote?size=${s.slug}`}
                className="reveal-card photo-slot aspect-[4/5] block group"
                data-label={`CONTAINER ${String(idx + 1).padStart(2, "0")}`}
              >
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 z-10 text-white bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                  <p className="eyebrow text-gold mb-3">
                    From ${s.monthlyStarting}<span className="opacity-60">/mo</span>
                  </p>
                  <h3 className="display-lg mb-2">
                    {s.isToter ? "96 Gal" : `${s.yards} Yard`}
                  </h3>
                  <p className="body-sm text-white/80 mb-0">{s.tagline}</p>

                  {/* Reveals on hover */}
                  <div className="reveal-body mt-4 pt-4 border-t border-white/20">
                    <p className="body-sm text-white/90 mb-4">
                      {s.dimensions.length} &times; {s.dimensions.width} &times; {s.dimensions.height} &middot; {s.pickupFrequencyOptions.join(" / ")}
                    </p>
                    <p className="eyebrow text-gold flex items-center gap-2">
                      Get a quote <ArrowUpRight className="h-3 w-3" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =================== COVERAGE — marquee of cities ================ */}
      <section id="coverage" className="surface-black py-24 lg:py-32 overflow-hidden">
        <div className="container-max">
          <div className="section-head text-white">
            <div className="section-head-copy">
              <p className="eyebrow text-gold mb-4">03 &middot; Coverage</p>
              <h2 className="display-xl">Twenty-eight zip codes<br />and every route in between.</h2>
            </div>
            <a href="tel:8003680836" className="btn-ghost text-white">
              Confirm your zip
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="marquee py-16 border-y border-white/10 my-8">
          <div className="marquee-track">
            {[...CITIES, ...CITIES].map((c, i) => (
              <span key={i} className="display-xl text-white/15 hover:text-gold transition-colors">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-16 pt-4">
          <div className="lg:col-span-5">
            <p className="body-lg text-white/70">
              Home base: Cleveland. Trucks running Cuyahoga, Lake, Lorain, Medina and Summit before most of Ohio has turned the coffee on.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-3 gap-x-8 gap-y-4">
            {["Cuyahoga", "Lake", "Lorain", "Medina", "Summit", "Portage"].map((c) => (
              <div key={c} className="border-t border-white/10 pt-3">
                <p className="eyebrow text-gold">County</p>
                <p className="display-md text-white mt-2">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== INVOICE COMPARISON — editorial split ============ */}
      <section className="surface-bone py-24 lg:py-40">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-brand mb-4">04 &middot; The Invoice</p>
              <h2 className="display-xl mb-8">
                Same container.
                <br />
                <span className="text-brand">Different math.</span>
              </h2>
              <p className="body-lg mb-6">
                Send us your most recent bill from Republic, Waste Management, Rumpke, or the local one you can&apos;t remember the name of. We&apos;ll respond with a flat monthly quote for the same size and frequency.
              </p>
              <p className="body-md">
                No sales calls. Just the number.
              </p>
              <Link href="/quote" className="btn-primary mt-10">
                Email us the invoice
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-7 lg:pl-12">
              {/* Real-shaped ledger — hand-designed line rhythm */}
              <div className="bg-white border border-[#e5dfd3] p-8 lg:p-10">
                <div className="flex items-baseline justify-between pb-6 border-b border-[#e5dfd3]">
                  <p className="eyebrow text-ink">Sample &middot; 4 yd &middot; weekly</p>
                  <p className="eyebrow text-ink-muted">Ohio City restaurant</p>
                </div>

                <div className="pt-6 space-y-4">
                  {[
                    { l: "Base service", t: "$169.00", ours: true },
                    { l: "Fuel surcharge", t: "$28.50", strike: true },
                    { l: "Environmental fee", t: "$12.00", strike: true },
                    { l: "Container rental", t: "$25.00", strike: true },
                    { l: "Admin fee", t: "$12.50", strike: true },
                  ].map((row, i) => (
                    <div key={i} className={`flex items-baseline justify-between pb-4 border-b ${row.ours ? "border-brand" : "border-[#f0eae0]"}`}>
                      <p className={`${row.strike ? "text-ink-muted line-through" : "text-ink font-medium"}`}>{row.l}</p>
                      <p className={`${row.strike ? "text-ink-muted line-through" : "text-ink font-medium"} font-medium`} style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>{row.t}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 mt-4 border-t border-ink flex items-baseline justify-between">
                  <p className="eyebrow text-brand">You Save</p>
                  <p className="display-lg text-brand">$78/mo &middot; $936/yr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== TEAM — editorial split, one big photo, three names ============ */}
      <section className="surface-white py-24 lg:py-40">
        <div className="container-max">
          <div className="section-head">
            <div className="section-head-copy">
              <p className="eyebrow text-brand mb-4">05 &middot; The Crew</p>
              <h2 className="display-xl">A dispatcher.<br />A driver. A direct line.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
            <div className="lg:col-span-7">
              <div className="photo-slot aspect-[4/3] w-full" data-label="THE YARD — SOLON OH" />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {[
                { n: "Andy Oster", r: "Operations Lead", y: "30+ years", b: "Ex-Waste Management ops. Helped Pete & Pete off the ground. Your first call goes here." },
                { n: "Taylor Elgart", r: "Client Services", y: "New accounts, switches, quarterly reviews", b: "Answers texts. Handles the hauler switch. Runs your quarterly service check-in." },
                { n: "Mike K.", r: "Route Lead — West Side", y: "Tue/Thu — Cuyahoga West + Lorain", b: "Knows every tight driveway in Lakewood by name. Board-safe drops. On-time within 10 min windows." },
              ].map((p, i) => (
                <div key={i} className={`${i > 0 ? "hairline pt-6" : ""} flex items-baseline justify-between gap-4`}>
                  <div>
                    <p className="display-md">{p.n}</p>
                    <p className="eyebrow text-brand mt-1 mb-3">{p.r}</p>
                    <p className="body-sm">{p.b}</p>
                  </div>
                  <p className="eyebrow text-ink-muted whitespace-nowrap hidden sm:block">{p.y}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================== TESTIMONIAL — long pull-quote, not 3-card grid =========== */}
      <section className="surface-black py-24 lg:py-40">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <p className="eyebrow text-gold mb-4">06 &middot; From the Line</p>
              <p className="body-lg text-white/70 mb-8">
                One story, told long — because we don&apos;t need six templated stars to prove the point.
              </p>
              <div className="photo-slot aspect-square w-full max-w-xs" data-label="MARCUS R. — OHIO CITY" />
            </div>
            <div className="lg:col-span-8">
              <span className="display-xxl text-brand leading-none">&ldquo;</span>
              <p className="display-md text-white leading-tight mb-8" style={{ fontWeight: 400 }}>
                I switched from the national. Same 4-yard container, same Tuesday pickup, seventy bucks less every month. My last hauler didn&apos;t know I existed. Mike walks in the back door and says hi to the line cooks. That&apos;s not marketing. That&apos;s just a real business, running its route.
              </p>
              <div className="hairline-soft pt-6">
                <p className="eyebrow text-gold mb-1">Marcus R.</p>
                <p className="body-sm text-white/60">Owner &middot; Full-service restaurant &middot; Ohio City, Cleveland</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== FINAL CTA — big condensed =========== */}
      <section className="surface-bone py-24 lg:py-40">
        <div className="container-max text-center">
          <p className="eyebrow text-brand mb-8">07 &middot; Start Here</p>
          <h2 className="display-xxl mb-12 max-w-[1000px] mx-auto">
            Send us the invoice.<br />
            <span className="text-brand">We&apos;ll send back the number.</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/quote" className="btn-primary">
              Get a Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href="tel:8003680836" className="link-underline text-ink">
              Or just call &middot; (800) 368-0836
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
