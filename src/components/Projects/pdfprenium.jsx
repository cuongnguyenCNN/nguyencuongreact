// import React from "react";
import { useNavigate } from "react-router-dom";
// import GeoPricing from "./GeoPricingComponent";

// export default function PDFPrenium() {
//     const navigate = useNavigate();
//   return (
//     <div className="bg-black text-white font-sans">

//       {/* HERO */}
//       <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
//           Think Like a Senior .NET Engineer
//         </h1>

//         <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
//           150 real interview questions with deep answers, follow-ups, and
//           thinking patterns that separate juniors from seniors.
//         </p>

//         <div className="mt-8 flex gap-4">
//           <button onClick={() => navigate("https://noteflowai.lemonsqueezy.com/checkout/buy/eafef897-b5a8-4fe8-9efb-76d65bac0cc8")} className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
//             Get Instant Access - $9,99
//           </button>
//         </div>

//         <p className="mt-4 text-gray-500 text-sm">
//           Instant PDF download • Lifetime access
//         </p>
//       </section>

//       {/* PROBLEM */}
//       <section className="py-20 px-6 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-center">
//           Most developers fail interviews for one reason:
//         </h2>

//         <p className="mt-6 text-center text-xl text-red-400">
//           They memorize answers… but don’t understand how things actually work.
//         </p>

//         <div className="mt-10 grid md:grid-cols-2 gap-6">
//           <div className="bg-gray-900 p-6 rounded-lg">
//             ❌ Can use EF Core… but can’t explain N+1 problem
//           </div>
//           <div className="bg-gray-900 p-6 rounded-lg">
//             ❌ Know DI… but don’t understand lifetimes
//           </div>
//           <div className="bg-gray-900 p-6 rounded-lg">
//             ❌ Use async/await… but don’t understand execution
//           </div>
//           <div className="bg-gray-900 p-6 rounded-lg">
//             ❌ Built APIs… but can’t explain architecture decisions
//           </div>
//         </div>
//       </section>

//       {/* SOLUTION */}
//       <section className="py-20 px-6 bg-gray-950 text-center">
//         <h2 className="text-3xl font-bold">
//           This is not another “question list”
//         </h2>

//         <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
//           This guide teaches you how senior engineers think — so you can answer
//           deeply, confidently, and stand out instantly.
//         </p>

//         <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//           <div className="bg-black p-6 rounded-lg border border-gray-800">
//             🔥 Real interview follow-up questions
//           </div>
//           <div className="bg-black p-6 rounded-lg border border-gray-800">
//             🧠 Insight-driven explanations
//           </div>
//           <div className="bg-black p-6 rounded-lg border border-gray-800">
//             ⚔️ Bad vs Strong answers
//           </div>
//           <div className="bg-black p-6 rounded-lg border border-gray-800">
//             🎯 How to sound senior in 30 seconds
//           </div>
//         </div>
//       </section>

//       {/* CONTENT PREVIEW */}
//       <section className="py-20 px-6 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-center">
//           What you’ll master
//         </h2>

//         <div className="mt-10 grid md:grid-cols-2 gap-6">
//           <div className="bg-gray-900 p-6 rounded-lg">
//             ✔ ASP.NET Core Internals
//           </div>
//           <div className="bg-gray-900 p-6 rounded-lg">
//             ✔ Middleware & Pipeline
//           </div>
//           <div className="bg-gray-900 p-6 rounded-lg">
//             ✔ Dependency Injection (deep)
//           </div>
//           <div className="bg-gray-900 p-6 rounded-lg">
//             ✔ EF Core Performance & Pitfalls
//           </div>
//           <div className="bg-gray-900 p-6 rounded-lg">
//             ✔ LINQ & Query Optimization
//           </div>
//           <div className="bg-gray-900 p-6 rounded-lg">
//             ✔ System Design & Architecture
//           </div>
//           <div className="bg-gray-900 p-6 rounded-lg">
//             ✔ Security (JWT, OAuth, CSRF, CORS)
//           </div>
//           <div className="bg-gray-900 p-6 rounded-lg">
//             ✔ C# Internals (async, memory, threading)
//           </div>
//         </div>
//       </section>

