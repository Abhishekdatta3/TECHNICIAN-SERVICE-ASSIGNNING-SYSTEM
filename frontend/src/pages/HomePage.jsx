import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBroom, FaTemperatureHigh, FaWifi, FaCar, FaCog, FaShieldAlt, FaClock, FaStar } from 'react-icons/fa'
import '../styles/HomePage.css'


const HomePage = () => {
  const stats = [
    { icon: FaStar , label: 'Happy Customers' },
    { icon: FaCog , label: 'Expert Technicians' },
    { icon: FaClock, label: 'Support Available' },
    { icon: FaShieldAlt, label: 'Satisfaction Guarantee' },
  ]
  const featuredServices = [
    {
      icon: FaBroom,
      title: 'House Cleanning',
      description: 'Professional House and Garden cleaner',
      color: 'primary'
    },
    {
      icon:FaTemperatureHigh ,
      title: 'AC Repair',
      description: 'Professional AC repair ',
      color: 'success'
    },
    {
      icon: FaWifi,
      title: 'Network Setup',
      description: 'Home and office network installation and configuration',
      color: 'info'
    },
    {
      icon: FaCar,
      title: 'Car Repair',
      description: 'Complete Car repair with professionals',
      color: 'warning'
    },
    
  ]

  return (
    <> 
      <section className="hero-section">
        <Container>
          <Row className="align-items-center" style={{ paddingTop: '125px', paddingBottom: '125px' }}>

            <Col lg={6} className="hero-content">
              <div className="fade-in">
                <h1 className="display-4 fw-bold mb-4">
                  Professional Technician Services
                </h1>
                <p className="lead mb-4">
                  Get expert technical support 
                  
                </p>
                <div className="d-flex gap-3">
                  <Button 
                    as={Link} 
                    to="/booking" 
                    size="lg" 
                    className="btn-custom"
                  >
                    Book Service Now
                  </Button>
                  <Button 
                    as={Link} 
                    to="/services"  
                    size="lg"
                    className="btn-custom"
                  >
                    View Services
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="pulse">
                <img 
                  src="./src/assets/computerRepair_pic.jpg"
                  alt="Technician at work" 
                  className="img-fluid rounded-3 shadow-lg"
                  style={{maxHeight: '400px'}}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>




      <section className="py-5 bg-light">
        <Container>
          <Row>
            {stats.map((stat, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <div className="stats-card text-center">
                  <stat.icon className="text-primary fs-1 mb-3" />
                  <span className="stats-number">{stat.number}</span>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    



      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-5 fw-bold mb-3">Our Featured Services</h2>
              <p className="lead text-muted">
                We provide  technical solutions for homes and businesses
              </p>
            </Col>
          </Row>
          
          <Row>
            {featuredServices.map((service, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <Card className="service-card h-100">
                  <Card.Body className="text-center p-4">
                    <div className={`service-icon bg-${service.color} mb-3`}>
                      <service.icon />
                    </div>
                    <h5 className="fw-bold mb-3">{service.title}</h5>
                    <p className="text-muted">{service.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          <Row className="mt-5">
            <Col className="text-center">
              <Button 
                as={Link} 
                to="/services" 
                size="lg" 
                className="btn-custom"
              >
                View All Services
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <img 
                src="./src/assets/homeServices_pic.jpg" 
                alt="Professional technician team" 
                className="img-fluid"
              />
            </Col>
            <Col lg={6}>
              <h2 className="display-5 fw-bold mb-4">Why Choose TechService Pro?</h2>
              <div className="mb-3">
                <h5 className="fw-bold">Expert Technicians</h5>
                <p className="text-muted">Certified professionals with years of experience</p>
              </div>
              <div className="mb-3">
                <h5 className="fw-bold">Fast Response</h5>
                <p className="text-muted">Same-day service available for urgent repairs</p>
              </div>
              <div className="mb-3">
                <h5 className="fw-bold">Low Pricing</h5>
                <p className="text-muted">No hidden fees</p>
              </div>
              <div className="mb-3">
                <h5 className="fw-bold">Warranty Guarantee</h5>
                <p className="text-muted">All repairs come with warranty</p>
              </div>
              <Button 
                as={Link} 
                to="/technicians" 
                className="btn-custom">
                Meet Our Team
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HomePage