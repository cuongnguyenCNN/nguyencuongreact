import React from "react";

export default function AutoCommentFB() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      <Hero />

      <SocialProof />

      <Problem />

      <Features />

      <Demo />

      <Workflow />

      <UseCases />

      <Screenshots />

      <Pricing />

      <FAQ />

      <CTA />

      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-5 border-b">
      <h1 className="text-xl font-bold">AutoComment</h1>

      <div className="space-x-6">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>

        <a
          href="https://chromewebstore.google.com/detail/auto-comments-facebook-gr/bfiinibmlppmggdaokockclfgaimdclf?authuser=0&hl=vi"
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
        >
          Download
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="text-center py-24 px-6 bg-gradient-to-b from-indigo-50">
      <h1 className="text-5xl font-bold max-w-3xl mx-auto">
        Automatically Reply to Facebook Comments and Capture Customers
      </h1>

      <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
        Stop wasting hours replying to comments. Our automation tool instantly
        responds, engages users and converts comments into leads.
      </p>

      <div className="mt-10 space-x-4">
        <a
          href="https://chromewebstore.google.com/detail/auto-comments-facebook-gr/bfiinibmlppmggdaokockclfgaimdclf?authuser=0&hl=vi"
          className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg"
        >
          Install Chrome Extension
        </a>

        <button className="border px-8 py-4 rounded-xl">Watch Demo</button>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="py-16 text-center">
      <p className="text-gray-500">Trusted by online sellers and marketers</p>

      <div className="flex justify-center gap-12 mt-6 text-gray-400">
        <div>1200+ users</div>
        <div>50k comments automated</div>
        <div>300k leads generated</div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="py-24 bg-gray-50 text-center px-6">
      <h2 className="text-4xl font-bold">
        Replying To Facebook Comments Manually Is Painful
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto">
        <Card
          title="Hundreds of Comments"
          text="Viral posts bring hundreds of comments that are impossible to reply manually."
        />

        <Card
          title="Missed Customers"
          text="Potential buyers comment but never receive a reply."
        />

        <Card
          title="Wasted Time"
          text="Sellers waste hours every day replying to repetitive questions."
        />
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "Auto Reply",
      desc: "Automatically respond to comments with custom messages.",
    },

    {
      title: "Keyword Trigger",
      desc: "Reply when users comment keywords like price or link.",
    },

    {
      title: "Lead Collection",
      desc: "Collect potential customers directly from comments.",
    },

    {
      title: "Smart Delay",
      desc: "Human-like delay to keep accounts safe.",
    },

    {
      title: "Multi Post Automation",
      desc: "Run automation across multiple posts.",
    },

    {
      title: "Templates",
      desc: "Create multiple response templates.",
    },
  ];

  return (
    <section id="features" className="py-24 px-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center">
        Powerful Automation Features
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <Card key={i} title={f.title} text={f.desc} />
        ))}
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section className="py-24 text-center px-6">
      <h2 className="text-4xl font-bold">
        Watch The Tool Reply To Comments Automatically
      </h2>

      <p className="mt-4 text-gray-600">
        In seconds the tool scans comments and replies automatically.
      </p>

      <div className="mt-16 flex justify-center">
        <div className="w-[700px] h-[400px] bg-gray-200 rounded-xl flex items-center justify-center">
          Demo Video
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="py-24 text-center px-6">
      <h2 className="text-4xl font-bold">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-5xl mx-auto">
        <Step
          number="1"
          title="Install Extension"
          desc="Install the Chrome extension."
        />

        <Step
          number="2"
          title="Set Reply Message"
          desc="Create comment templates."
        />

        <Step
          number="3"
          title="Run Automation"
          desc="Tool replies automatically."
        />
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    {
      title: "Online Sellers",
      desc: "Automatically reply with price and product details.",
    },
    { title: "Affiliate Marketers", desc: "Send affiliate links instantly." },
    { title: "Freelancers", desc: "Capture clients from viral posts." },
    { title: "Community Managers", desc: "Manage engagement easily." },
  ];

  return (
    <section className="py-24 bg-gray-50 text-center px-10">
      <h2 className="text-4xl font-bold">Who Uses AutoComment</h2>

      <div className="grid md:grid-cols-4 gap-10 mt-16 max-w-6xl mx-auto">
        {cases.map((c, i) => (
          <Card key={i} title={c.title} text={c.desc} />
        ))}
      </div>
    </section>
  );
}

function Screenshots() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-4xl font-bold">Simple Interface</h2>

      <div className="mt-16 flex justify-center">
        <div className="w-[600px] h-[350px] bg-gray-200 rounded-xl flex items-center justify-center">
          Screenshot
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 text-center px-10">
      <h2 className="text-4xl font-bold">Pricing</h2>

      <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-4xl mx-auto">
        <PriceCard
          title="Free"
          price="$0"
          features={["Basic auto reply", "1 template", "Limited automation"]}
        />

        <PriceCard
          title="Pro"
          price="$9"
          highlight
          features={[
            "Unlimited comments",
            "Keyword triggers",
            "Advanced delay",
            "Multiple templates",
            "Priority support",
          ]}
        />
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center">FAQ</h2>

      <div className="mt-10 space-y-6">
        <FAQItem
          q="Is it safe for Facebook?"
          a="Yes, the tool uses human-like delay."
        />

        <FAQItem
          q="Do I need technical skills?"
          a="No. Just install and start."
        />

        <FAQItem
          q="Does it support multiple posts?"
          a="Yes, automation can run on many posts."
        />
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 text-center bg-indigo-600 text-white">
      <h2 className="text-4xl font-bold">
        Start Automating Facebook Comments Today
      </h2>

      <a
        href="https://chromewebstore.google.com/detail/auto-comments-facebook-gr/bfiinibmlppmggdaokockclfgaimdclf?authuser=0&hl=vi"
        className="mt-8 bg-white text-indigo-600 px-8 py-4 rounded-xl"
      >
        Download Extension
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="text-center py-10 text-gray-500">
      © 2026 AutoComment Tool
    </footer>
  );
}

function Card({ title, text }) {
  return (
    <div className="p-6 border rounded-xl bg-white">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{text}</p>
    </div>
  );
}

function Step({ number, title, desc }) {
  return (
    <div>
      <div className="text-4xl font-bold text-indigo-600">{number}</div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  );
}

function PriceCard({ title, price, features, highlight }) {
  return (
    <div
      className={`p-10 rounded-xl border ${highlight ? "border-indigo-600 shadow-lg" : ""}`}
    >
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="text-4xl font-bold mt-4">{price}</div>
      <ul className="mt-6 space-y-2">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg">
        Get Started
      </button>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <div>
      <h4 className="font-semibold">{q}</h4>
      <p className="text-gray-600">{a}</p>
    </div>
  );
}