//       {/* TRANSFORMATION */}
//       <section className="py-20 px-6 bg-gray-950 text-center">
//         <h2 className="text-3xl font-bold">
//           After this guide, you will:
//         </h2>

//         <div className="mt-10 space-y-4 text-lg text-gray-300">
//           <p>✔ Answer confidently without memorizing</p>
//           <p>✔ Handle deep follow-up questions</p>
//           <p>✔ Think like a senior engineer</p>
//           <p>✔ Stand out instantly in interviews</p>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 px-6 text-center">
//         <h2 className="text-3xl font-bold">
//           Ready to stand out?
//         </h2>

//         <p className="mt-4 text-gray-400">
//           Stop memorizing. Start thinking.
//         </p>

//         <button onClick={() => navigate("https://noteflowai.lemonsqueezy.com/checkout/buy/eafef897-b5a8-4fe8-9efb-76d65bac0cc8")} className="mt-8 bg-blue-500 hover:bg-blue-600 px-8 py-4 text-lg rounded-lg font-semibold">
//           Download Now - $9,99
//         </button>

//         <p className="mt-4 text-gray-500 text-sm">
//           Instant access • No subscription • One-time payment
//         </p>
//       </section>

//       {/* FOOTER */}
//       <footer className="py-10 text-center text-gray-600 text-sm">
//         © 2026 .NET PDF Prenium. Built for developers preparing for .NET interviews by <a href="/">cuongnguyen author</a>
//       </footer>
// <GeoPricing></GeoPricing>
//     </div>
//   );
// }

//Demo 2
// import React from "react";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-white text-gray-900 font-sans">

//       {/* NAVBAR */}
//       <header className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
//         <h1 className="font-bold text-lg">.NET Interview Guide</h1>
//         <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
//           Get PDF
//         </button>
//       </header>

//       {/* HERO */}
//       <section className="text-center py-24 px-6 max-w-4xl mx-auto">
//         <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//           Think Like a Senior. <br />
//           Pass Any <span className="text-blue-600">.NET Interview</span>
//         </h1>

//         <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
//           150 real-world interview questions with deep explanations 
//           that reveal how senior developers actually think.
//         </p>

//         <div className="mt-10 flex justify-center gap-4">
//           <button
//             className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow hover:bg-blue-700"
//           >
//             Download Free PDF
//           </button>

//           <button className="border px-8 py-4 rounded-xl text-lg hover:bg-gray-100">
//             Preview
//           </button>
//         </div>

//         <p className="mt-4 text-sm text-gray-500">
//           🔥 Used by 1000+ developers
//         </p>
//       </section>

//       {/* TRUST BAR */}
//       <section className="py-10 border-t border-b bg-gray-50 text-center text-gray-500">
//         Trusted by developers from startups to enterprise teams
//       </section>

//       {/* PROBLEM CARDS */}
//       <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//         {[
//           "Memorizing answers doesn’t work",
//           "Interview questions keep changing",
//           "You don’t think at system level"
//         ].map((text, i) => (
//           <div key={i} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
//             <p className="text-lg">{text}</p>
//           </div>
//         ))}
//       </section>

//       {/* SOLUTION */}
//       <section className="py-20 px-6 text-center max-w-3xl mx-auto">
//         <h2 className="text-4xl font-bold">
//           This is not a cheat sheet.
//         </h2>
//         <p className="mt-6 text-gray-600 text-lg">
//           It’s a mental model for backend engineers who want to level up fast.
//         </p>
//       </section>

//       {/* PREVIEW */}
//       <section className="py-20 px-6 bg-gray-50">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-2xl font-bold text-center mb-10">
//             Example from the guide
//           </h2>

//           <div className="bg-white p-8 rounded-xl shadow border">
//             <h3 className="font-semibold text-lg">
//               Why shouldn't DbContext be Singleton?
//             </h3>

//             <p className="mt-3 text-gray-500">
//               Most developers answer: “Because it should be Scoped.”
//             </p>

