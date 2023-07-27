import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Style/Nav.css";
import { Link } from "react-router-dom";
import logo from "../assets/WhatsApp Image 2023-06-17 at 10.32.11.jpg";
function NaveBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header style={{ paddingTop: "20px" }}>
      <h3>
        <img src={logo} style={{ width: "65px" }} alt="logo" />
      </h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/ebook">Ebook</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/video">Videos</Link>
        <Link to="/about">About</Link>
        <Link className="" to="/login" style={{ justifyContent: "right" }}>
          Login
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NaveBar;
