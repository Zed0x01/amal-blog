import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="up__footer">
          <div className="list__footer">
            <div className="footer__logo">
              <svg viewBox="0 0 400 400" class="header__logo">
                <path d="M 100 100 L 300 100 L 200 300 z"></path>
              </svg>
              <h1>Amal Blog</h1>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet,consectetur adipiscing elit
            </p>
            <div className="footer__icons">
              <a href="/">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="list__footer">
            <h1>MARKETING</h1>
            <a href="/">Ad Tech</a>
            <a href="/">Email Marketing</a>
            <a href="/">Social Media</a>
            <a href="/">Mobile Marketing</a>
          </div>
          <div className="list__footer">
            <h1>ABOUT US</h1>
            <a href="/">Finance</a>
            <a href="/">Accounting</a>
            <a href="/">Dara Science</a>
            <a href="/">Payments</a>
          </div>
          <div className="list__footer">
            <h1>SUPPORT</h1>
            <a href="/">Community</a>
            <a href="/">Contact Us</a>
            <a href="/">Live Chat</a>
            <a href="/">Sales</a>
          </div>
        </div>
        <div className="down__footer">
          <p>&copy; Amal Blog</p>
          <p>
            Made By @{" "}
            <a href="https://www.facebook.com/sherifashraf404/">Sherif Zaher</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
