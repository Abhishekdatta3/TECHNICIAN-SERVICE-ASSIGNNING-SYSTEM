import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaLaptop,
  FaMobile,
  FaWifi,
  FaTv,
  FaPrint,
  FaCamera,
  FaBroom,
  FaCar,
  FaSearch,
  FaTemperatureHigh,
  FaHouseDamage,
  FaBolt,
  FaBrush,
} from "react-icons/fa";

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      id: 1,
      icon: FaLaptop,
      title: "Computer Repair & Maintenance",
      description:
        "Hardware diagnosis, software troubleshooting, virus removal, and system optimization.",
      price: "Starting at Rs.1000",
      duration: "1-3 hours",
      category: "computer",
    },
    {
      id: 2,
      icon: FaMobile,
      title: "Mobile Device Repair",
      description:
        "Screen replacement, battery service, water damage repair for smartphones and tablets.",
      price: "Starting at Rs.200",
      duration: "30 mins - 2 hours",
      category: "mobile",
    },
    {
      id: 3,
      icon: FaWifi,
      title: "Network Setup & Configuration",
      description:
        "Wi-Fi setup, router configuration, network security, and troubleshooting.",
      price: "Starting at Rs.400",
      duration: "1-4 hours",
      category: "network",
    },
    {
      id: 4,
      icon: FaTv,
      title: "Smart Home Installation",
      description:
        "Smart TV setup, home automation, security systems, and IoT device configuration.",
      price: "Starting at Rs.1500",
      duration: "2-6 hours",
      category: "House Service",
    },
    {
      id: 5,
      icon: FaPrint,
      title: "Printer & Scanner Service",
      description:
        "Printer setup, troubleshooting, cartridge replacement, and maintenance.",
      price: "Starting at Rs.200",
      duration: "30 mins - 1 hour",
      category: "printer",
    },
    {
      id: 6,
      icon: FaCamera,
      title: "Security Camera Installation",
      description:
        "CCTV installation, IP camera setup, monitoring system configuration.",
      price: "Starting at Rs.800",
      duration: "3-8 hours",
      category: "security",
    },
    {
      id: 7,
      icon: FaBroom,
      title: "House Cleaner",
      description: "professional house cleaner",
      price: "Starting at Rs.500",
      duration: "1-3 hours",
      category: "cleaning",
    },
    {
      id: 8,
      icon: FaCar,
      title: "Car Repair",
      description: "professional car repair . we done all types of work",
      price: "Starting at Rs.220",
      duration: "2-24 hours",
      category: "car",
    },
    {
      id: 9,
      icon: FaBolt,
      title: "Electrician",
      description: "professional electrician",
      price: "Starting at Rs.220",
      duration: "2-24 hours",
      category: "electrical",
    },

    {
      id: 12,
      icon: FaTemperatureHigh,
      title: "AC Technician",
      description: "Professional AC technician",
      price: "Starting at Rs.1120",
      duration: "2-6 hours",
      category: "ac",
    },
  ];

  const categories = [
    { value: "all", label: "All Services" },
    { value: "computer", label: "Computer" },
    { value: "mobile", label: "Mobile" },
    { value: "network", label: "Network" },
    { value: "smart-home", label: "Smart Home" },
    { value: "printer", label: "Printer" },
    { value: "security", label: "Security" },
    { value: "cleaning", label: "Cleaner" },
    { value: "car", label: "Car" },
    { value: "electrical", label: "Electrician" },
    { value: "ac", label: "AC" },
  ];

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container style={{ paddingTop: "100px", paddingBottom: "50px" }}>
      {/* Header */}
      <Row className="mb-5">
        <Col className="text-center">
          <h1 className="display-4 fw-bold mb-3">Our Services</h1>
          <p className="lead text-muted">technical solutions all your needs</p>
        </Col>
      </Row>
{/* Search */}
<Row className="mb-5 justify-content-center">
  <Col md={5} className="mb-3">
    <div className="position-relative">
      <FaSearch
        className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted"
        style={{ fontSize: "13px" }}
      />
      <Form.Control
        type="text"
        placeholder="Search services..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="ps-5"
        style={{
          height: "40px",
          width: "100%",
          fontSize: "14px",
          paddingLeft: "2rem",
        }}
      />
    </div>
  </Col>
</Row>

{/* No Data Message */}
{filteredServices.length === 0 && (
  <Row className="mb-5 justify-content-center">
    <Col md={8} className="text-center">
      <p className="text-muted fs-5">No data found</p>
    </Col>
  </Row>
)}


      {/* Services Grid */}
      <Row>
        {filteredServices.map((service) => (
          <Col md={6} lg={4} key={service.id} className="mb-4">
            <Card className="service-card h-100 rounded - 3 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="text-center mb-3">
                  <div className="service-icon bg-primary mb-3">
                    <service.icon />
                  </div>
                  <div className="d-flex justify-content-center gap-2 mb-2">
                    <h5 className="fw-bold mb-0">{service.title}</h5>
                    {service.popular && (
                      <Badge bg="warning" text="dark">
                        Popular
                      </Badge>
                    )}
                  </div>
                </div>

                <p className="text-muted mb-3 flex-grow-1">
                  {service.description}
                </p>

                <div className="service-details mb-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-bold text-dark">
                      {service.price}
                    </span>
                    <span className="text-muted">{service.duration}</span>
                  </div>
                </div>

                <Button
                  as={Link}
                  to="/booking"
                  state={{ selectedService: service.title }}
                  className="btn-custom btn-primary-custom w-100 rounded-pill" 
                  style={{
                    backgroundColor: '#1f1f1f',  
                    border: "none",
                    padding: "10px 20px",
                  }}
                   // <-- ADDED HERE
                >
                  Book This Service
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;
