import React, { useState, useEffect } from "react";
import "./assets/css/Nav.css";

//adding scroll listener

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="/assets/logo.jpg"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="/assets/logo.jpg"
        alt="Netflix Logo"
      />
    </div>
  );
}
export default Nav;
