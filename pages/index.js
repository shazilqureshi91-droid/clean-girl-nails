export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-fuchsia-200 via-pink-200 to-rose-200 flex items-center justify-center p-8">
      <div className="max-w-2xl bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center shadow-xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-fuchsia-700 mb-4">✨ Rainbow Glow Nails</h1>
        <p className="text-gray-800 mb-6 leading-relaxed">
          Fun, bold, and impossible to ignore — these rainbow gradient acrylic press-ons are here to steal the spotlight. 
          Easy to wear, reusable, and perfect for showing off your playful side. Bring color to every outfit with nails 
          that look straight out of your Pinterest board. 💖
        </p>
        <a
          href="https://amzn.to/46DHIf9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full bg-fuchsia-700 text-white font-bold shadow-lg hover:bg-fuchsia-800 transition transform hover:scale-105"
        >
          Shop the Look 🌈
        </a>
      </div>
    </div>
  );
}