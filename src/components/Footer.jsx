import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h3>FilmNest</h3>
          <p>Your movie discovery platform.</p>
        </div>

        <div>
          <h4>Navigation</h4>
          <p>Home</p>
          <p>Explore</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div>
          <h4>Built With</h4>
          <p>React + Vite</p>
          <p>TMDB API</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 FilmNest. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;