import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>FilmNest</h2>
          <p>Discover trending movies and shows.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/watchlist">Watchlist</Link>
        </div>

        <div className="footer-about">
          <h4>About</h4>
          <p>Built with React, Vite & Multi APIs.</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 FilmNest. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;