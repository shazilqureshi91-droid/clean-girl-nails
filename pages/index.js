export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50">
      <main className="w-full max-w-3xl bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
        <header className="text-center mb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-amber-800 leading-tight">
            Glamnetic x GLAMZILLA Press-On Nails ✨
          </h1>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Meet the press-ons that look like salon art but fit into your real life. Bold tortoiseshell vibes, easy to apply, and reusable.
          </p>
        </header>

        <section className="text-left space-y-5">
          <p className="text-gray-800 leading-relaxed">
            These nails are more than a quick manicure — they’re a statement. With the tortoiseshell design, you’re stepping into fall with confidence. 
            The finish is glossy, the fit is comfortable, and the look? Total luxury without the salon trip.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Designed for anyone who wants to turn heads with their nails, these press-ons are simple to apply and stay flawless for days. 
            And when you’re ready to switch it up, remove them carefully and reuse for your next vibe.
          </p>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <h3 className="text-lg font-semibold text-amber-700 mb-2">Why you’ll love them:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Trend-forward tortoiseshell design perfect for fall.</li>
              <li>Quick, mess-free application.</li>
              <li>Reusable with proper care.</li>
              <li>Comfortable fit for everyday wear.</li>
            </ul>
          </div>

          <p className="text-gray-800 leading-relaxed">
            Whether it’s coffee runs, work days, or a night out — these Glamnetic nails let your hands do the talking.
          </p>
        </section>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="https://amzn.to/485c6la"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full md:w-auto text-center"
          >
            Shop the Glamnetic Nails 💅
          </a>

          <p className="text-sm text-gray-500 mt-2">Reusable • Easy application • Trendy tortoiseshell finish</p>
        </div>

        <footer className="mt-8 text-sm text-gray-500">
          <p>
            Tip: Keep them safe after wear and they’ll be ready to reuse for your next nail look.
          </p>
        </footer>
      </main>
    </div>
  );
}