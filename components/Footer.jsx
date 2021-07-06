import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="white-seccion pos" id="footer">
      <a
        className="feature-icon:hover ficon"
        href="https://www.facebook.com/Infinity-Rage-Gaming-103714677670238"
      >
        <i className="fab fa-facebook-f"></i>
      </a>
      <p className="copy">© Infinity Rage {year} </p>
    </footer>
  );
}
