import "./Contact.css";

function Contact() {
  return (
    <div className="contact">

      <div className="contact-left">
        <h1>Contact Us</h1>
        <p>
          Have questions, feedback, or suggestions? We'd love to hear
          from you. Fill out the form and we’ll get back to you soon.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-right">
        <div className="contact-info">
          <h3>📍 Location</h3>
          <p>India</p>
        </div>

        <div className="contact-info">
          <h3>📧 Email</h3>
          <p>support@filmnest.com</p>
        </div>

        <div className="contact-info">
          <h3>🌐 About FilmNest</h3>
          <p>
            FilmNest helps users discover trending movies and TV shows
            with a clean and cinematic interface.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Contact;