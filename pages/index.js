export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-100 to-fuchsia-200 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center shadow-xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-pink-700 mb-4">
          💖 Color Pop Ballerina Nails
        </h1>
        <p className="text-gray-800 mb-6 leading-relaxed">
          Bright, playful, and designed to turn heads ✨ These colorful ballerina press-ons are all about fun and confidence. 
          Super easy to apply, reusable, and the perfect match for your boldest fits. 
          Bring salon vibes home without the salon price 💅
        </p>

        {/* Product pictures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <img
            src="https://m.media-amazon.com/images/I/61d7e2aUoGL._AC_SL1500_.jpg"
            alt="Colorful Ballerina Nails 1"
            className="rounded-xl shadow-md"
          />
          <img
            src="https://m.media-amazon.com/images/I/71N7jDk6s9L._AC_SL1500_.jpg"
            alt="Colorful Ballerina Nails 2"
            className="rounded-xl shadow-md"
          />
        </div>

        {/* CTA */}
        <a
          href="https://amzn.to/4npwJx9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full bg-pink-700 text-white font-bold shadow-lg hover:bg-pink-800 transition transform hover:scale-105"
        >
          Shop Now 🔥
        </a>
      </div>
    </div>
  );
}