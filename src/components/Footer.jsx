import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer py-4 mt-5">
      <div className="container">

        <div className="row text-center text-md-start">

          {/* Logo Section */}
          <div className="col-md-4 mb-3">
            <h5 className="footer-logo">FilmNest</h5>
            <p className="footer-text">
              Discover trending movies and find where to watch them.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-3">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/explore">Explore</Link></li>
              <li><Link to="/watchlist">Watchlist</Link></li>
            </ul>
          </div>

          {/* Info Section */}
          <div className="col-md-4 mb-3">
            <h6 className="footer-heading">About</h6>
            <p className="footer-text small">
              Built with React, Vite, Bootstrap and TMDB API.
            </p>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="text-center footer-bottom">
          © {new Date().getFullYear()} FilmNest. All rights reserved.
        </div>

      </div>
    </footer>
  );
}