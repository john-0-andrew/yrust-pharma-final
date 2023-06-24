import "./NavBar.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen(false);
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <img
        className={`logo ${scrolled ? "scrolled" : ""} `}
        src={logo}
        alt=""
      />
      <div>
        <input
          className="menu-icon"
          type="checkbox"
          id="menu-icon"
          name="menu-icon"
          checked={navOpen}
          onChange={() => setNavOpen(!navOpen)}
        />
        <label htmlFor="menu-icon"></label>
        <nav className="nav">
          <ul className="pt-5">
            <li>
              <a href="#work" onClick={closeNav}>
                Work
              </a>
            </li>
            <li>
              <a href="#" onClick={closeNav}>
                Studio
              </a>
            </li>
            <li>
              <a href="#" onClick={closeNav}>
                News
              </a>
            </li>
            <li>
              <a href="#" onClick={closeNav}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
