import React from "react";
import '../App.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">🍃 Diet Foods</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Tips</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
        <div className="nav-icons">
          <button>🔍</button>
          {/* <button>🛒</button> */}
          <button>👤</button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
  <div className="hero-text">
    <h1>
      Healthy <span className="highlight">LIFESTYLE</span>
    </h1>
    <p className="subtitle">Healthy food to start a diet lifestyle</p>
    <p className="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <button className="btn-primary">READ MORE TIPS</button>
  </div>

  <div className="hero-images">
    <div className="image-large image-card">
      <img
        src="https://www.cookingclassy.com/wp-content/uploads/2019/05/fruit-salad-4.jpg"
        alt="Healthy Bowl"
      />
      <span className="label">🥑 Vita Nutrition</span>
    </div>
    <div className="image-small image-card">
      <img
        src="https://imgcdn.stablediffusionweb.com/2024/5/2/37581af2-6a55-4312-8122-bf9f105e3502.jpg"
        alt="Healthy Dish"
      />
      <span className="label">🥦 Fresh Healthy</span>
    </div>
  </div>
</section>

    </div>
  );
}
