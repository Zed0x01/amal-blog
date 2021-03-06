import React, { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState("transparent");
  const [dark, setDark] = useState("Dark Mode");

  const handle = () => {
    if (document.body.getAttribute("data-theme")) {
      document.body.removeAttribute("data-theme");
      setDark("Dark Mode");
    } else {
      setDark("Light Mode");
      document.body.setAttribute("data-theme", "dark");
    }
  };

  const showMenu = () => {
    const menu = document.querySelector(".nav__linksx");
    if (menu?.classList.contains("show")) {
      menu.classList.add("hide");
      menu.classList.remove("show");
    } else {
      menu?.classList.add("show");
      menu?.classList.remove("hide");
    }
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setNavbar("black__bottom");
    } else {
      setNavbar("transparent");
    }
  });

  return (
    <div className="header">
      <div className={`container ${navbar}`}>
        <div className="header__logos">
          <svg viewBox="0 0 400 400" className="header__logo">
            <path d="M 100 100 L 300 100 L 200 300 z"></path>
          </svg>
          <h1 className="header__name">Amal Blog</h1>
        </div>
        <div className="nav__links">
          <a href="/" className="">
            HOME
          </a>
          <a href="/" className="">
            PORTFOLIO
          </a>
          <a href="/" className="">
            BLOG
          </a>
          <a href="/" className="">
            SHOP
          </a>
          <button
            className="Dark_ModeBtn"
            onClick={() => {
              handle();
            }}
          >
            {dark}
          </button>
        </div>
        <i
          className="fa-solid fa-bars burger__bar"
          onClick={() => {
            showMenu();
          }}
        >
          <div className="nav__linksx">
            <a href="/" className="">
              HOME
            </a>
            <a href="/" className="">
              PORTFOLIO
            </a>
            <a href="/" className="">
              BLOG
            </a>
            <a href="/" className="">
              SHOP
            </a>
            <button
              className="Dark_ModeBtn"
              onClick={() => {
                handle();
              }}
            >
              {dark}
            </button>
          </div>
        </i>
      </div>
    </div>
  );
};

export default Header;
