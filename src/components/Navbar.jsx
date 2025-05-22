import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar-container')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#home" className="navbar-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">Nurullah<span className="primary-color">.</span></span>
        </a>

        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" onClick={() => scrollToSection('home')}>
              Ana Sayfa
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={() => scrollToSection('about')}>
              Ben Kimim?
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" onClick={() => scrollToSection('skills')}>
              Neler Yapabilirim?
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" onClick={() => scrollToSection('portfolio')}>
              Portfolyo
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={() => scrollToSection('contact')}>
              İletişim
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;