const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Mr. Foodie 🍕</h1>

        <p>
          Discover restaurants, explore menus, and order your favorite meals —
          all in one place.
        </p>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h2>🍔 Our Mission</h2>

          <p>
            Mr. Foodie was built to make food discovery simple, beautiful, and
            fast. We connect food lovers with amazing restaurants and menus
            through a clean and modern experience.
          </p>
        </div>

        <div className="about-card">
          <h2>⚡ Fast Experience</h2>

          <p>
            Built using modern technologies like ReactJS, Redux Toolkit, Jest
            for robust testing, and TailWind CSS to create a beautiful user
            experience.
          </p>
        </div>

        <div className="about-card">
          <h2>❤️ Made for Food Lovers</h2>

          <p>
            Whether you love pizzas, burgers, desserts, or healthy meals, Mr.
            Foodie helps you discover something delicious every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
