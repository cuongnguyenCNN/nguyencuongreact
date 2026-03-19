import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import PrivacyPolicyCommentFB from "./components/PrivacyPolicy/PrivacyPolicyCommentFB";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AutoCommentFB from "./components/Projects/AutoCommentFB";
import MainLayout from "./layouts/MainLayout";
import LandingLayout from "./layouts/Landingpage";
import LPSellPDFNet from "./components/Projects/LPSellPDFNet";
import ThankYouPage from "./components/thankyou";
import LandingPagerProNet from "./components/Projects/lpsellpdfpronet";
// import ReactGA from "react-ga4";
import PDFPrenium from "./components/Projects/pdfprenium";

// ReactGA.initialize("G-B059TBH8PG"); // thay bằng ID của mày
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route
              path="/privacypolicycommentfb"
              element={<PrivacyPolicyCommentFB />}
            />
          </Route>
          {/* LANDING PAGE TOOL */}
          <Route element={<LandingLayout />}>
            <Route path="/autocommentfb" element={<AutoCommentFB />} />
            <Route path="/interviewnet" element={<LPSellPDFNet />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
            <Route path="/prointerview" element={<LandingPagerProNet />} />
            <Route path="/pdfprenium" element={<PDFPrenium />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
