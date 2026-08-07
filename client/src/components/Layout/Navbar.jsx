import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`${styles.navContainer} ${scrolled ? styles.scrolled : ""}`}
    >
      <div
        className={styles.logo}
        onClick={() => {
          navigate("/");
          closeMenu();
        }}
        style={{ display: "flex", alignItems: "center", gap: "12px" }}
      >
        <img src="/logo.png" alt="VK Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
        VK Software Solutions
      </div>

      <div
        className={`${styles.navLinks} ${isOpen ? styles.navLinksActive : ""}`}
      >
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.activeLink : ""}`
          }
          onClick={closeMenu}
        >
          Services
        </NavLink>
        <NavLink
          to="/industries"
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.activeLink : ""}`
          }
          onClick={closeMenu}
        >
          Industries
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.activeLink : ""}`
          }
          onClick={closeMenu}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/technologies"
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.activeLink : ""}`
          }
          onClick={closeMenu}
        >
          Technologies
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.activeLink : ""}`
          }
          onClick={closeMenu}
        >
          Blog
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.activeLink : ""}`
          }
          onClick={closeMenu}
        >
          About
        </NavLink>
      </div>

      <button
        className={styles.actionButton}
        onClick={() => {
          navigate("/contact");
          closeMenu();
        }}
      >
        Book Consultation
      </button>

      <button
        className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>
    </nav>
  );
}
