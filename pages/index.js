export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-pink-50 via-rose-50 to-fuchsia-50">
      <main className="w-full max-w-3xl bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
        <header className="text-center mb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-pink-700 leading-tight">
            Chill Tips Kit — Salon-Level Nails at Home
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Get polished, photo-ready nails without the salon wait. Simple, comfortable, and crafted for looks that hold up to your day.
          </p>
        </header>

        <section className="text-left space-y-5">
          <p className="text-gray-800 leading-relaxed">
            Skip the appointment and still look flawless. This Chill Tips kit includes a variety of pre-shaped tips that give a smooth, professional finish — ideal for anyone who wants a clean manicure fast. The pieces are easy to size, trim, and apply, so you get a custom fit every time.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Designed for everyday wear or special occasions, the tips sit comfortably and look natural. They’re beginner-friendly and give a result that looks like you stepped out of a salon — but you did it on your schedule. Reuse carefully and swap styles throughout the week for fresh looks without the cost.
          </p>

          <div className="rounded-lg border border-pink-100 bg-pink-50 p-4">
            <h3 className="text-lg font-semibold text-pink-700 mb-2">Why this kit works</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Professional finish at home in minutes.</li>
              <li>Multiple sizes for a comfortable, custom fit.</li>
              <li>Quick application and easy removal.</li>
              <li>Reusable when handled carefully.</li>
            </ul>
          </div>

          <p className="text-gray-800 leading-relaxed">
            Whether you're preparing for photos, a night out, or just want to feel put together, this kit gives you reliable, attractive nails without the fuss.
          </p>
        </section>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="https://amzn.to/4h7kVxv"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full md:w-auto text-center"
          >
            Shop the Chill Tips Kit ✨
          </a>

          <p className="text-sm text-gray-500 mt-2">Includes tips in multiple sizes • Easy to apply • Salon finish at home</p>
        </div>

        <footer className="mt-8 text-sm text-gray-500">
          <p>
            Tip: For best reuse results, follow the included instructions and remove carefully.
          </p>
        </footer>
      </main>
    </div>
  );
}