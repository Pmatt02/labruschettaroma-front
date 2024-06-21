import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
            <h2>Seguici su</h2>
            <div className="social-icons">
                <a href="#" className="social-icon">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="social-icon">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="social-icon">
                    <i class="fa fa-tripadvisor"></i>
                </a>
            </div>
        </div>
        
        <div className="footer-section">
            <h2>Contatti</h2>
            <div className='contactInfo'>
                <i class="bi bi-whatsapp"> 123-456-7890</i>
                <i class="bi bi-telephone"> 123-456-7890</i>
                <i class="bi bi-envelope"> ciao@labruschettaroma.com</i>
            </div>
        </div>

        <div className="footer-section">
            <h2>Dove puoi trovarci</h2>
            <p>mappa</p>
        </div>
        
        <div className="footer-section">
          <p>La passione e la dedizione per la cucina hanno reso il ristorante luogo di fama, dove Aldo e poi suo figlio Raffaele hanno mantenuto alta la tradizione di nonno Andrea.</p>
        </div>
            
        <div className="footer-section">
            <p>Privacy Policy</p>
        </div>

      </div>
      <div className="footer-bottom">
        <img src="/path/to/logo.png" alt="Logo" className="footer-logo" />
        <p>&copy; {new Date().getFullYear()} La Bruschetta Roma</p>
      </div>
    </footer>
  );
};

export default Footer;
