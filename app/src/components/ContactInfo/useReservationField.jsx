import { useState } from 'react';

const useReservationField = () => {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Details:', fields);
  };

  return {
    fields,
    handleChange,
    handleSubmit,
  };
};

export default useReservationField;
