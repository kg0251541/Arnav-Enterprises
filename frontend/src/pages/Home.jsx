import { Link } from "react-router-dom";
import "./Home.css";
import Products from "../components/Products";
export default function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero">
  <div className="hero-overlay">
    <div className="hero-content">
      <h1>Welcome to <span>Arnav Enterprises</span></h1>
      <p>Your trusted source for high-quality industrial and household products.</p>
      <a href="/products" className="hero-btn">Explore Products</a>
    </div>
  </div>
</section>


      {/* ABOUT SECTION */}
      {/* ABOUT SECTION */}
<section className="about">
  <h2>About Our Company</h2>
  <div className="about-content">
    <img
      src="https://www.wework.com/ideas/wp-content/uploads/sites/4/2017/06/Web_150DPI-20190927_10th_Floor_Conference_Room_2_v1.jpg?fit=1120%2C630"
      alt="Factory"
    />
    <div>
      <p>
        <strong>Arnav Enterprises (Prop. Sushil Kumar Gupta)</strong> is a trusted
        name in industrial solutions, located in Visakhapatnam, Andhra Pradesh.
        With more than a decade of experience, we specialize in supplying
        high-quality industrial pumps, motors, machinery, and precision tools
        to clients across India.
      </p>
      <p>
        We are dedicated to delivering <strong>innovation, quality, and service</strong>.
        Every product undergoes strict quality checks to ensure maximum
        reliability and efficiency. Our success lies in strong customer
        relationships, transparent business practices, and timely delivery.
      </p>
      <p>
        Whether you are a small workshop or a large-scale manufacturing plant,
        Arnav Enterprises provides customized solutions that meet your exact
        requirements. We continue to expand our product line to serve emerging
        industries and evolving technologies.
      </p>
    </div>
  </div>

  <div className="about-extra">
    <div className="about-box">
      <h3>🚀 Our Mission</h3>
      <p>
        To empower industries and households with durable, energy-efficient, and
        innovative equipment — built to perform and last.
      </p>
    </div>
    <div className="about-box">
      <h3>🌟 Our Vision</h3>
      <p>
        To become a nationwide leader in industrial supplies, recognized for
        excellence, trust, and customer-centric service.
      </p>
    </div>
    <div className="about-box">
      <h3>🤝 Our Values</h3>
      <p>
        Integrity, Quality, and Commitment — these three pillars define who we
        are and how we work with every client and partner.
      </p>
    </div>
  </div>


</section>


      {/* FEATURED PRODUCTS */}
      <section className="featured">
        <h2>Our Top Products</h2>
        <div className="featured-grid">
          <div className="feature-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0aY85rlK4zB1y4qof38iAbaSLpkJaoFQZig&s" alt="Pump" />
            <h3>Industrial Pumps</h3>
            <p>High-pressure and durable pumps for all industries.</p>
          </div>
          <div className="feature-card">
            <img src="https://arroyoprocess.com/wp-content/uploads/2016/05/electric-motors.jpg" alt="Motor" />
            <h3>Electric Motors</h3>
            <p>Energy-efficient motors built for long life and performance.</p>
          </div>
          <div className="feature-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSN3ibfOyyLbCscVj-Vy9giLG1ONyaHIc5AA&s" alt="Tools" />
            <h3>Industrial Tools</h3>
            <p>High-quality hand & power tools for professional use.</p>
          </div>
        </div>
      </section>
<Products/>
      {/* WHY CHOOSE US */}
      <section className="why">
        <h2>Why Choose Us?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>✔ 10+ Years Experience</h3>
            <p>Providing industrial excellence and customer satisfaction.</p>
          </div>
          <div className="why-card">
            <h3>⚙️ Quality Products</h3>
            <p>Only the most reliable and certified machinery for your needs.</p>
          </div>
          <div className="why-card">
            <h3>💬 Quick Support</h3>
            <p>24×7 responsive customer service for your business queries.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Looking for Reliable Industrial Equipment?</h2>
        <p>Contact Arnav Enterprises today to get the best deals and expert support!</p>
        <Link to="/contact" className="cta-btn">Contact Us</Link>
      </section>

    </div>
  );
}
