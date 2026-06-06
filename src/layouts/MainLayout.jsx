import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FloatingContact from "../components/FloatingContact";

const Footer = lazy(() => import("../components/Home/Footer"));

const PageLoader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-white dark:bg-slate-950">
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-2xl animate-pulse"></div>

      {/* Rotating gradient ring */}
      <div
        className="absolute inset-0 rounded-full border-4 border-transparent 
      border-t-indigo-600 border-r-fuchsia-500 border-b-cyan-400 
      animate-spin shadow-2xl"
      ></div>

      {/* Middle soft ring */}
      <div className="absolute inset-2 rounded-full border border-indigo-300/30"></div>

      {/* Inner core */}
      <div className="absolute inset-5 rounded-full bg-gradient-to-br from-indigo-600 to-fuchsia-500 shadow-inner"></div>

      {/* Brand text */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <span className="text-xs font-bold tracking-widest text-white drop-shadow">
          ALLPVAUSA
        </span>
      </div>
    </div>
  </div>
);

export default function MainLayout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Floating WhatsApp + Telegram Button (GLOBAL) */}
      <FloatingContact />
    </>
  );
}
