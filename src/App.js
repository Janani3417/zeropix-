// src/App.jsx

import { useState } from "react";
import "./App.css";
import logo from "./logo.png";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="logo-box">

          <img src={logo} alt="Zero Pix Logo" />

          <div className="logo-text">

            

          </div>

        </div>

        {/* DESKTOP NAV */}

        <nav className="desktop-nav">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#packages">Packages</a>

          <a href="#why">Why Us</a>

          <a href="#contact">Contact</a>

        </nav>

        {/* MOBILE MENU BUTTON */}

        <div
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >

          <span></span>
          <span></span>
          <span></span>

        </div>

      </header>

      {/* MOBILE NAV */}

      <div className={menuOpen ? "mobile-nav active" : "mobile-nav"}>

        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>

        <a href="#packages" onClick={() => setMenuOpen(false)}>
          Packages
        </a>

        <a href="#why" onClick={() => setMenuOpen(false)}>
          Why Us
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

      </div>

      {/* ================= HERO SECTION ================= */}

      <section className="hero" id="home">

        <div className="hero-card">

          <p className="hero-small-title">
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
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              View Services
            </button>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="section" id="about">

        <div className="container">

          <p className="section-small-title">
            ABOUT
          </p>

          <h2>
            Zero Pix Creative
          </h2>

          <p className="desc">
            Zero Pix Creative is a creative studio specializing in real estate photo and video editing, along with photography, videography, graphic design, and video editing services, with a strong focus on professional colour correction and visual enhancement.
          </p>

          <p className="desc">
            Our work combines creativity with precision to deliver clean, high-quality visuals that highlight properties and brands in the best possible way.
          </p>

          <p className="desc">
            From property photo retouching and HDR editing to cinematic real estate videos, walkthroughs, and engaging visual content, we help realtors, builders, businesses, and creators present their ideas with clarity and impact.
          </p>

          <p className="desc">
            We focus on detail, lighting, design, and colour accuracy to create visuals that attract attention, enhance listings, strengthen brand identity, and build a strong professional presence across digital platforms.
          </p>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="dark-section" id="services">

        <div className="container">

          <p className="section-small-title yellow">
            WHAT WE DO
          </p>

          <h2 className="white">
            Professional Creative Services
          </h2>

          <div className="services-grid">

            {/* PHOTO EDITING */}

            <div className="service-card">

              <h3>🏠 Real Estate Photo Editing</h3>

              <ul>
                <li>Virtual Staging</li>
                <li>HDR Photos</li>
                <li>Day-to-Dusk Conversion</li>
                <li>Interior Colour Balancing</li>
                <li>Sky Replacement</li>
                <li>Perspective Correction</li>
                <li>Furniture Clean-up</li>
                <li>Amenity Highlights Editing</li>
              </ul>

            </div>

            {/* VIDEO */}

            <div className="service-card">

              <h3>🎥 Real Estate Video Editing</h3>

              <ul>
                <li>Walkthrough Video Editing</li>
                <li>Cinematic Real Estate Editing</li>
                <li>Social Media / Reel Editing</li>
                <li>Promotional Editing</li>
                <li>Map & Location Highlight Editing</li>
                <li>Drone Footage Editing</li>
              </ul>

            </div>

            {/* DESIGN */}

            <div className="service-card">

              <h3>🎨 Graphic Design & Motion</h3>

              <ul>
                <li>Marketing & Advertising Design</li>
                <li>Product Packaging</li>
                <li>Labels & Wrappers</li>
                <li>Animated Graphics</li>
                <li>GIFs & Social Media Editing</li>
                <li>Motion Graphics & VFX</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PACKAGES ================= */}

      <section className="section" id="packages">

        <div className="container">

          <p className="section-small-title">
            PACKAGES
          </p>

          <h2>
            Our Real Estate Photo Editing Packages
          </h2>

          <p className="desc">
            As per the editing jobs required, we have defined three packages for our real estate services.
          </p>

          <div className="package-grid">

            {/* BASIC */}

            <div className="package-card">

              <h3>Basic Package</h3>

              <h1>$49</h1>

              <ul>
                <li>Basic Colour Correction</li>
                <li>Image Sharpening</li>
                <li>Perspective Correction</li>
                <li>Garage Removal</li>
              </ul>

              <button>Select Plan</button>

            </div>

            {/* PREMIUM */}

            <div className="package-card premium-card">

              <span className="popular-tag">
                MOST POPULAR
              </span>

              <h3>Premium Package</h3>

              <h1>$99</h1>

              <ul>
                <li>White Balance Adjustment</li>
                <li>Sky Replacement</li>
                <li>Dust Removal</li>
                <li>Small Object Removal</li>
                <li>Masking Images</li>
              </ul>

              <button>Select Plan</button>

            </div>

            {/* ADVANCED */}

            <div className="package-card">

              <h3>Advanced Package</h3>

              <h1>$149</h1>

              <ul>
                <li>Exposure Correction</li>
                <li>Lawn Enhancement</li>
                <li>Colour Cast Removal</li>
                <li>HDR Editing</li>
                <li>Floor & Wall Cleaning</li>
              </ul>

              <button>Select Plan</button>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY US ================= */}

      <section className="why-section" id="why">

        <div className="container">

          <p className="section-small-title yellow">
            WHY CHOOSE US
          </p>

          <h2 className="white">
            Why Outsource Real Estate Photo Editing Services To Us
          </h2>

          <div className="why-grid">

            <div className="why-card">

              <h3>Expert Visual Enhancements</h3>

              <p>
                We transform ordinary property photos into eye-catching visuals that instantly attract buyers.
              </p>

            </div>

            <div className="why-card">

              <h3>Fast Turnaround Delivery</h3>

              <p>
                Get edited property images quickly so you can publish listings faster.
              </p>

            </div>

            <div className="why-card">

              <h3>Dedicated Photo Editing Team</h3>

              <p>
                Work with a specialized editing team focused solely on real estate visuals.
              </p>

            </div>

            <div className="why-card">

              <h3>Consistent Quality Output</h3>

              <p>
                Every photo receives professional enhancements with premium quality control.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="contact-section" id="contact">

        <div className="container contact-center">

          <h2>
            Let's Work Together
          </h2>

          <p>
            Contact us for premium real estate editing solutions.
          </p>

          <button>
            Contact Now
          </button>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <h2>ZERO PIX CREATIVE</h2>

        <p>
          Real Estate Editing • Photography • Videography
        </p>

        <p>
          © 2026 All Rights Reserved
        </p>

      </footer>

    </>
  );
}

export default App;