import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPhone, FaEnvelope,FaMapMarkerAlt} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="text-primary mb-3">TechService Pro</h5>
            <p className="text-light">
              Professional technician services for all your technical needs. 
            </p>
          </Col>
          


          <Col md={4} className="mb-4">
            <h5 className="text-primary mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li className="mb-2"><a href="/technicians" className="text-light text-decoration-none">Technicians</a></li>
              <li className="mb-2"><a href="/booking" className="text-light text-decoration-none">Book Service</a></li>
              <li className="mb-2"><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5 className="text-primary mb-3">Contact Info</h5>
            <div className="mb-2">
              <FaPhone className="me-2 text-primary" />
              <span className="text-light">+91 6294603300</span>
            </div>



            <div className="mb-2">
              <FaEnvelope className="me-2 text-primary" />
              <span className="text-light">techservice@gmail.com</span>
            </div>


            <div className="mb-2">
              <FaMapMarkerAlt className="me-2 text-primary" />
              <span className="text-light">2/1 JK Road , kolkata :115</span>
            </div>

            
          </Col>
        </Row>
        
        
      </Container>
    </footer>
  )
}

export default Footer