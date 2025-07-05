import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import '../styles/BookingPage.css'

const BookingPage = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: '',
    city: '', zipCode: '', service: '', technician: '', date: '', time: '',
    urgency: 'normal', description: '', agreeTerms: false
  });
  const [technicians, setTechnicians] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/technicians/available')
      .then(res => res.json())
      .then(data => setTechnicians(data))
      .catch(err => console.error('Failed to fetch technicians', err));
  }, []);

  const services = [
    'Computer Repair & Maintenance',
    'Mobile Device Repair',
    'Network Setup & Configuration',
    'Smart Home Installation',
    'Printer & Scanner Service',
    'Security Camera Installation',
    'Gaming Console Repair',
    'Data Recovery & Backup'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        technicianId: formData.technician
      };
      delete payload.technician;

      const response = await fetch('http://localhost:5000/api/worker-bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', address: '',
          city: '', zipCode: '', service: '', technician: '', date: '',
          time: '', urgency: 'normal', description: '', agreeTerms: false
        });
      } else {
        alert(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      alert('Server error.');
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <Container style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <Row className="mb-5">
        <Col className="text-center">
          <h1 className="display-4 fw-bold mb-3">Book Your Service</h1>
          <p className="lead text-muted">Schedule your appointment with our expert technicians</p>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <Card className="shadow">
            <Card.Header className="bg-primary text-white">
              <h4 className="mb-0">Service Booking Form</h4>
            </Card.Header>
            <Card.Body className="p-4">
              {showAlert && <div className="alert alert-success">Your booking has been submitted!</div>}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>First Name *</Form.Label>
                    <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Last Name *</Form.Label>
                    <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label><FaEnvelope className="me-1" /> Email Address *</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label><FaPhone className="me-1" /> Phone Number *</Form.Label>
                    <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Street Address *</Form.Label>
                  <Form.Control type="text" name="address" value={formData.address} onChange={handleInputChange} required />
                </Form.Group>

                <Row>
                  <Col md={8} className="mb-3">
                    <Form.Label>City *</Form.Label>
                    <Form.Control type="text" name="city" value={formData.city} onChange={handleInputChange} required />
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Label>PIN Code *</Form.Label>
                    <Form.Control type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Select Service *</Form.Label>
                    <Form.Select name="service" value={formData.service} onChange={handleInputChange} required>
                      <option value="">Choose a service...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Preferred Technician</Form.Label>
                    <Form.Select name="technician" value={formData.technician} onChange={handleInputChange} required>
                      <option value="">Choose an available technician</option>
                      {technicians.map((tech) => (
                        <option key={tech._id} value={tech._id}>{tech.name} - {tech.expertise}</option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Preferred Date *</Form.Label>
                    <Form.Control type="date" name="date" value={formData.date} onChange={handleInputChange} min={getTomorrowDate()} max={getMaxDate()} required />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Preferred Time *</Form.Label>
                    <Form.Select name="time" value={formData.time} onChange={handleInputChange} required>
                      <option value="">Select time...</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Service Urgency</Form.Label>
                  <Form.Select name="urgency" value={formData.urgency} onChange={handleInputChange}>
                    <option value="normal">Normal (1-3 days)</option>
                    <option value="urgent">Urgent (Same day)</option>
                    <option value="emergency">Emergency (ASAP)</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Problem Description</Form.Label>
                  <Form.Control as="textarea" rows={4} name="description" value={formData.description} onChange={handleInputChange} placeholder="Describe the issue..." />
                </Form.Group>

                <Button type="submit" size="lg" className="w-100 btn-custom btn-primary-custom">Book Service</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingPage;