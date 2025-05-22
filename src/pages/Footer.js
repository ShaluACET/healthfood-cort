import React from "react";
import '../App.css'; // optional if styles are in separate file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo">
          <h3>🍃 Diet Foods</h3>
          <p>Eat fresh. Live healthy.</p>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Tips</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Diet Foods. All rights reserved.</p>
      </div>
    </footer>
  );
}
