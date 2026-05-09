import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <>
      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="sidebar-top">

          <img src={logo} alt="logo" />

         

        </div>

        <nav className="sidebar-links">

          <a href="#">Dashboard</a>

          <a href="#">About</a>

          <a href="#">Services</a>

          <a href="#">Packages</a>

          <a href="#">Why Us</a>

          <a href="#">Upload Project</a>

          <a href="#">Contact</a>

        </nav>

      </aside>

      {/* MAIN CONTENT */}

      <main className="main-content">

        {/* TOPBAR */}

        <header className="topbar">

          <div className="topbar-left">

            <h1>Zero Pix Creative Studio</h1>

          </div>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="hero-content">

            <p className="hero-small">
              PROFESSIONAL REAL ESTATE EDITING
            </p>

            <h1>
              Premium Property
              <br />
              Editing Services
            </h1>

            <p className="hero-desc">
              Photo Editing, Video Editing,
              Graphic Design & Motion Graphics
              Services with High Quality Output.
            </p>

            <div className="hero-buttons">

              <button className="primary-btn">
                GET STARTED
              </button>

              <button className="secondary-btn">
                VIEW SERVICES
              </button>

            </div>

          </div>

        </section>

        {/* ABOUT */}

        <section className="section">

          <div className="section-header">

            <p>ABOUT</p>

            <h2>About Zero Pix Creative</h2>

          </div>

          <div className="about-box">

            <p>
              Zero Pix Creative is a creative studio specializing
              in real estate editing, photography, videography,
              graphic design, and motion graphics.
            </p>

            <p>
              We create clean and premium visuals for modern brands
              and real estate businesses.
            </p>

          </div>

        </section>

        {/* SERVICES */}

        <section className="section">

          <div className="section-header">

            <p>SERVICES</p>

            <h2>What We Do</h2>

          </div>

          <div className="services-grid">

            <div className="service-card">

              <h3>Real Estate Editing</h3>

              <ul>

                <li>HDR Editing</li>

                <li>Sky Replacement</li>

                <li>Object Removal</li>

                <li>Day To Dusk</li>

              </ul>

            </div>

            <div className="service-card">

              <h3>Video Editing</h3>

              <ul>

                <li>Walkthrough Videos</li>

                <li>Cinematic Edit</li>

                <li>Drone Edit</li>

                <li>Social Media Reels</li>

              </ul>

            </div>

            <div className="service-card">

              <h3>Graphic Design</h3>

              <ul>

                <li>Branding</li>

                <li>Poster Design</li>

                <li>Motion Graphics</li>

                <li>Packaging Design</li>

              </ul>

            </div>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="footer">

          <h2>ZERO PIX CREATIVE</h2>

          <p>
            Real Estate Editing • Photography • Videography
          </p>

          <p>
            © 2026 All Rights Reserved
          </p>

        </footer>

      </main>
    </>
  );
}

export default App;