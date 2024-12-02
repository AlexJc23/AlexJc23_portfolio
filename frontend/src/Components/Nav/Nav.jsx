import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setShowMenu(false); // Close the menu after clicking
  };

  return (
    <div className="navigation">
      <NavLink style={{color: 'black'}} to={"/"}>Alex</NavLink>

      <div className="menu-container">
        {isMobile && (
          <div className="icon-container">
            {!showMenu ? (
              <CiMenuFries onClick={toggleMenu} />
            ) : (
              <RiCloseLargeLine onClick={toggleMenu} />
            )}
          </div>
        )}

        <ul className={`nav-menu ${showMenu ? "show" : ""}`}>
          <li className="menu-item">
            <button onClick={() => scrollToSection("about")} className="nav-link">
              About Me
            </button>
          </li>
          <li className="menu-item">
            <button onClick={() => scrollToSection("projects")} className="nav-link">
              Projects
            </button>
          </li>
          <li className="menu-item">
            <a style={{textDecoration: 'none'}} href="/resume" target="_blank" rel="noopener noreferrer" className="nav-link">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
