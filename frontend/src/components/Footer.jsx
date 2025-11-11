import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-logo">
          <h2>Arnav Enterprises</h2>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> info@arnaventerprises.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Arnav Enterprises | All Rights Reserved</p>
      </div>
    </footer>
  );
}
