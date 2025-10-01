export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-rose-50 via-pink-50 to-white">
      <main className="w-full max-w-3xl bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
        <header className="text-center mb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-rose-700 leading-tight">
            Burgundy Glitter Almond Nails — Instant Elegance
          </h1>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Luxe-looking nails without the salon—sparkly, sophisticated, and made to last through your busiest days.
          </p>
        </header>

        <section className="text-left space-y-5">
          <p className="text-gray-800 leading-relaxed">
            Elevate your look with these burgundy almond press-ons — a perfect mix of glam and wearability. The rich burgundy tone with fine glitter gives a polished, photo-ready finish that works for brunch, meetings, or date night. They’re pre-shaped, easy to file for a custom fit, and designed to give a seamless salon-style result in minutes.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Application is quick and straightforward: choose the size, press on, and you’re out the door. The comfortable fit and strong hold mean less worry about lifting or slipping, and with careful removal, you can reuse your favorite sets. This is ideal for anyone who wants a high-end manicure look without the time or cost of salon appointments.
          </p>

          <div className="rounded-lg border border-rose-100 bg-rose-50 p-4">
            <h3 className="text-lg font-semibold text-rose-700 mb-2">What makes these nails great</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Rich burgundy color with a subtle glitter finish for extra luxe.</li>
              <li>Almond shape — flattering and timeless.</li>
              <li>Fast, mess-free application that looks professional.</li>
              <li>Reusable when removed carefully to preserve the set.</li>
            </ul>
          </div>

          <p className="text-gray-800 leading-relaxed">
            Whether you’re updating your everyday routine or prepping for a special event, these nails give a confident, polished look that lasts. No fuss, just gorgeous nails you can trust.
          </p>
        </section>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="https://amzn.to/485c6la"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full md:w-auto text-center"
          >
            Shop the Burgundy Glitter Set ✨
          </a>

          <p className="text-sm text-gray-500 mt-2">Almond shape • Sparkle finish • Reusable with care</p>
        </div>

        <footer className="mt-8 text-sm text-gray-500">
          <p>
            Note: For best reuse, follow the included instructions and remove nails gently after wear.
          </p>
        </footer>
      </main>
    </div>
  );
}