import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
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
                        <i class="bi bi-whatsapp">123-456-7890</i>
                    </div>
                    <div className='icon'>
                        <i class="bi bi-telephone">123-456-7890</i>
                    </div>
                </div>

                <div className='line horizontal'></div>
                
                <div className='contact-row'>
                    <div className='email'>
                        <i class="bi bi-envelope"></i>
                        <p>example@example.com</p>
                    </div>
                    
                    <div className='line vertical'></div>

                    <div className='address'>
                        <i class="bi bi-geo-alt"></i>
                        <p>via delle vie</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ContactInfo;
