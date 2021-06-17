import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
            <footer class="white-seccion pos" id="footer">
                <a class="feature-icon:hover ficon" href="https://www.facebook.com/Infinity-Rage-Gaming-103714677670238">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <p class="copy">© Infinity Rage {year} </p>

            </footer>

    );
}