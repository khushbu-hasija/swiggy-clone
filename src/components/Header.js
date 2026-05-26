import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* LOGO */}

        <Link to="/">
          <h1 className="text-3xl font-black tracking-tight text-orange-500 transition hover:scale-105">
            mr. <span className="text-gray-800">foodie</span>
          </h1>
        </Link>

        {/* NAVIGATION */}

        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
            <li>
              <Link to="/" className="transition hover:text-orange-500">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="transition hover:text-orange-500">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition hover:text-orange-500">
                Contact Us
              </Link>
            </li>

            <li className="cursor-pointer rounded-full bg-orange-500 px-5 py-2 text-white shadow-sm transition hover:bg-orange-600 hover:shadow-md">
              Cart
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
