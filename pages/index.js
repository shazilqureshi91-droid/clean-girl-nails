export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-pink-50 via-rose-50 to-fuchsia-50">
      <main className="w-full max-w-3xl bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
        <header className="text-center mb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-pink-700 leading-tight">
            Chill Tips Nail Kit — Salon Vibes, Zero Stress
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A smarter, faster way to get salon-looking nails at home — clean shapes, comfortable fit, and designs that actually last.
          </p>
        </header>

        <section className="text-left space-y-5">
          <p className="text-gray-800 leading-relaxed">
            Tired of wasting time at the salon? This Chillhouse Chill Tips kit is built for people who want polished, modern nails without the hassle. The kit includes a variety of pre-shaped tips and everything you need to apply a clean, even manicure from home. Whether you prefer subtle daytime looks or bold statements for events, these tips give you control over the whole vibe — without the appointment.
          </p>

          <p className="text-gray-800 leading-relaxed">
            The fit is comfortable and the finish looks professional — no weird gaps, no early lifting. They're reusable when applied carefully, so you can switch styles across the week or keep your favorite set for a few wears. The kit is beginner-friendly but gives results that pass for salon work.
          </p>

          <div className="rounded-lg border border-pink-100 bg-pink-50 p-4">
            <h3 className="text-lg font-semibold text-pink-700 mb-2">Why people love it</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Salon-style finish without the salon price.</li>
              <li>Comfortable fit and easy to trim or file for custom shape.</li>
              <li>Quick application — minutes, not hours.</li>
              <li>Reusable option if removed carefully.</li>
            </ul>
          </div>

          <p className="text-gray-800 leading-relaxed">
            Perfect for everyday wear, quick touch-ups before an event, or when you want a reliable, clean manicure on your own schedule. No judgement, just great nails — fast.
          </p>
        </section>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="https://amzn.to/42l4yXL"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-block text-center px-8 py-4 rounded-full bg-pink-600 text-white font-bold shadow-xl hover:bg-pink-700 transition transform hover:scale-105"
          >
            Shop the Chill Tips Kit ✨
          </a>

          <p className="text-sm text-gray-500 mt-2">Includes tips in multiple sizes • Easy to apply • Salon finish at home</p>
        </div>

        <footer className="mt-8 text-sm text-gray-500">
          <p>
            FYI: Results depend on careful application. Follow included instructions for best reuse results.
          </p>
        </footer>
      </main>
    </div>
  );
}