// ContactUs.js

import { useState } from "react";

const ContactUs = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessageSent(true);

    setTimeout(() => {
      setMessageSent(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        {/* HERO */}

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            We'd love to hear from you 📞
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Have feedback, suggestions, or questions? Reach out anytime.
          </p>
        </div>

        {/* FORM CARD */}

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-sm">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-400"
            ></textarea>

            <button
              type="submit"
              className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
            >
              Send Message
            </button>

            {messageSent && (
              <p className="text-sm font-medium text-green-600">
                ✅ Message received successfully!
              </p>
            )}
          </form>
        </div>

        {/* CONTACT INFO */}

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">📍</div>

            <h2 className="mt-4 text-lg font-semibold text-gray-900">
              Address
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Mr. Foodie HQ
              <br />
              Mumbai, Maharashtra
              <br />
              India
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">📧</div>

            <h2 className="mt-4 text-lg font-semibold text-gray-900">Email</h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              support@mrfoodie.com
              <br />
              hello@mrfoodie.com
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">☎️</div>

            <h2 className="mt-4 text-lg font-semibold text-gray-900">Phone</h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              +91 9XXXX XX685npm install @reduxjs/toolkit
              <br />
              Mon - Sun · 9 AM - 11 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
