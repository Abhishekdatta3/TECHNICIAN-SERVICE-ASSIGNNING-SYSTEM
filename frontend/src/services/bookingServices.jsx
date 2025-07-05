// frontend/src/services/bookingService.js
const API_BASE_URL = 'http://localhost:5000/api/bookings';

export const bookingService = {
  // Book a technician
  async bookTechnician(bookingData) {
    try {
      const response = await fetch(`${API_BASE_URL}/book-technician`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to book technician');
      }
      
      return data;
    } catch (error) {
      console.error('Booking error:', error);
      throw error;
    }
  },

  // Get all bookings
  async getAllBookings() {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get bookings error:', error);
      throw error;
    }
  },

  // Get active bookings for admin
  async getActiveBookings() {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/active-bookings`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get active bookings error:', error);
      throw error;
    }
  },

  // Mark booking as completed (Admin)
  async markCompleted(bookingId) {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/mark-completed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookingId }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to mark as completed');
      }
      
      return data;
    } catch (error) {
      console.error('Mark completed error:', error);
      throw error;
    }
  },

  // Get technician status
  async getTechnicianStatus(technicianId) {
    try {
      const response = await fetch(`${API_BASE_URL}/technician/${technicianId}/status`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get technician status error:', error);
      throw error;
    }
  },

  // Sync technicians data
  async syncTechnicians(techniciansData) {
    try {
      const response = await fetch(`${API_BASE_URL}/sync-technicians`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ techniciansData }),
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Sync technicians error:', error);
      throw error;
    }
  }
};