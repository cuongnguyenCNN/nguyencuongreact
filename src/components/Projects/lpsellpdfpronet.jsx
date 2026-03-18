import React from "react";

export default function LandingPageProNet() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Stop Failing .NET Interviews
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
            Start Thinking Like a Senior Developer
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          You don’t fail because you lack knowledge.
          <br />
          You fail because you answer like a junior.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="https://noteflowai.lemonsqueezy.com/checkout/buy/f9ba06c7-64db-42bf-92f1-970bc6193609"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            Get the PDF – $19
          </a>

          <a
            href="#learn"
            className="px-8 py-4 rounded-xl text-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="learn" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Why Most Developers Fail Interviews
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          It’s not about knowledge. It’s about how you think.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            "Memorizing answers",
            "Repeating documentation",
            "Not understanding systems",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              ❌ {item}
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 bg-blue-50 text-center px-6">
        <h2 className="text-3xl font-bold">
          The Shift That Changes Everything
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Learn how to break down questions, explain systems,
          and talk about trade-offs — like a real senior developer.
        </p>
      </section>

      {/* VALUE */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What You’ll Learn
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Senior Answer Framework",
            "Real .NET Interview Questions",
            "Deep System Thinking",
            "Common Mistakes to Avoid",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl hover:shadow-lg transition"
            >
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* PROOF */}
      <section className="py-20 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-bold">Built from Real Data</h2>

        <p className="mt-6 text-gray-600">
          Shared with 900+ developers <br />
          80,000+ impressions on LinkedIn
        </p>
      </section>

      {/* OFFER */}
      <section className="py-20 text-center px-6">
        <div className="max-w-xl mx-auto border rounded-2xl p-10 shadow-lg">
          <h2 className="text-4xl font-bold">$19</h2>

          <p className="mt-4 text-gray-600">
            One-time payment. Lifetime access.
          </p>

          <a
            href="https://noteflowai.lemonsqueezy.com/checkout/buy/f9ba06c7-64db-42bf-92f1-970bc6193609"
            className="mt-8 inline-block bg-blue-600 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:scale-105 transition"
          >
            Buy Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold">Is this for beginners?</h3>
            <p>No. This is for developers who already know .NET but fail interviews.</p>
          </div>

          <div>
            <h3 className="font-semibold">Is it worth $19?</h3>
            <p>If it helps you pass one interview, it’s worth far more.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-6">
        <h2 className="text-3xl font-bold">
          Your Next Interview Can Be Different
        </h2>

        <a
          href="https://noteflowai.lemonsqueezy.com/checkout/buy/f9ba06c7-64db-42bf-92f1-970bc6193609"
          className="mt-6 inline-block bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition"
        >
          Get the Guide Now
        </a>
      </section>
      <footer className="mt-24 text-center text-gray-500 text-sm pb-10">
        Built for developers preparing for .NET interviews by <a href="/">cuongnguyen author</a>
      </footer>
    </div>
  );
}