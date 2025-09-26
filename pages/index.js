export default function LandingPage() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">💅✨ Clean Girl Nail Energy ✨💅</h1>
        <p className="text-lg text-gray-700 mb-6">
          Sis… let’s be real. Ain’t nobody got time to sit at the nail salon for 3 hours and drop half the rent just to get a fresh set. 👀
          These <span className="font-semibold">Glamermaid reusable press-ons</span>? BABY, they’re giving <span className="italic">luxury baddie on a budget</span>. Handmade, acrylic, stick-on, and reusable (yes, reusable 🤯).
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Imagine scrolling through your phone, nails looking busted, and then BOOM—two seconds later you’re serving <span className="italic">“who’s her nail tech??”</span> energy. Period. No cap.
        </p>

        <a
          href="https://amzn.to/483bcps"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-pink-600 transition"
        >
          ✨ Shop Your Glow-Up ✨
        </a>

        <div className="mt-10 text-left">
          <h2 className="text-2xl font-bold text-pink-500 mb-3">🔑 Why You’ll Love Them:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Reusable AF</strong> (save coins 💵)</li>
            <li><strong>Handmade, luxe look</strong> without the salon tax</li>
            <li><strong>Sturdy but cute</strong>—won’t pop off mid selfie 💁‍♀️</li>
            <li><strong>Clean girl vibes</strong> but hood princess approved 👑</li>
          </ul>
        </div>

        <p className="mt-8 text-lg text-gray-700 italic">
          I wouldn’t gatekeep this. You deserve to look like <span className="font-semibold">that girl</span> without stressing your wallet. Treat yourself, sis. 💕
        </p>

        <a
          href="https://amzn.to/483bcps"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-pink-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-pink-600 transition"
        >
          👉 Shop Now 👈
        </a>
      </div>
    </div>
  );
}
