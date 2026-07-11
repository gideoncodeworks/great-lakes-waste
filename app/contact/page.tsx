import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Great Lakes Waste",
  description:
    "Call, text, or email Great Lakes Waste for roll-off dumpster rental in Greater Cleveland. We answer the phone Mon–Sat.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Get in touch
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl">
            Have a question, need a custom quote, or want to set up net-30 billing? Reach us any of the ways below.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Contact info</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl">
                  <div className="h-12 w-12 rounded-xl bg-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Call or Text</p>
                    <a href="tel:8003680836" className="text-2xl font-extrabold text-slate-900 hover:text-[#0a0a0a] transition-colors">
                      (800) 368-0836
                    </a>
                    <p className="text-sm text-slate-500 mt-1">Mon–Fri 7am–6pm, Sat 8am–2pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl">
                  <div className="h-12 w-12 rounded-xl bg-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Email</p>
                    <a href="mailto:sales@wasteohio.com" className="text-lg font-bold text-slate-900 hover:text-[#0a0a0a] transition-colors">
                      sales@wasteohio.com
                    </a>
                    <p className="text-sm text-slate-500 mt-1">Replies within one business day</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl">
                  <div className="h-12 w-12 rounded-xl bg-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Service Area</p>
                    <p className="text-lg font-bold text-slate-900">Greater Cleveland, OH</p>
                    <p className="text-sm text-slate-500 mt-1">Cuyahoga, Lake, Lorain, Medina counties</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl">
                  <div className="h-12 w-12 rounded-xl bg-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Hours</p>
                    <p className="text-lg font-bold text-slate-900">Monday – Saturday</p>
                    <p className="text-sm text-slate-500 mt-1">Delivery windows scheduled the day before</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Send a message</h2>
              <form className="bg-slate-50 p-6 rounded-2xl space-y-4 border border-slate-100">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="topic" className="block text-sm font-bold text-slate-700 mb-2">Topic</label>
                  <select id="topic" className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                    <option>General question</option>
                    <option>Custom quote / bulk order</option>
                    <option>Contractor / net-30 billing</option>
                    <option>Existing order support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#0a0a0a] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#1f1f1f] transition-colors"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-slate-500 text-center">
                  For fastest response, get a quote online or call. This form goes to email and we reply within a business day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Skip the phone tag</h2>
          <p className="text-slate-600 mb-6">If you already know what size you need, get a quote online and lock in your date in two minutes.</p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center gap-2 bg-[#7a1e2e] text-white font-bold px-8 py-4 rounded-full hover:bg-[#5c1622] hover:text-white transition-colors shadow-lg"
          >
            Get a Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
