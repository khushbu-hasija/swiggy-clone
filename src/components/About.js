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
            real APIs
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
      </div>
    </div>
  );
};

export default About;
