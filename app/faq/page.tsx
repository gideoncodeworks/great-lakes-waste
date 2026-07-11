import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about roll-off dumpster rental in Cleveland — sizes, weight limits, prohibited items, permits, driveway protection, and more.",
  alternates: { canonical: "/faq" },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How fast can you deliver?",
    a: "If you book by 10am on a weekday, we can usually deliver same day. Otherwise, next-business-day delivery is the norm across Greater Cleveland.",
  },
  {
    q: "Do I need to be home for delivery or pickup?",
    a: "No. Just tell us where you want the dumpster placed in the placement notes when you book. We'll drop it, take a photo, and text you confirmation.",
  },
  {
    q: "Will the truck damage my driveway?",
    a: "We drop 2x8 boards under the roll-off wheels to distribute weight and protect concrete and asphalt. In 8 years of drops we've never left a scratch on a properly-prepared driveway.",
  },
  {
    q: "How much weight is included?",
    a: "It depends on the size. 10 and 15 yard include 2 tons, 20 and 30 yard include 3–4 tons, and 40 yard includes 5 tons. Overages are billed at $65/ton — but 90% of our residential customers never hit the limit.",
  },
  {
    q: "How long can I keep the dumpster?",
    a: "Your booking includes 7 days. Need it longer? Extra days are $12–$18 depending on size, and you can extend right from your booking confirmation email.",
  },
  {
    q: "Do I need a permit?",
    a: "If the dumpster sits entirely on your private driveway, no. If we need to place it on the street, most Cleveland-area cities require a permit — we can help you figure out who to call.",
  },
  {
    q: "What can't I put in the dumpster?",
    a: "Paints, oils, tires, batteries, appliances with freon, asbestos, and hazardous waste are all prohibited by law. See the full list on any size detail page. If you're not sure about an item, call us before you throw it in.",
  },
  {
    q: "What areas do you serve?",
    a: "All of Greater Cleveland — Cuyahoga, Lake, Lorain, and Medina counties, plus parts of Summit and Portage. Check the service areas page for a full list. If you don't see your town, call and ask.",
  },
  {
    q: "Do you rent to contractors?",
    a: "Yes. A large share of our business is contractors, roofers, and general remodelers. We offer net-30 billing to established accounts — email sales@wasteohio.com to set that up.",
  },
  {
    q: "What if I need to cancel or reschedule?",
    a: "Cancel up to 24 hours before your scheduled delivery for a full refund. Same-day cancellations forfeit the delivery fee (about $100) since the truck is already loaded.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl">
            Everything you need to know before you book. Don&apos;t see your question? Give us a call.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                <summary className="cursor-pointer p-6 flex items-center justify-between gap-4 list-none">
                  <h3 className="text-lg font-bold text-slate-900">{faq.q}</h3>
                  <span className="text-2xl text-[#0a0a0a] group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6 text-slate-700 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Still have questions?</h2>
          <p className="text-slate-600 mb-8">Real people, real phones, real answers. We&apos;re open Mon–Sat.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#0a0a0a] text-white font-bold px-8 py-4 rounded-full hover:bg-[#1f1f1f] transition-colors"
            >
              Get a Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:8003680836"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0a0a0a] border-2 border-[#0a0a0a] font-bold px-8 py-4 rounded-full hover:bg-[#0a0a0a] hover:text-white transition-colors"
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
