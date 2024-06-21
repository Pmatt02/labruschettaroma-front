import React from 'react';
import ContactForm from '../../components/ContactInfo/ReservationForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

function Contatti() {

  return (
    <div className='page'>
        <div className='titleContatti'>
          <h1>ciao qui ci sono i contatti</h1>
        </div>
        <div className='formContatti'>
          <ContactForm />
        </div>
        <div>
          <ContactInfo />
        </div>
    </div>
  );
}

export default Contatti;