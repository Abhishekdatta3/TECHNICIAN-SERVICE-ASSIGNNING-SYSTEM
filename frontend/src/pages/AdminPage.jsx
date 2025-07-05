import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Table, Button, Form, Row, Col } from 'react-bootstrap';

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [techForm, setTechForm] = useState({ name: '', expertise: '' });
  const [techMessage, setTechMessage] = useState('');

  const fetchBookings = async () => {
    try {
      const resBookings = await api.get('/worker-bookings');
      setBookings(resBookings.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
    const interval = setInterval(() => {
      fetchBookings();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const markCompleted = async (id) => {
    try {
      await api.put(`/worker-bookings/${id}/complete`);
      fetchBookings();
    } catch (err) {
      console.error(err);
    }
  };

  const handleTechInput = (e) => {
    const { name, value } = e.target;
    setTechForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTechnician = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/technicians', techForm);
      setTechMessage(`✅ Technician ${res.data.name} added!`);
      setTechForm({ name: '', expertise: '' });
      setTimeout(() => setTechMessage(''), 4000);
    } catch (err) {
      setTechMessage('❌ Failed to add technician.');
      console.error(err);
    }
  };

  if (loading) return <p className="m-5">Loading admin dashboard...</p>;

  return (
    <Container className="mt-5">
      <h2 className="mb-4">👑 Admin Dashboard</h2>

      <Button onClick={fetchBookings} className="mb-3">
        🔄 Refresh Bookings
      </Button>

      <h4>📋 Worker Bookings</h4>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Service</th>
              <th>Technician</th>
              <th>Date</th>
              <th>Time</th>
              <th>Urgency</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td>{b.firstName} {b.lastName}</td>
                <td>{b.email}</td>
                <td>{b.service}</td>
                <td>{b.technician?.name || 'N/A'}</td>
                <td>{b.date}</td>
                <td>{b.time}</td>
                <td>{b.urgency || 'N/A'}</td>
                <td>{b.status}</td>
                <td>
                  {b.status === 'active' && (
                    <Button size="sm" onClick={() => markCompleted(b._id)}>
                      Mark Completed
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <hr className="my-4" />

      <h4>➕ Add Technician</h4>
      <Form onSubmit={handleAddTechnician} className="mb-4">
        <Row>
          <Col md={5}>
            <Form.Control
              type="text"
              placeholder="Technician Name"
              name="name"
              value={techForm.name}
              onChange={handleTechInput}
              required
            />
          </Col>
          <Col md={5}>
            <Form.Control
              type="text"
              placeholder="Expertise (e.g. Mobile Repair)"
              name="expertise"
              value={techForm.expertise}
              onChange={handleTechInput}
              required
            />
          </Col>
          <Col md={2}>
            <Button type="submit" className="w-100">Add</Button>
          </Col>
        </Row>
      </Form>

      {techMessage && <p>{techMessage}</p>}
    </Container>
  );
};

export default AdminPage;
