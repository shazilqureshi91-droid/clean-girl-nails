export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-fuchsia-50 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-pink-700 mb-4">Chillhouse Chill Tips Nail Kit</h1>
        <p className="text-gray-800 mb-6 leading-relaxed">
          Salon-level nails at home — chic, comfy, and reusable. These Chillhouse tips give you clean, modern manicures without the time or price of a salon. Perfect for everyday looks or your weekend glow-up.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <img
            src="https://m.media-amazon.com/images/I/71Y0W8mVJvL._AC_SL1500_.jpg"
            alt="Chillhouse nails 1"
            className="rounded-xl shadow-md w-full object-cover"
          />
          <img
            src="https://m.media-amazon.com/images/I/61zH6k1q0KL._AC_SL1500_.jpg"
            alt="Chillhouse nails 2"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>

        <a
          href="https://amzn.to/42l4yXL"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-full bg-pink-600 text-white font-bold shadow-lg hover:bg-pink-700 transition transform hover:scale-105"
        >
          Shop the Kit ✨
        </a>

        <p className="mt-6 text-sm text-gray-500">Reusable • Easy to apply • Salon look at home</p>
      </div>
    </div>
  );
}