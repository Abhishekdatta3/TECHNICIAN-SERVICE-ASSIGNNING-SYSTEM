import React, { useEffect, useState } from 'react';
import './AdminQueriesPage.css';

const AdminQueriesPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/contact');
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        console.error('Failed to fetch messages:', err);
      }
    };
    fetchMessages();
  }, []);

  const handleConfirm = async (id) => {
    const confirmed = window.confirm('Are you sure you want to mark this query as completed?');
    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:5000/api/contact/${id}`, {
          method: 'DELETE',
        });
        const result = await res.json();
        if (res.ok) {
          setMessages(prev => prev.filter(msg => msg._id !== id));
        } else {
          alert('Failed to delete message: ' + result.message);
        }
      } catch (err) {
        console.error('Error deleting message:', err);
        alert('Something went wrong!');
      }
    }
  };

  return (
    <div className="admin-queries">
      <h1>📩 Contact Queries</h1>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Message</th><th>Date</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(msg => (
            <tr key={msg._id}>
              <td>{msg.name}</td>
              <td>{msg.email}</td>
              <td>{msg.message}</td>
              <td>{new Date(msg.createdAt).toLocaleString()}</td>
              <td>
                <button className="confirm-btn" onClick={() => handleConfirm(msg._id)}>
                  ✅ Complete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminQueriesPage;
