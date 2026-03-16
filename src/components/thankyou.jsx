// import { useEffect } from "react";
// import { CheckCircle, Download, MessageCircle, Github } from "lucide-react";

// export default function ThankYouPage() {
//   const pdfUrl = "https://drive.google.com/uc?export=download&id=1JjTOgBDGaHBZMH5jbJS9aLDWvpB3a7uQ";

//   useEffect(() => {
//     // Optional: auto download after a few seconds
//     const timer = setTimeout(() => {
//       window.location.href = pdfUrl;
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-6">
//       <div
//         className="max-w-xl w-full bg-slate-800/60 backdrop-blur rounded-2xl shadow-xl p-8 text-center border border-slate-700"
//       >
//         <div className="flex justify-center mb-4">
//           <CheckCircle className="w-16 h-16 text-green-400" />
//         </div>

//         <h1 className="text-3xl font-bold mb-3">
//           You're All Set! 🚀
//         </h1>

//         <p className="text-slate-300 mb-6">
//           Your <span className="font-semibold">.NET Interview Questions Guide</span>
//            is ready. A download link has also been sent to your email.
//         </p>

//         <a
//           href={pdfUrl}
//           className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl font-semibold shadow-lg"
//         >
//           <Download className="w-5 h-5" />
//           Download the PDF
//         </a>

//         <p className="text-sm text-slate-400 mt-4">
//           Your download will start automatically in a few seconds.
//         </p>

//         <div className="mt-8 border-t border-slate-700 pt-6">
//           <p className="text-slate-300 mb-4">
//             Want more developer resources?
//           </p>

//           <div className="flex justify-center gap-4">
//             <a
//               href="https://web.telegram.org/a/#-1003799786189"
//               className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg"
//             >
//               <MessageCircle className="w-4 h-4" />
//               Join Telegram
//             </a>

//             <a
//               href="https://github.com/cuongnguyenCNN"
//               className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg"
//             >
//               <Github className="w-4 h-4" />
//               Follow GitHub
//             </a>
//           </div>
//         </div>

//         <div className="mt-8 text-xs text-slate-500">
//           Built by <a href="/">Cuong Nguyen</a>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useEffect } from "react";
import { CheckCircle, Send, Download, Github } from "lucide-react";

export default function ThankYouPage() {
  const pdfUrl = "https://drive.google.com/uc?export=download&id=1JjTOgBDGaHBZMH5jbJS9aLDWvpB3a7uQ";

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       window.location.href = pdfUrl;
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 flex items-center justify-center p-6">
      <div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center"
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          You're All Set! 🚀
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Your <span className="font-semibold">.NET Interview Questions Guide</span> is ready.
          A download link has also been sent to your email.  Check your email for the PDF!
        </p>

        {/* Download Button */}
        <a
          href={pdfUrl}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition text-white px-7 py-3 rounded-xl font-semibold shadow-lg"
        >
          <Download className="w-5 h-5" />
          Download the PDF
        </a>

        {/* <p className="text-sm text-gray-400 mt-4">
          Your download will start automatically in a few seconds.
        </p> */}

        {/* Divider */}
        <div className="mt-10 border-t pt-6">
          <p className="text-gray-500 mb-4 font-medium">
            Want more developer resources?
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
             href="https://web.telegram.org/a/#-1003799786189"
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition"
            >
              <Send className="w-4 h-4" />
              Join Interview .Net
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

        {/* Social Proof */}
        <p className="text-xs text-gray-400 mt-8">
          Trusted by 1000+ developers preparing for backend interviews
        </p>

        {/* Footer */}
        <div className="mt-4 text-xs text-gray-400">
          Built by <span className="text-blue-600 font-medium"><a href="/">Cuong Nguyen</a></span>
        </div>
      </div>
    </div>
  );
}
