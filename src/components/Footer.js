import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-orange-100 bg-white">
      {/* SUBTLE ORANGE DECOR */}

      <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-orange-100 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-orange-50 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-center md:justify-between">
        {/* BRAND */}

        <div className="max-w-md">
          {/* LOGO */}
          <h1 className="text-3xl font-black tracking-tight text-orange-500">
            mr. <span className="text-gray-800">foodie</span>
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Discover restaurants, explore menus, get great deals.
          </p>
        </div>

        {/* LINKS */}

        <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
          {/* NAVIGATION */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Navigation
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
              <Link to="/" className="transition hover:text-orange-500">
                Home
              </Link>

              <Link to="/about" className="transition hover:text-orange-500">
                About Us
              </Link>

              <Link to="/contact" className="transition hover:text-orange-500">
                Contact Us
              </Link>
            </div>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <p>📍 Mumbai, Maharashtra</p>

              <p>📞 +91 98765 43210</p>

              <p>📧 support@mrfoodie.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}

      <div className="relative border-t border-orange-100 bg-orange-50/40 py-5 text-center text-sm text-gray-600">
        mr. foodie © 2026 Built with 🧡 by Khushbu
      </div>
    </footer>
  );
};

export default Footer;
