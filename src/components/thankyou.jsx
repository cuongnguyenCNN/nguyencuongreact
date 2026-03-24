// import { CheckCircle, Send, Download, Github } from "lucide-react";

// export default function ThankYouPage() {
//   const pdfUrl = "https://drive.google.com/uc?export=download&id=1JjTOgBDGaHBZMH5jbJS9aLDWvpB3a7uQ";

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       window.location.href = pdfUrl;
// //     }, 4000);

// //     return () => clearTimeout(timer);
// //   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 flex items-center justify-center p-6">
//       <div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center"
//       >
//         {/* Success Icon */}
//         <div className="flex justify-center mb-6">
//           <div className="bg-green-100 p-4 rounded-full">
//             <CheckCircle className="w-10 h-10 text-green-600" />
//           </div>
//         </div>

//         {/* Title */}
//         <h1 className="text-3xl font-bold text-gray-900 mb-3">
//           You're All Set! 🚀
//         </h1>

//         {/* Description */}
//         <p className="text-gray-600 mb-8 leading-relaxed">
//           Your <span className="font-semibold">.NET Interview Questions Guide</span> is ready.
//           A download link has also been sent to your email.  Check your email for the PDF!
//         </p>

//         {/* Download Button */}
//         <a
//           href={pdfUrl}
//           className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition text-white px-7 py-3 rounded-xl font-semibold shadow-lg"
//         >
//           <Download className="w-5 h-5" />
//           Download the PDF
//         </a>

//         {/* <p className="text-sm text-gray-400 mt-4">
//           Your download will start automatically in a few seconds.
//         </p> */}

//         {/* Divider */}
//         <div className="mt-10 border-t pt-6">
//           <p className="text-gray-500 mb-4 font-medium">
//             Want more developer resources?
//           </p>

//           <div className="flex justify-center gap-4 flex-wrap">
//             <a
//              href="https://web.telegram.org/a/#-1003799786189"
//               className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition"
//             >
//               <Send className="w-4 h-4" />
//               Join Software Devs & Jobs
//             </a>

//             <a
//               href="https://github.com/cuongnguyenCNN"
//               className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition"
//             >
//               <Github className="w-4 h-4" />
//               Follow GitHub
//             </a>
//           </div>
//         </div>

//         {/* Social Proof */}
//         <p className="text-xs text-gray-400 mt-8">
//           Trusted by 1000+ developers preparing for backend interviews
//         </p>

//         {/* Footer */}
//         <div className="mt-4 text-xs text-gray-400">
//           Built by <span className="text-blue-600 font-medium"><a href="/">Cuong Nguyen</a></span>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Send, Github } from "lucide-react";
import { useEffect } from "react";
import GeoPricing from "./Projects/GeoPricingComponent";

export default function ThankYouPage() {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "thank_you_view", {
        event_category: "funnel",
        event_label: "after_optin",
      });
    }
  }, []);

  const handleBuy = () => {
    if (window.gtag) {
      window.gtag("event", "buy_click", {
        event_category: "engagement",
        event_label: "pdf_pro_19",
      });
    }

    window.location.href =
      "https://noteflowai.lemonsqueezy.com/checkout/buy/f9ba06c7-64db-42bf-92f1-970bc6193609";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 min-h-screen bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-2xl w-full">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Check your email 📩</h1>
          <p className="text-gray-600 mt-2">
            I’ve sent you the FREE .NET interview PDF
          </p>
        </div>

        {/* MESSAGE */}
        <div className="bg-white shadow-sm rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Before you go...</h2>
          <p className="text-gray-700">
            Most developers still fail interviews even after reading questions.
          </p>
          <p className="font-semibold mt-2">
            👉 Because they don’t know how to explain answers clearly.
          </p>
        </div>

        {/* OFFER */}
        <div className="bg-white border-2 border-black rounded-xl p-6 mb-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Upgrade to PRO version</h2>

          <ul className="text-left mb-4 space-y-2">
            <li>✔ 150 questions + DEEP answers</li>
            <li>✔ Explain like a senior developer</li>
            <li>✔ Real interview scenarios</li>
          </ul>
          {/* 
          <button
            onClick={handleBuy}
            className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition"
          >
            Get PRO for $19
          </button> */}
          <GeoPricing></GeoPricing>

          <p className="text-xs text-gray-500 mt-2">
            One-time payment. Instant access.
          </p>

          {/* urgency */}
          <p className="text-red-500 mt-3 font-semibold">
            🔥 Limited price today
          </p>
        </div>

        {/* BONUS */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
          <h3 className="font-semibold mb-2">🎁 Bonus included:</h3>
          <ul className="space-y-1 text-gray-700">
            <li>Common traps cheat sheet</li>
            <li>Answer frameworks</li>
            <li>Real examples</li>
          </ul>
        </div>

        {/* SOCIAL PROOF */}
        <div className="text-center italic text-gray-600 mb-6">
          <p>💬 “This helped me pass my interview”</p>
          <p>💬 “Worth way more than $19”</p>
        </div>

        {/* ALT */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://web.telegram.org/a/#-1003799786189"
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition"
          >
            <Send className="w-4 h-4" />
            Join Software Devs & Jobs
          </a>

          <a
            href="https://github.com/cuongnguyenCNN"
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition"
          >
            <Github className="w-4 h-4" />
            Follow GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
