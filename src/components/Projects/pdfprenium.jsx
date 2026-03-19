import React from "react";
import { useNavigate } from "react-router-dom";

export default function PDFPrenium() {
    const navigate = useNavigate();
  return (
    <div className="bg-black text-white font-sans">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Think Like a Senior .NET Engineer
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          150 real interview questions with deep answers, follow-ups, and
          thinking patterns that separate juniors from seniors.
        </p>

        <div className="mt-8 flex gap-4">
          <button onClick={() => navigate("https://noteflowai.lemonsqueezy.com/checkout/buy/eafef897-b5a8-4fe8-9efb-76d65bac0cc8")} className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
            Get Instant Access - $9,99
          </button>
        </div>

        <p className="mt-4 text-gray-500 text-sm">
          Instant PDF download • Lifetime access
        </p>
      </section>

      {/* PROBLEM */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Most developers fail interviews for one reason:
        </h2>

        <p className="mt-6 text-center text-xl text-red-400">
          They memorize answers… but don’t understand how things actually work.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            ❌ Can use EF Core… but can’t explain N+1 problem
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            ❌ Know DI… but don’t understand lifetimes
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            ❌ Use async/await… but don’t understand execution
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            ❌ Built APIs… but can’t explain architecture decisions
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 px-6 bg-gray-950 text-center">
        <h2 className="text-3xl font-bold">
          This is not another “question list”
        </h2>

        <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
          This guide teaches you how senior engineers think — so you can answer
          deeply, confidently, and stand out instantly.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            🔥 Real interview follow-up questions
          </div>
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            🧠 Insight-driven explanations
          </div>
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            ⚔️ Bad vs Strong answers
          </div>
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            🎯 How to sound senior in 30 seconds
          </div>
        </div>
      </section>

      {/* CONTENT PREVIEW */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          What you’ll master
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            ✔ ASP.NET Core Internals
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            ✔ Middleware & Pipeline
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            ✔ Dependency Injection (deep)
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            ✔ EF Core Performance & Pitfalls
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            ✔ LINQ & Query Optimization
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            ✔ System Design & Architecture
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            ✔ Security (JWT, OAuth, CSRF, CORS)
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            ✔ C# Internals (async, memory, threading)
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="py-20 px-6 bg-gray-950 text-center">
        <h2 className="text-3xl font-bold">
          After this guide, you will:
        </h2>

        <div className="mt-10 space-y-4 text-lg text-gray-300">
          <p>✔ Answer confidently without memorizing</p>
          <p>✔ Handle deep follow-up questions</p>
          <p>✔ Think like a senior engineer</p>
          <p>✔ Stand out instantly in interviews</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">
          Ready to stand out?
        </h2>

        <p className="mt-4 text-gray-400">
          Stop memorizing. Start thinking.
        </p>

        <button onClick={() => navigate("https://noteflowai.lemonsqueezy.com/checkout/buy/eafef897-b5a8-4fe8-9efb-76d65bac0cc8")} className="mt-8 bg-blue-500 hover:bg-blue-600 px-8 py-4 text-lg rounded-lg font-semibold">
          Download Now - $9,99
        </button>

        <p className="mt-4 text-gray-500 text-sm">
          Instant access • No subscription • One-time payment
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-600 text-sm">
        © 2026 .NET PDF Prenium. Built for developers preparing for .NET interviews by <a href="/">cuongnguyen author</a>
      </footer>

    </div>
  );
}