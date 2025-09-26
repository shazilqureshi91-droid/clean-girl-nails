export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 flex items-center justify-center p-8">
      <div className="max-w-2xl bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center shadow-xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-pink-700 mb-4">💅 Hood Princess Nails</h1>
        <p className="text-gray-800 mb-6 leading-relaxed">
          Yo sis — these nails slap. Glitter gradient, acrylic vibes, press-on and reusable so you can stunt without the salon drama. Perfect for your fits, pics, and weekend flex. Tap below and glow up. ✨
        </p>
        <a
          href="https://amzn.to/482nzlr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full bg-pink-700 text-white font-bold shadow-lg hover:bg-pink-800 transition transform hover:scale-105"
        >
          Shop the Look 🔥
        </a>
      </div>
    </div>
  );
}