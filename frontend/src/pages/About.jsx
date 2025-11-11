import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <h1>About <span>Arnav Enterprises</span></h1>
          <p>
            We are a trusted name in industrial tools, machinery, and
            engineering solutions — providing quality, reliability, and service
            excellence since our inception.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img
              src="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/07/Businesspeople-discussing-at-conference-table-enterprise-collaboration-790x415.jpg"
              alt="About Arnav Enterprises"
            />
          </div>

          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Arnav Enterprises is an innovative and customer-focused enterprise
              delivering industrial-grade tools, hardware equipment, and
              technical services. Our dedication lies in offering top-quality
              products that enhance efficiency, performance, and safety in every
              project.
            </p>

            <p>
              With years of expertise, we have built strong partnerships with
              leading manufacturers and clients across India, ensuring that our
              customers get the best in both price and quality.
            </p>
          </div>
        </div>

        <div className="about-mission">
          <div className="mission-box">
            <h3>Our Mission</h3>
            <p>
              To empower industries and professionals with reliable tools and
              equipment that drive productivity, sustainability, and growth.
            </p>
          </div>

          <div className="mission-box">
            <h3>Our Vision</h3>
            <p>
              To be India’s most trusted industrial solutions provider — known
              for innovation, customer satisfaction, and long-term partnerships.
            </p>
          </div>
        </div>

        <div className="about-values">
          <h2>Our Core Values</h2>
          <ul>
            <li>✅ Quality First</li>
            <li>🤝 Customer Satisfaction</li>
            <li>⚙️ Innovation in Every Step</li>
            <li>🌍 Commitment to Sustainability</li>
            <li>👷 Teamwork and Integrity</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
