import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/worker-bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message || 'Booking successful!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          message: ''
        });
      }else{
      alert(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      alert('Server error.');
    }
  };
  return (
  <form onSubmit={handleSubmit}>

      <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
      <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}/>
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange}/>
      <input name="service" placeholder="Service" value={formData.service} onChange={handleChange}/>
      <input  name="date" type="date" value={formData.date} onChange={handleChange}/>
      <textarea name="message" placeholder="Describe the problem" value={formData.message} onChange={handleChange}/>
      <button type="submit">Submit Booking</button>


  </form>
  );
};
export default BookingForm;
