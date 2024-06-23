import React from 'react';
import useReservationField from './useReservationField';
import './ReservationForm.css';

const ReservationForm = () => {
  const {
    fields,
    handleChange,
    handleSubmit
  } = useReservationField();

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>

      <h2>Reservation Form</h2>

      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={fields.name}
          placeholder="Your Name"
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={fields.email}
          placeholder="Your Email"
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="guests">Telephone number</label>
        <input
          type='tel'
          id="guests"
          name="guests"
          value={fields.guests}
          placeholder="Number of Guests"
          onChange={handleChange}
          disabled
          min="1"
        />
      </div>

      <div className="form-field">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={fields.date}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={fields.time}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="guests">Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={fields.guests}
          placeholder="Number of Guests"
          onChange={handleChange}
          min="1"
        />
      </div>

      <div style={{justifyContent: 'center', display: 'flex'}}>
        <button className='submitButton' type="submit">Prenota</button>
      </div>
    </form>
  );
};

export default ReservationForm;