//             <p className="mt-6 blur-sm text-gray-400 select-none">
//               Real answer: DbContext manages state and is not thread-safe...
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* PRICING */}
//       <section className="py-24 px-6 text-center">
//         <h2 className="text-4xl font-bold">Simple pricing</h2>

//         <div className="mt-12 max-w-md mx-auto border rounded-2xl p-10 shadow-lg">
//           <p className="text-2xl font-bold">$19</p>
//           <p className="mt-2 text-gray-500">One-time payment</p>

//           <ul className="mt-6 space-y-3 text-gray-600">
//             <li>✔ 150 questions</li>
//             <li>✔ Deep explanations</li>
//             <li>✔ Real interview insights</li>
//           </ul>

//           <button className="mt-8 w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700">
//             Get Full Access
//           </button>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="py-20 px-6 text-center bg-gradient-to-b from-blue-600 to-blue-500 text-white">
//         <h2 className="text-4xl font-bold">
//           Your next interview decides your salary.
//         </h2>

//         <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100">
//           Start Preparing Now
//         </button>
//       </section>

//       {/* FOOTER */}
//       <footer className="py-10 text-center text-gray-400 text-sm">
//         © 2026 Cuong Nguyen Ngoc
//       </footer>

//     </div>
//   );
// }
import React from "react";
import GeoPricing from "./GeoPricingComponent";

export default function PDFPrenium() {
      // const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* HERO */}
      <section className="text-center py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Stop Failing <span className="text-blue-600">.NET Interviews</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          150 real interview questions + deep answers that help you think like a senior.
        </p>

        <div className="mt-8">
          {/* <button
            onClick={() => navigate("https://noteflowai.lemonsqueezy.com/checkout/buy/eafef897-b5a8-4fe8-9efb-76d65bac0cc8")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md"
          >
            Get Instant Access - $9,99
          </button> */}
          <GeoPricing></GeoPricing>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          🔥 1000+ developers already downloaded
        </p>
      </section>

      {/* PROBLEM */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why most developers fail interviews
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>❌ You memorize answers but don’t understand deeply</li>
            <li>❌ You panic when questions change slightly</li>
            <li>❌ You lack system-level thinking</li>
          </ul>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-16 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">
          This is not just a PDF.
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          This is a thinking framework used by senior backend developers.
        </p>
      </section>
{/* TESTIMONIALS */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10">
            What developers say
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 border rounded-xl">
              <p className="mb-4">
                ⭐⭐⭐⭐⭐
              </p>
              <p className="text-gray-600">
                This PDF helped me pass my ASP.NET interview
                at a fintech company.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                — Backend Developer
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <p className="mb-4">
                ⭐⭐⭐⭐⭐
              </p>
              <p className="text-gray-600">
                Clear explanations and real questions.
                Much better than random interview lists.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                — .NET Engineer
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PREVIEW */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Preview
          </h2>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-semibold text-lg">
              Why shouldn't DbContext be Singleton?
            </h3>

            <p className="mt-2 text-gray-500">
              Most devs say: "Because it should be Scoped."
            </p>

            <p className="mt-4 blur-sm select-none text-gray-400">
              Real answer: DbContext is not thread-safe and manages state...
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-16 px-6 text-center">
        <p className="text-xl font-semibold text-gray-800">
          Trusted by 1000+ developers
        </p>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 px-6 text-center bg-blue-900 text-white">
        <h2 className="text-3xl font-bold">
          Get the full guide now
        </h2>

        <p className="mt-4 text-blue-100">
          Start thinking like a senior developer today.
        </p>

        {/* <button
          onClick={() => navigate("https://noteflowai.lemonsqueezy.com/checkout/buy/eafef897-b5a8-4fe8-9efb-76d65bac0cc8")}
          className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-gray-100"
        >
          Get Full questions + deep answers ($9,99)
        </button> */}
        <GeoPricing></GeoPricing>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-400 text-sm">
        © 2026 Cuong Nguyen Ngoc <a href="/">cuongnguyen author</a>
      </footer>
    </div>
  );
}