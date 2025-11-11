import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* LEFT SIDE: Contact Info */}
        <div className="contact-info">
          <h1>Contact <span>Arnav Enterprises</span></h1>
          <p>
            Have any questions or business inquiries? We’d love to hear from you!
            Fill out the form and we’ll get back to you as soon as possible.
          </p>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>
              65-3-443, Ex Service Man Colony, Sriharipuram<br />
              Shop No. 12, Surya Bagh, Visakhapatnam - 530009,<br />
              Andhra Pradesh, India
            </p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>arnaventerprisesvizag@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>🧾 GST Number</h3>
            <p>37AHDPG0175C1ZV</p>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form action="https://formspree.io/f/xdkynyaq" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" />
            <input type="number"name="mobile number"placeholder="Your Contact Number" />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="map-section">
        <h2>Find Us on Map</h2>
        <iframe
          title="Arnav Enterprises Location"
          src="https://www.google.com/maps?q=Visakhapatnam,+Andhra+Pradesh,+India&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
