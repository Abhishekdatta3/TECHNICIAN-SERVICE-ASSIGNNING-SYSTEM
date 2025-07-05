import React, { useContext } from 'react';
import { Container, Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  // Calculate total
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container style={{ paddingTop: '100px' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>My Cart</h3>
        {cart.length > 0 && (
          <Button variant="outline-danger" size="sm" onClick={clearCart}>
            Clear Cart
          </Button>
        )}
      </div>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((item, idx) => (
            <Card key={idx} className="mb-3 p-3 shadow-sm">
              <Row className="align-items-center">
                <Col xs={3}>
                  {/* Placeholder image */}
                  <img
                    src="https://via.placeholder.com/100"
                    alt={item.name}
                    className="img-fluid"
                  />
                </Col>
                <Col xs={9}>
                  <h5>{item.name}</h5>
                  <Badge bg="success" className="mb-2">35% OFF</Badge>
                  <p className="mb-1">
                    <del>₹3995</del> <strong>₹{item.price}</strong>
                  </p>
                  <div className="d-flex gap-2">
                    <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                    <Button variant="outline-secondary" size="sm">
                      Save for Later
                    </Button>
                    <Button variant="outline-primary" size="sm">
                      Buy Now
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card>
          ))}

          <div className="d-flex justify-content-between align-items-center mt-4">
            <h5>Total: ₹{totalPrice}</h5>
            <Button variant="warning" size="sm">Place Order</Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
