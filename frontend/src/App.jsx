import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminPanel from "./components/AdminPanel";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen"; // 👈 new component for loader
import "./App.css";

// 👇 This handles route change and loader animation
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // simulate loading time (0.7s)
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0); // ✅ always open at top
    }, 700);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />

      {/* 👇 show loader when page changes */}
      {loading ? (
        <LoadingScreen />
      ) : (
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
      )}

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
