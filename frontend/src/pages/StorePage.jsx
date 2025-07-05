import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const StorePage = () => {
  const { addToCart } = useContext(CartContext);
  const [message, setMessage] = useState('');

  const products = [
    { id: 1, name: 'Screw Set', price: 50},
    { id: 2, name: 'Cable Kit', price: 150},
    { id: 3, name: 'Battery Pack', price: 300},
    { id: 4, name: 'LED Module', price: 200},
    { id: 5, name: 'Motor Driver', price: 500},
    { id: 6, name: 'Sensor Kit', price: 450},
    { id: 7, name: 'Water Pipes', price: 100},
    { id: 8, name: 'Taps', price: 850},
    { id: 9, name: 'Threepin Plug', price: 120},
  ];
  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage(`${product.name} added to cart!`);
    setTimeout(() => setMessage(''), 2000);
  };
  return (
    <Container style={{ paddingTop: '100px' }}>
      <h1>Buy Components</h1>
      {message && <Alert variant="success">{message}</Alert>}
      <Row>
        {products.map((p) => (
          <Col md={4} key={p.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>₹ {p.price}</Card.Text>
                <Button onClick={() => handleAddToCart(p)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StorePage;
