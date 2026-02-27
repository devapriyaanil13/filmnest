import "./About.css";

function About() {
  return (
    <div className="about">

      <div className="about-hero">
        <h1>About FilmNest</h1>
        <p>
          FilmNest is a modern movie discovery experience built for
          cinema lovers. Explore trending movies, popular TV shows,
          and watch trailers — all in one immersive platform.
        </p>
      </div>

      <div className="about-grid">

        <div className="about-card">
          <h3>🎬 Discover</h3>
          <p>
            Stay updated with trending and popular movies powered by
            TMDB API. We bring real-time data directly to your screen.
          </p>
        </div>

        <div className="about-card">
          <h3>📺 Explore</h3>
          <p>
            Search and explore movies, TV shows, and entertainment
            content with a clean, minimal UI.
          </p>
        </div>

        <div className="about-card">
          <h3>⚡ Fast & Modern</h3>
          <p>
            Built using React + Vite with a smooth and responsive
            experience across devices.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;