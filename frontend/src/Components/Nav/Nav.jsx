import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  // Update `isMobile` state based on window resize
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

  return (
    <div className="navigation">
      <p>Alex</p>

      <div className="menu-container">
        {/* Show menu icons only on mobile */}
        {isMobile && (
          <div className="icon-container">
            {!showMenu ? (
              <CiMenuFries onClick={toggleMenu} />
            ) : (
              <RiCloseLargeLine onClick={toggleMenu} />
            )}
          </div>
        )}

        {/* Always render menu but toggle `show` class */}
        <ul className={`nav-menu ${showMenu ? "show" : ""}`}>
          <li className="menu-item"> <NavLink to={''} >About Me</NavLink></li>
          <li className="menu-item"><NavLink to={''}>Projects</NavLink></li>
          <li className="menu-item"><NavLink to={'/resume'}>Resume</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
