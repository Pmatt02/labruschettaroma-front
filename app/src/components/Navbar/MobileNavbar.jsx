import React, { useState, useEffect } from 'react';
import './MobileNavbar.css';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  return (
    <div>
      <div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menù</a></li>
            <li><a href="/doveSiamo">Dove siamo?</a></li>
            <li><a href="/contatti">Prenota ora</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
