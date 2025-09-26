export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-pink-700 mb-6 drop-shadow-lg">
        💅 Hood Princess Nails 💅
      </h1>
      <p className="text-lg md:text-xl text-gray-800 max-w-2xl mb-8 leading-relaxed">
        Sis, these nails are giving <span className="font-semibold">main character energy</span>. 
        Glitter, gradient, acrylic vibes — all without sitting 3 hours at the salon. 
        Press-on, reusable, and perfect for your next vibe check. Period. ✨
      </p>
      <a
        href="https://amzn.to/482nzlr"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-2xl bg-pink-700 text-white font-bold shadow-xl hover:bg-pink-800 transition transform hover:scale-105"
      >
        Shop the Look 🔗
      </a>
    </div>
  );
}
