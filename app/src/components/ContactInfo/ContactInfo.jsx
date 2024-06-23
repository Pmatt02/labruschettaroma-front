import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className='contact-info-container'>
            
            <div className='contact-header'>
                <h3>Orari di apertura</h3>
                <p>Orario continuato</p>
                <p>Dal lunedì alla domenica</p>
                <p>11:00 - 23:00</p>
            </div>

            <hr className='line horizontal'/>
            
            <div className='contact-details'>

                <div className='numbers'>
                    <div className='icon'>
                        <i className="bi bi-whatsapp">123-456-7890</i>
                    </div>
                    <div className='icon'>
                        <i className="bi bi-telephone">123-456-7890</i>
                    </div>
                </div>

                <div className='line horizontal'></div>
                
                <div className='contact-row'>
                    <div className='email'>
                        <i className="bi bi-envelope"></i>
                        <p>example@example.com</p>
                    </div>
                    
                    <div className='line vertical'></div>

                    <div className='address'>
                        <i className="bi bi-geo-alt"></i>
                        <p>via delle vie</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ContactInfo;
