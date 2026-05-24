import { useState } from "react";

const ContactUs = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessageSent(true);

    setTimeout(() => {
      setMessageSent(false);
    }, 2000);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us 📞</h1>

        <p>
          We'd love to hear from you. Whether you have feedback, suggestions, or
          just want to say hello — reach out to us anytime.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <h2>📍 Address</h2>

          <p>
            Mr. Foodie Headquarters
            <br />
            Mumbai, Maharashtra
            <br />
            India
          </p>
        </div>

        <div className="contact-card">
          <h2>📧 Email</h2>

          <p>support@mrfoodie.com</p>

          <p>partnerships@mrfoodie.com</p>
        </div>

        <div className="contact-card">
          <h2>☎️ Phone</h2>

          <p>+91 98765 43210</p>

          <p>Mon - Sun | 9 AM - 11 PM</p>
        </div>
      </div>

      <div className="contact-form-section">
        <h2>Send us a Message</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea rows="5" placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>

          {messageSent && (
            <p className="success-message">✅ Message received successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
