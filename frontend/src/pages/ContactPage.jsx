import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        alert('Please fill in all fields.');
        return;
      }

      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);

        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Error sending message.');
      }
    } catch (err) {
      console.error(err);
      alert('Server error.');
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['6294603300', '8240445130'],
      color: 'primary'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['dattaabhishek8@gmail.com', '23cs2011003jis@gmail.com'],
      color: 'success'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: ['Agarpara, Nilgunj Road', 'JIS University, 700000'],
      color: 'warning'
    },
  ];

  const locations = [
    {
      name: 'Dum Dum Office',
      address: '7-Roymallick Colony, Kundubagan, 740000',
      phone: '6294603300',
      manager: 'Abhishek Datta'
    },
    {
      name: 'Agarpara Office',
      address: 'Agarpara, Kamarhati, 750000',
      phone: '9999999999',
      manager: 'Antara Biswas'
    },
    {
      name: 'Barrackpore Office',
      address: 'Barrackpore Road, Dada Boudi Biriyani, 760000',
      phone: '1000000000',
      manager: 'Ankit Das'
    }
  ];

  return (
    <Container style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      {/* Header */}
      <Row className="mb-5">
        <Col className="text-center">
          <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
          <p className="lead text-muted">
            Support &nbsp;||&nbsp; Service &nbsp;||&nbsp; Inquiries
          </p>
        </Col>
      </Row>

      <Row>
        {/* Contact Form */}
        <Col lg={8} className="mb-4">
          <Card className="shadow">
            <Card.Header className="bg-primary text-white">
              <h4 className="mb-0">Send us a Message</h4>
            </Card.Header>
            <Card.Body className="p-4">
              {showAlert && (
                <Alert variant="success">Message sent successfully!</Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Full Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Email Address *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Subject *</Form.Label>
                    <Form.Select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="service">Service Question</option>
                      <option value="support">Technical Support</option>
                      <option value="complaint">Complaint</option>
                      <option value="compliment">Compliment</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Col>
                </Row>

                <div className="mb-3">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide details"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-100 btn-custom btn-primary-custom"
                >
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Information */}
        <Col lg={4}>
          <Row>
            {contactInfo.map((info, index) => (
              <Col sm={6} lg={12} key={index} className="mb-3">
                <Card className="h-100 text-center">
                  <Card.Body>
                    <div className={`service-icon bg-${info.color} mb-3`}>
                      <info.icon />
                    </div>
                    <h6 className="fw-bold">{info.title}</h6>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted mb-0 small">{detail}</p>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Service Locations */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center mb-4">Our Service Locations</h2>
          <Row>
            {locations.map((location, index) => (
              <Col md={4} key={index} className="mb-3">
                <Card className="h-100">
                  <Card.Header className="bg-light">
                    <h6 className="mb-0 fw-bold">{location.name}</h6>
                  </Card.Header>
                  <Card.Body>
                    <p className="mb-2">
                      <FaMapMarkerAlt className="text-primary me-2" />
                      {location.address}
                    </p>
                    <p className="mb-2">
                      <FaPhone className="text-success me-2" />
                      {location.phone}
                    </p>
                    <p className="mb-0">
                      <strong>Manager:</strong> {location.manager}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
