const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {/* HERO */}

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            About Us
          </p>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Welcome to Mr. Foodie 🍕
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Mr. Foodie is a modern food discovery app where users can explore
            restaurants, browse menus, and discover great meals fetched from
            real APIs.
          </p>
        </div>

        {/* CONTENT */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              🍔 Discover Food
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Explore restaurants, cuisines, ratings, and offers all in one
              place.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              ⚡ Fast Experience
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Built with React and Tailwind CSS for a clean and responsive user
              experience.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              ❤️ Made for Foodies
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              From pizzas to desserts, discover something delicious every day.
            </p>
          </div>
        </div>

        {/* EXTRA SECTION */}

        <div className="mt-14 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Why Mr. Foodie?</h2>

          <p className="mt-4 leading-8 text-gray-600">
            We wanted to build a food app that feels simple, modern, and fun to
            use. Mr. Foodie focuses on clean UI, smooth browsing, and helping
            users quickly discover restaurants and menus without clutter.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
              React
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              Tailwind CSS
            </span>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Responsive UI
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Real API Data
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
