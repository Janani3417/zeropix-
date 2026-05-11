// src/App.jsx

import { useState } from "react";
import "./App.css";
import logo from "./logo1.png";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="nav-left">

          {/* preload effect */}
          <img
            src={logo}
            alt="Zero Pix"
            className="logo"
            loading="eager"
          />

          <div className="brand-text">

            <h2>
              <span className="yellow-text">Beyond</span>{" "}
              <span className="black-text">the </span>
               <span className="black-text1"> Frame</span>
            </h2>

          </div>

        </div>

        {/* DESKTOP MENU */}

        <nav className="desktop-nav">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#whyus">Why Us</a>
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

      {/* ================= MOBILE NAV ================= */}

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

        <a href="#whyus" onClick={() => setMenuOpen(false)}>
          Why Us
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

      </div>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-card">

          <p className="hero-subtitle">
            REAL ESTATE VISUAL SOLUTIONS
          </p>

          <h1>
            Elevate Your
        
            Property Presentation
          </h1>

          <p className="hero-text">
            High-quality Photo & Video Editing,
            Creative Graphics, and Motion Design tailored for
            real estate success.
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

          <p className="small-title">
            ABOUT US
          </p>

          <h2>
            Creative Editing Solutions
            For Modern Real Estate
          </h2>

          <div className="about-box">

            <p>
              Zero Pix Creative is a creative studio specializing in real estate photo and video editing, along with photography, videography, graphic design, and video editing services, with a strong focus on professional colour correction and visual enhancement.
            </p>

            <p>
              Our work combines creativity with precision to deliver clean, high-quality visuals that highlight properties and brands in the best possible way.
            </p>

            <p>
              From property photo retouching and HDR editing to cinematic real estate videos, walkthroughs, and engaging visual content, we help realtors, builders, businesses, and creators present their ideas with clarity and impact.
            </p>

            <p>
              We focus on detail, lighting, design, and colour accuracy to create visuals that attract attention, enhance listings, strengthen brand identity, and build a strong professional presence across digital platforms.
            </p>

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="dark-section" id="services">

        <div className="container">

          <p className="small-title gold">
            WHAT WE DO
          </p>

          <h2 className="white">
            Professional Creative Services
          </h2>

          <div className="services-grid">

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

            <div className="service-card">

              <h3>🎥 Real Estate Video Editing</h3>

              <ul>
                <li>Walkthrough Video Editing</li>
                <li>Cinematic Real Estate Editing</li>
                <li>Social Media / Reel Editing</li>
                <li>Promotional Editing</li>
                <li>Map & Location Highlight Editing</li>
                <li>Agent Presentation Editing</li>
                <li>Drone Footage Editing</li>
              </ul>

            </div>

            <div className="service-card">

              <h3>🎨 Graphic Design & Motion Graphics</h3>

              <ul>
                <li>Posters & Social Media Ads</li>
                <li>Product Packaging</li>
                <li>Boxes, Labels & Wrappers</li>
                <li>Animated Graphics</li>
                <li>Commercial Advertisement Editing</li>
                <li>Corporate Video Editing</li>
                <li>Educational & Tutorial Editing</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY US ================= */}

      <section className="why-section" id="whyus">

        <div className="container">

          <p className="small-title gold">
            WHY CHOOSE US
          </p>

          <h2 className="white">
            Why Outsource Real Estate Editing To Us
          </h2>

          <div className="why-grid">

            <div className="why-card">
              <h3>Expert Visual Enhancements</h3>
              <p>
                We transform ordinary property photos into eye-catching, professionally enhanced images.
              </p>
            </div>

            <div className="why-card">
              <h3>Fast Turnaround Delivery</h3>
              <p>
                Get edited and optimized property images quickly for faster listings.
              </p>
            </div>

            <div className="why-card">
              <h3>Dedicated Editing Team</h3>
              <p>
                Skilled professionals focused only on real estate photo editing.
              </p>
            </div>

            <div className="why-card">
              <h3>Consistent Quality Output</h3>
              <p>
                Uniform lighting, colour correction, and clarity in every project.
              </p>
            </div>

            <div className="why-card">
              <h3>Scalable Support</h3>
              <p>
                Whether you have few images or thousands, we scale easily.
              </p>
            </div>

            <div className="why-card">
              <h3>Cost Effective Solutions</h3>
              <p>
                High-end editing quality at affordable outsourcing pricing.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="contact-section" id="contact">

        <div className="container contact-box">

          <h2>
            Let’s Work Together
          </h2>

          <p>
            Contact us for premium real estate editing services.
          </p>

          <button>
            Contact Now
          </button>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <img src={logo} alt="logo" />

        <h2>Zero Pix Creative Studio</h2>

        <p>
          Real Estate Editing • Photography • Videography
        </p>

        <p>
          © 2026 All Rights Reserved
        </p>

      </footer>

    </div>

  );

}

export default App;