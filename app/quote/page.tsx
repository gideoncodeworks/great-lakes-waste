import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, Clock, RefreshCw, Handshake } from "lucide-react";
import { CONTAINER_SIZES } from "@/lib/container-sizes";

export const metadata: Metadata = {
  title: "Get a Free Quote | Great Lakes Waste",
  description: "Tell us your container size and pickup frequency. We'll email a flat monthly quote within one business day. Northeast Ohio.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <section className="bg-[#f7f5f3] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-[#7a1e2e] font-bold text-sm uppercase tracking-widest mb-2">Free Quote &middot; No Obligation</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-4">
              Tell us about your business.
            </h1>
            <p className="text-slate-600 mb-8 text-lg">
              Fill out the form below. We&apos;ll email a flat monthly quote within one business day — no calls, no sales pitch until you say so.
            </p>

            <form className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Business name</label>
                <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl" placeholder="Your business or property name" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your name</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Title</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl" placeholder="Owner, GM, Property Manager..." />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-slate-200 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-slate-200 rounded-xl" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Service address</label>
                <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl" placeholder="Street, City, OH ZIP" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Container size needed</label>
                <select className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                  <option>Not sure — help me pick</option>
                  {CONTAINER_SIZES.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.name} — starting at ${s.monthlyStarting}/mo</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Pickup frequency</label>
                <select className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                  <option>Not sure — help me pick</option>
                  <option>Weekly</option>
                  <option>2× weekly</option>
                  <option>3× weekly</option>
                  <option>Daily</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Currently using another hauler?</label>
                <select className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                  <option>No — this is a new service</option>
                  <option>Yes — I want to switch</option>
                  <option>Yes — comparing quotes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Anything else? <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <textarea rows={4} className="w-full px-4 py-3 border border-slate-200 rounded-xl resize-none" placeholder="Volume swings? Multiple locations? Compactor?" />
              </div>

              <button
                type="submit"
                className="btn-cta w-full flex items-center justify-center gap-2 bg-[#7a1e2e] text-white font-bold px-6 py-4 rounded-xl hover:bg-[#5c1622] transition-colors"
              >
                Send My Quote Request
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-slate-500 text-center">
                We reply within one business day. Weekends we&apos;ll get back Monday morning.
              </p>
            </form>
          </div>

          <div>
            <div className="lg:sticky lg:top-24 bg-black text-white rounded-2xl p-6 border border-slate-800">
              <p className="text-xs font-bold uppercase tracking-widest text-[#7a1e2e] mb-4">Prefer to talk?</p>
              <a href="tel:8003680836" className="block mb-6">
                <p className="text-2xl font-extrabold text-white hover:text-[#7a1e2e] transition-colors">
                  (800) 368-0836
                </p>
                <p className="text-sm text-slate-400 mt-1">Mon–Fri 7am–6pm</p>
              </a>

              <div className="space-y-4 pt-6 border-t border-slate-800">
                {[
                  { icon: Clock, label: "Quote in one business day" },
                  { icon: RefreshCw, label: "We handle the hauler switch" },
                  { icon: CheckCircle2, label: "First pickup within the week" },
                  { icon: Handshake, label: "Month-to-month after 90 days" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-[#7a1e2e] flex-shrink-0" />
                    <span className="text-sm text-slate-300">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <p className="text-xs font-bold uppercase tracking-widest text-[#7a1e2e] mb-2">Not sure what you need?</p>
                <Link href="/#sizes" className="text-sm text-slate-300 hover:text-white flex items-center gap-1">
                  Compare all 6 sizes <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
