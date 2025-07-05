import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Form } from 'react-bootstrap';
import { FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

// ✅ Image imports
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';
import i5 from '../assets/i5.png';
import i6 from '../assets/i6.png';
import i7 from '../assets/i7.png';
import i8 from '../assets/i8.png';
import smartHousePic from '../assets/smartHouse_pic.jpg';
import plumberPic from '../assets/plumber_pic.jpg';

const TechniciansPage = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const technicians = [
    {
      id: 1,
      name: 'Ram Roy',
      specialty: 'Computer Hardware',
      image: i8,
      rating: 4.7,
      reviews: 89,
      experience: '8 years',
      location: 'Dum Dum',
      phone: '11111111111',
      email: 'ram@gmail.com',
      specialties: ['Hardware Repair', 'System Building', 'Upgrades'],
      bio: 'Specialized in computer hardware diagnostics and repair with extensive experience in custom builds.'
    },
    {
      id: 2,
      name: 'Saym Sekhar',
      specialty: 'Plumber',
      image: plumberPic,
      rating: 4.7,
      reviews: 89,
      experience: '6 years',
      location: 'Agarpara',
      phone: '22222222222',
      email: 'saym@gmail.com',
      specialties: ['Leakage Repair', 'Water Damage Fix'],
      bio: 'Expert plumber with a strong focus on resolving water-related issues quickly and efficiently.'
    },
    {
      id: 3,
      name: 'Modhu Banerjee',
      specialty: 'Smart House',
      image: smartHousePic,
      rating: 4.7,
      reviews: 89,
      experience: '10 years',
      location: 'Sodepur',
      phone: '33333333333',
      email: 'modhu@gmail.com',
      specialties: ['Network Setup', 'Security Configuration', 'Troubleshooting'],
      bio: 'Smart home automation expert specializing in integrated, user-friendly home technology solutions.'
    },
    {
      id: 4,
      name: 'Amit Kumar',
      specialty: 'Computer Technician',
      image: i3,
      rating: 4.5,
      reviews: 120,
      experience: '6 years',
      location: 'Kolkata',
      phone: '9876543210',
      email: 'amit.tech@gmail.com',
      specialties: ['Hardware Repair', 'Software Installation', 'Troubleshooting'],
      bio: 'Experienced computer technician skilled in hardware and software troubleshooting for desktops and laptops.'
    },
    {
      id: 5,
      name: 'Priya Singh',
      specialty: 'Mobile Repair Expert',
      image: i1,
      reviews: 95,
      experience: '4 years',
      location: 'Delhi',
      phone: '9123456789',
      email: 'priya.mobifix@gmail.com',
      specialties: ['Screen Replacement', 'Battery Issues', 'OS Flashing'],
      bio: 'Mobile phone repair expert with expertise in fixing Android and iOS devices.'
    },
    {
      id: 6,
      name: 'Ravi Verma',
      specialty: 'Network Engineer',
      image: i2,
      rating: 4.7,
      reviews: 150,
      experience: '7 years',
      location: 'Mumbai',
      phone: '9988776655',
      email: 'ravi.networkpro@gmail.com',
      specialties: ['Router Setup', 'LAN/WAN', 'Firewall Configuration'],
      bio: 'Professional network engineer helping homes and businesses set up secure and fast networks.'
    },
    {
      id: 7,
      name: 'Kavita Joshi',
      specialty: 'Smart Home Installer',
      image: i4,
      rating: 4.6,
      reviews: 110,
      experience: '5 years',
      location: 'Bengaluru',
      phone: '9090909090',
      email: 'kavita.smarthome@gmail.com',
      specialties: ['Automation Setup', 'Voice Control Integration', 'IoT Troubleshooting'],
      bio: 'Smart home automation expert focused on simplifying everyday living with technology.'
    },
    {
      id: 8,
      name: 'Sandeep Das',
      specialty: 'Printer Technician',
      image: i5,
      rating: 4.2,
      reviews: 60,
      experience: '6 years',
      location: 'Kolkata',
      phone: '9234567890',
      email: 'sandeep.printerfix@gmail.com',
      specialties: ['Inkjet and Laser Repairs', 'Driver Installation', 'Paper Jam Solutions'],
      bio: 'Printer repair technician with in-depth experience across HP, Canon, and Epson devices.'
    },
    {
      id: 9,
      name: 'Neha Sharma',
      specialty: 'Security System Installer',
      image: i6,
      rating: 4.8,
      reviews: 130,
      experience: '8 years',
      location: 'Pune',
      phone: '9000001111',
      email: 'neha.securetech@gmail.com',
      specialties: ['CCTV Setup', 'Door Access Systems', 'Smart Locks'],
      bio: 'Certified professional for residential and commercial security system installations.'
    },
    {
      id: 10,
      name: 'Anjal Mehra',
      specialty: 'AC Technician',
      image: i7,
      rating: 4.5,
      reviews: 105,
      experience: '6 years',
      location: 'Chennai',
      phone: '9444444444',
      email: 'anjali.coolcare@gmail.com',
      specialties: ['Gas Refill', 'Cooling Issues', 'Installation'],
      bio: 'Expert in servicing and repairing window, split, and inverter ACs.'
    }
  ];

  const specialties = [
    { value: 'all', label: 'All Specialists' },
    ...Array.from(new Set(technicians.map(t => t.specialty))).map(spec => ({
      value: spec,
      label: spec
    }))
  ];

  const filteredTechnicians = technicians.filter(
    tech => selectedSpecialty === 'all' || tech.specialty === selectedSpecialty
  );

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-warning" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="text-warning opacity-50" />);
    }

    return stars;
  };

  return (
    <Container style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <Row className="mb-5">
        <Col className="text-center">
          <h1 className="display-4 fw-bold mb-3">Our Expert Technicians</h1>
          <p className="lead text-muted"> Meet our certified professionals ready to solve your technical challenges</p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6} className="mx-auto">
          <Form.Select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}>
            {specialties.map((spec) => (
              <option key={spec.value} value={spec.value}>
                {spec.label}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <Row>
        {filteredTechnicians.map((technician) => (
          <Col md={6} lg={4} key={technician.id} className="mb-4">
            <Card className="technician-card h-100">
              <img
                src={technician.image}
                alt={technician.name}
                className="technician-image card-img-top" />
              <Card.Body className="d-flex flex-column">
                <div className="text-center mb-3">
                  <h5 className="fw-bold mb-1">{technician.name}</h5>
                  <p className="text-primary mb-2">{technician.specialty}</p>
                  <div className="d-flex justify-content-center align-items-center mb-2">
                    {renderStars(technician.rating)}
                    <span className="fw-bold ms-2">{technician.rating}</span>
                    <span className="text-muted ms-1">({technician.reviews} reviews)</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Experience:</span>
                    <span className="fw-bold">{technician.experience}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">
                      <FaMapMarkerAlt className="me-1" />
                      Location:
                    </span>
                    <span>{technician.location}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-muted small">{technician.bio}</p>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold mb-2">Specialties:</h6>
                  <div className="d-flex flex-wrap gap-1">
                    {technician.specialties.map((spec, index) => (
                      <Badge key={index} bg="light" text="dark" className="small">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="d-flex gap-2 mb-3">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="flex-fill"
                      href={`tel:${technician.phone}`}>
                      <FaPhone className="me-1" />
                      Call
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="flex-fill"
                      href={`mailto:${technician.email}`}>
                      <FaEnvelope className="me-1" />
                      Email
                    </Button>
                  </div>
                  <Button className="w-100 btn-primary">
                    Book Appointment
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TechniciansPage;
